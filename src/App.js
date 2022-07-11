import React, {useEffect,useState} from 'react';
import useGoogleSheets from 'use-google-sheets';
import { useSelector} from 'react-redux';
import {useGoogleService} from './components/hooks/hook';
import './App.css';


const REACT_APP_GOOGLE_API_KEY = 'AIzaSyBy8HtJb2zmSamK1cb1jQjfuWFH73RIUhg';
const REACT_APP_GOOGLE_SHEETS_ID = '1cCAQh9cHbNEV4V-laYghJbhS84DxUiJkpCYK6E3G4Xc';
const sheetsNames = ["Categorys"];


const App = () => {
  const result = useGoogleService();

  return console.log(result);
};
export default App;