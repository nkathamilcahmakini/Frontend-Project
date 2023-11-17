'use client'
import { PiThermometerSimpleFill } from "react-icons/pi";
import { MdNotificationsActive } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import useGetInstrumentList from '../../hooks/useGetInstrumentList';
import useGetNotification from '../../hooks/useGetNotification';
import useGetCountries from '../../hooks/useGetCountries';

const Overview = () => {
  const { data: instrumentData } = useGetInstrumentList();
  const { data: notificationData } = useGetNotification();
  const { data: countriesData } = useGetCountries();

  const sections = [
    {
      icon: <PiThermometerSimpleFill size={44} className="text-blue-400" />,
      title: "Instruments",
      data: instrumentData?.length,
    },
    {
      icon: <MdNotificationsActive size={44} className="text-blue-400" />,
      title: "Notifications",
      data: notificationData?.length,
    },
    {
      icon: <FaLocationDot size={44} className="text-blue-400" />,
      title: "Counties",
      data: countriesData?.length,
    },
  ];

  return (
    <>
      <div className=" text-amber-500 text-3xl font-normal font-['Sanchez'] relative bottom-16 ml-40">Data Center</div>
      <div className="flex flex-cols gap-60 ml-40">
        {sections.map((section, index) => (
          <div key={index} className="w-72 h-36 bg-slate-500 bg-opacity-20 flex items-center justify-center">
            <div className="flex flex-col items-center">
              {section.icon}
              <div className="text-black text-lg font-normal font-sanchez mt-2">
                {section.title}
              </div>
              <div className="text-4xl font-normal ... font-sanchez">
                {section.data}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Overview;
