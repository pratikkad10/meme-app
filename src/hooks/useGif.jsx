import axios from 'axios';
import React, { useEffect, useState } from 'react'


function useGif() {

    const url=`https://api.giphy.com/v1/gifs/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S`;

    const [gif, setGif] = useState('');

    const [loading, setLoading]=useState(false);

    async function getGif(tag){
        setLoading(true);
        const res=await axios.get(tag ? url + `&tag=${tag}`: url)
        setGif(res.data.data.images.downsized_large.url);
        setLoading(false);
            
    }

    useEffect(()=>{
        getGif();
    }, [])
    

    return {gif,loading, getGif};
}

export default useGif