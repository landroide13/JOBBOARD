import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = () => {
    const [data, setData ] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
          'X-RapidAPI-Key': 'ff3e670c19mshb9ab972b631ed0bp1bb188jsnc3850af44d92',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

    const fetchData = async () =>{
        setIsLoading(true)

        try {
            const res = await axios.request(options);
            setData(res.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            //console.log("There is an Error", error)
        } finally{
            setIsLoading(false)
        }
    }
    
    useEffect(() => {
        fetchData()
    },[])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

  return { data, isLoading, error, refetch }
}

export default useFetch
