export const getData = async () => {
  const url = '/api/get-data-record';
  try {
    const response = await fetch(url);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return result;

  } 
  catch (error: any) {
    return error.message;
  }
};


export const getRecords = async () => {
  const url = '/api/get-records';
  try {
    const response = await fetch(url);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return result;

  } 
  catch (error: any) {
    return error.message;
  }
};


export const getCalibratioProgress = async () => {
  const url = '/api/get-calibration-progress';
  try {
    const response = await fetch(url);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return result;

  } 
  catch (error: any) {
    return error.message;
  }
};


export const getInstrumentList = async () => {
  const url = '/api/get-instrument-list';
  try {
    const response = await fetch(url);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return result;

  } 
  catch (error: any) {
    return error.message;
  }
};


export const getNotification = async () => {
  const url = '/api/get-notification';
  try {
    const response = await fetch(url);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return result;

  } 
  catch (error: any) {
    return error.message;
  }
};


export const getCountries = async () => {
  const url = '/api/get-countries';
  try {
    const response = await fetch(url);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return result;

  } 
  catch (error: any) {
    return error.message;
  }
};

