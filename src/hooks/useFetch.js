import { useState, useEffect } from "react"

const options = {
    method: 'GET',
    headers: {
      accept: 'applications.json',
      Authorization: `bearer ${process.env.REACT_APP_API_AUTH_TOKEN}`
    }
  }

export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    const baseUrl = `https://api.themoviedb.org/3/${apiPath}?query=${queryTerm}`;
    
    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(baseUrl, options);
          const json = await response.json()
          setData(json.results)
        }
        fetchMovies()
      }, [baseUrl])

  return { data }
}
