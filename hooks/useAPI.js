import { useEffect, useState } from 'react';
import axios from 'axios';
import _const from '../pages/const'; 

export default function useAPI(url) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    

    useEffect(() => {

        const options = {
            headers: { appId: _const.APP_ID, apiKey: _const.API_KEY }
          };

        const fetchData = async () => {
           try {
            setLoading(true);

            const res = await axios(`https://api-us.cometchat.io/v2.0${url}`,options);
            const data = await res.data;
            setData(data.data);
            setLoading(false);

           } catch (error) {
               setError(error);
           }
        }
        fetchData();
    }, []);

    return {data, loading, error};

}
