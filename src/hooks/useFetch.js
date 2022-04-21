import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
    
    const exitComponent = useRef(true);

    const [values, setvalues] = useState({data: null, loading: true});

    useEffect(() => {
      return () => {
        exitComponent.current = false;
      }
    }, [])
    
    useEffect(() => {
    
        fetch(url)
            .then(resp => resp.json())
            .then(({data}) => {
                setvalues({data, loading: false});
            });
      
    }, [url])
    

    return { ...values, setvalues};
}
