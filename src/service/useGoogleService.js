import {useGoogleSheets} from '../hooks/useGoogleSheets';
import { useSelector} from 'react-redux';


const useGoogleService = (text) => {
    const {sheet} = useSelector(state => state);
    const {request, loading} = useGoogleSheets();
    


   const getCategorys = async ( text) => {
       const res =  await request(text)
       return res[0].data
   } 

    const getCategory = async ( ) => {
        const res =  await request(sheet)
        return res[0].data
    } 
    return{getCategory, loading, getCategorys}
}
export default useGoogleService;