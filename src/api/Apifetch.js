import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UseFetch(url){
    const [data, setData]=useState(null);
    const [loading, setLoading]=useState(false);
    const [error, setError]=useState(null);
useEffect(()=>{
    setLoading(true);
    axios
    .get(url)
    .then((response)=>{
        // response.json()
        setData(response.data);
       return console.log(response.data);
    })
    .catch((err)=>{
        setError(err);
    })
    .finally(()=>{
        setLoading(false);
    })
},[url]);

return{data, loading, error};
}

export default UseFetch;
