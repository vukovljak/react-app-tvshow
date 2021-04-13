import React, {useState, useEffect}from 'react'
import '../Results.css'
import Moment from 'react-moment'
import Genre from './Genre'
import axios from 'axios'
import Progress from '../containers/progress/Progress'
import Modal from 'react-modal'

function Show({show}) {
    const [keyVideo,setKey] =useState('');
    const [modalIsOpen,setModalIsOpen] = useState('');

    const onClick=()=> {
        const fetchVideoKey = async() => {
            const result= await axios.get(`https://api.themoviedb.org/3/tv/${show.id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
            setKey(result.data.results[0].key)
          }
          fetchVideoKey();
          setModalIsOpen(true)
     }
    return (
        (show.poster_path)&&(
        <div >
            <div className='show-card'>
                <div className='show-poster'> 
                    {(show.poster_path) &&
                        <img src={'https://image.tmdb.org/t/p/w500' + show.poster_path} alt='' /> }
                </div>
                <div className='show-content'>
                    <div className='show-name'>
                        <div className='top-name-card'>
                           <h1>{show.name}</h1> 
                          <Genre ids= {show.genre_ids}></Genre> 
                        </div>
                        {(show.first_air_date) &&
                        <p>from: <Moment format='YYYY' className='result-text'>{show.first_air_date}</Moment></p>}
                       
                    </div>
                       <Progress votes ={show.vote_average}/>
                       <div className='votes'>
                        <p>Rate:</p>
                        <p>{show.vote_average}/10 out of {show.vote_count} votes</p>
                       </div>
                        <div className='overview'>
                            <p>{show.overview}</p>

                        </div>
                        <div className='btn-trailer-show'>
                        <button type='submit' className='btn-trailer' onClick={onClick} >Watch Trailer </button>
                        </div>
                </div>
            </div>
          {  keyVideo ? (<Modal isOpen={modalIsOpen} className='modal' >
            <button className='btn-close' onClick={() =>setModalIsOpen(false)}>X</button>
                <div className='iframe-container'>
                    <iframe src={`https://www.youtube.com/embed/${keyVideo}`} key={show.id}/>
                </div>
            
        </Modal>) : <Modal isOpen={modalIsOpen} className='modal' > <button className='btn-close' onClick={() =>setModalIsOpen(false)}>X</button><div className='no-video'>No Video Available</div></Modal>
        }
      
         
        </div>)
    )
}

export default Show
