import React, { useCallback, useState } from 'react';
import GoogleSheetsMapper from 'google-sheets-mapper';
import { useSelector } from 'react-redux';


export const useGoogleSheets = (text) => {

  const { sheet } = useSelector(state => state);
  const [loading, setLoading] = useState(true)

  const request = useCallback(async (text) => {

    const API_KEY = process.env.REACT_APP_API_KEY;
    const DOC_ID = process.env.REACT_APP_DOC_ID;

    try {
      const response = await GoogleSheetsMapper.fetchGoogleSheetsData({
        apiKey: 'AIzaSyBy8HtJb2zmSamK1cb1jQjfuWFH73RIUhg',
        sheetId: '1cCAQh9cHbNEV4V-laYghJbhS84DxUiJkpCYK6E3G4Xc',
        sheetsNames: [text],
      });
      setLoading(false)
      const data = response
      return data;
    }
    catch (error) {
      console.log(error)
    }
  }, [sheet]);

  return { request, loading }
}

