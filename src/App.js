import React, {useEffect,useState} from 'react';
import useGoogleSheets from 'use-google-sheets';
import './App.css';


const REACT_APP_GOOGLE_API_KEY = 'AIzaSyBy8HtJb2zmSamK1cb1jQjfuWFH73RIUhg';
const REACT_APP_GOOGLE_SHEETS_ID = '1cCAQh9cHbNEV4V-laYghJbhS84DxUiJkpCYK6E3G4Xc';
const sheetsNames = ["Categorys"];


const App = () => {
  const { data, loading, error } = useGoogleSheets({
    apiKey: REACT_APP_GOOGLE_API_KEY,
    sheetId: REACT_APP_GOOGLE_SHEETS_ID,
    sheetsNames: sheetsNames
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};
export default App;