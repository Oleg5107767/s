import {useGoogleSheets} from '../hooks/hook';

const useService = () => {
    const {request, loading} = useGoogleSheets();

    const getAllCategorys = async () => {
        const res =  await request()
        return res[0].data
    } 

    const getCategory = async (sheet) => {
        const res =  await request(sheet)
        return res[0].data
    } 
    return{getAllCategorys, getCategory, loading}
}
export default useService;