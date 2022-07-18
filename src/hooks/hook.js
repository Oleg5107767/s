import  React,{useCallback, useEffect,useState} from 'react';
import GoogleSheetsMapper from 'google-sheets-mapper';
import {useDispatch, useSelector} from 'react-redux';



export const  useGoogleSheets = () =>{

  const {sheet} = useSelector(state => state);
  const[ loading, setLoading ] = useState(true)
  const request = useCallback(async () => {
    try {
      const response =  await GoogleSheetsMapper.fetchGoogleSheetsData({
        apiKey: 'AIzaSyBy8HtJb2zmSamK1cb1jQjfuWFH73RIUhg',
        sheetId: '1cCAQh9cHbNEV4V-laYghJbhS84DxUiJkpCYK6E3G4Xc',
        sheetsNames: [sheet],
      });
      setLoading(false)
      const data =  response//[0].data;
      return data;
    }
    catch (error) {
      console.log(error)
    }

  }, [sheet]);

  return {request, loading }
}

