'use client'
import React, { useState, useEffect } from 'react';
import useGetDataRecord from '../hooks/useGetDataRecord';

interface Data {
  instruments: string;
  date: string;
  calibration_value: number;
  standard_value: number;
  instruments_reading: number;
}

const DataRecords = () => {
  const { data = [] } = useGetDataRecord();
  const itemsPerPage = 9;
  const [dataRecords, setDataRecords] = useState<Data[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState<Data[]>([]);

  const handleEditChange = (fieldName: keyof Data, value: string) => {
    const updatedDataRecords = [...dataRecords];
    if (editIndex !== null && editIndex >= 0 && editIndex < updatedDataRecords.length) {
      const record = updatedDataRecords[editIndex];
      (record as any)[fieldName] = value;
      setDataRecords(updatedDataRecords);
    }
  };

  // useEffect(() => {
  //   const sortedData = [...data].sort((a, b) => (new Date(b.date) as any) - (new Date(a.date) as any));
  //   setDataRecords(data);
  //   setFilteredData(data);
  // }, [data]);

  useEffect(() => {
    const sortedData = [...data].sort((a: Data, b: Data) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (dateA.getFullYear() !== dateB.getFullYear()) {
        return dateB.getFullYear() - dateA.getFullYear();
      }

      if (dateA.getMonth() !== dateB.getMonth()) {
        return dateB.getMonth() - dateA.getMonth();
      }

      return dateB.getDate() - dateA.getDate();
    });

    setDataRecords(sortedData);
    setFilteredData(sortedData);
  }, [data]);

  const handleSearchChange = (e: any) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = dataRecords.filter((record) => {
      const recordValues = Object.values(record).map((value) =>
        typeof value === 'string' ? value.toLowerCase() : value
      );
      return recordValues.some((value) => {
        if (typeof value === 'string') {
          return value.includes(query);
        }
        return false;
      });
    });
    setFilteredData(filtered);
    setCurrentPage(1); 
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (newPage:any) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="py-4 px-60 ml-20 font-['Sanchez']">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-orange-400 ml-10">Data Records</h1>
        <div className="relative ml-auto mr-40">
          <input
            type="search"
            placeholder="Search..."
            className="border border-gray-500 rounded-full p-2 text-black pl-10 pr-6 w-full focus:outline-none text-lg"
            value={searchQuery}
            onChange={handleSearchChange}/>
        </div>
      </div>

      <table className="w-full space-evenly ml-10 table-fixed">
         <thead>
           <tr className="border-b border-solid border-gray-500">
             <th className="py-6 px-6 text-left text-20 font-semibold">Instrument Name</th>
             <th className="py-6 px-8 text-left text-20 font-semibold">Date</th>
             <th className="py-6 px-6 text-left text-20 font-semibold">Calibration Value</th>
             <th className="py-6 px-6 text-left text-20 font-semibold">Standard Value</th>
             <th className="py-6 px-6 text-left text-20 font-semibold">Instrument Reading</th>
           </tr>
         </thead>
         <tbody>
           {Array.isArray(dataRecords) && dataRecords.length > 0 ? (
            currentData.map((record: Data, index: number) => (
              <tr key={index} className="border-b border-solid border-gray-500">
                <td className="py-6 px-8">
                  {isEditing && editIndex === index ? (
                    <input
                      type="text"
                      value={record.instruments}
                      onChange={(e) =>
                        handleEditChange('instruments', e.target.value)
                      }
                      className="bg-gray-300 text-gray-800 rounded p-2"
                    />
                  ) : (
                    record.instruments
                  )}
                </td>
                <td className="py-6 px-6">
                  {isEditing && editIndex === index ? (
                  <input
                  type="date"
                  value={record.date ? record.date.toString().split('T')[0] : ''}
                  onChange={(e) => handleEditChange('date', e.target.value)}
                  className="bg-gray-300 text-gray-800 rounded p-2"/>
                  ) : (
                    record.date ? record.date.toString() : ''
                    )}
                  </td>


                <td className="py-6 px-10">
                  {isEditing && editIndex === index ? (
                    <input
                      type="text"
                      value={record.calibration_value}
                      onChange={(e) =>
                        handleEditChange('calibration_value', e.target.value)
                      }
                      className="bg-gray-300 text-gray-800 rounded p-2"
                    />
                  ) : (
                    record.calibration_value
                  )}
                </td>
                <td className="py-6 px-10">
                  {isEditing && editIndex === index ? (
                    <input
                      type="text"
                      value={record.standard_value}
                      onChange={(e) =>
                        handleEditChange('standard_value', e.target.value)
                      }
                      className="bg-gray-300 text-gray-800 rounded p-2"
                    />
                  ) : (
                    record.standard_value
                  )}
                </td>
                <td className="py-6 px-14">
                  {isEditing && editIndex === index ? (
                    <input
                      type="text"
                      value={record.instruments_reading}
                      onChange={(e) =>
                        handleEditChange('instruments_reading', e.target.value)
                      }
                      className="bg-gray-300 text-gray-800 rounded p-2"
                    />
                  ) : (
                    record.instruments_reading
                  )}
                </td>
              </tr>
            ))
          ) : null
          }
        </tbody>
      </table>

      <div className="mt-4 flex justify-between items-center">
        <span className="text-gray-500 ml-10">
          Page {currentPage} of {totalPages}
        </span>
        <div>
          <button
            className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="bg-blue-500 text-white px-8 py-2 rounded"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataRecords;

