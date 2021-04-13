import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Grid from './Grid'

function TopRated() {
    const [movies,setMovies]=useState([]);

    useEffect(() => {
        const fetchItems = async() => {
          const result= await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}`)
          setMovies(result.data.results)
        }
        fetchItems()
      },[])
      
    return (
        <div>
            <h1 className='popular-text'>Top Rated</h1>
            <Grid movies={movies}/>
        </div>
    )
}

export default TopRated;
