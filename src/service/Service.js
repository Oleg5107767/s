import {useGoogleSheets} from '../hooks/hook';

const useService = () => {
    const {request} = useGoogleSheets();

    const getAllCategorys = async () => {
        const res =  await request()
        return res[0].data
    } 

    const getCategory = async (sheet) => {
        const res =  await request(sheet)
        return res[0].data
    } 
    return{getAllCategorys, getCategory}
}
export default useService;