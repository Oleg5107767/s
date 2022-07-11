import  React,{useCallback, useEffect,useState} from 'react';
import GoogleSheetsMapper from 'google-sheets-mapper';




export const  useGoogleService = () =>{
  const [resp, setResp] = useState()
  const fetchData = useCallback(async () => {
    try {
      const data = await  GoogleSheetsMapper.fetchGoogleSheetsData({
        apiKey: 'AIzaSyBy8HtJb2zmSamK1cb1jQjfuWFH73RIUhg',
        sheetId: '1cCAQh9cHbNEV4V-laYghJbhS84DxUiJkpCYK6E3G4Xc',
        sheetsNames: ["Categorys"],
      });
      setResp([...data])
    }
    catch (error) {
      console.log(error)
    }
    finally {
      return resp
    }
  }, []);

 
  useEffect(() => {
        fetchData();
        console.log('start')
      }, []);

  return resp
  
}

