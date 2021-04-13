import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Logo from '../../containers/logo/logo'
import Search from '../../containers/search/Search'
import Display from '../../components/Display'
import '../../App.css';
import axios from 'axios'


function ShowPage() {
    const {text} =useParams();
    const [tvShows, setTvShows] =  useState('')
    useEffect(() => {
        const fetchTvShows = async() => {
            const result= await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&query=${text}`)
            setTvShows(result.data.results)
          }
          fetchTvShows()
    }, [text])

    return (
        <>
            <Logo/>
            <Search/>
            {(tvShows) && <div><h1 className='center-results'>Results for <span className='result-text'> '{text}'</span></h1>
                <Display tvShows={tvShows}/> 
            </div>
               
            }
            
            
        </>
    )
}

export default ShowPage 
