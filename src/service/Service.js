import {useGoogleSheets} from '../hooks/hook';

const useService = () => {
    const {request, loading} = useGoogleSheets();

   // const getAllCategorys = async (sheet) => {
   //     const res =  await request(sheet)
   //     return res[0].data
   // } 

    const getCategory = async (sheet) => {
        const res =  await request(sheet)
        return res[0].data
    } 
    return{getCategory, loading}
}
export default useService;