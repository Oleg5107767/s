import {useGoogleSheets} from '../hooks/useGoogleSheets';

const useGoogleService = () => {
    const {request, loading} = useGoogleSheets();

    const getCategory = async (sheet ) => {
        const res =  await request(sheet)
        return res[0].data
    } 
    return{getCategory, loading}
}
export default useGoogleService;