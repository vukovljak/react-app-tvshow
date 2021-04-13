import React, {useState} from 'react'
import axios from 'axios'
import Modal from 'react-modal'
import '../containers/modal/modal.css'

function Item({movie}) {
  const [keyVideo,setKey] =useState('');
  const [modalIsOpen,setModalIsOpen] = useState('');

  const onClick=()=> {
    const fetchVideoKey = async() => {
        const result= await axios.get(`https://api.themoviedb.org/3/tv/${movie.id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
        setKey(result.data.results[0].key)
      }
      fetchVideoKey();
      setModalIsOpen(true)
 }
 
    return (
        <div className='popular-card'>
           <div className='card-image'>
          <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt='' />
        </div>
        <div className='card-content'>
          <h1>{movie.name}</h1>
            <p>
              First Air: <br/> {movie.first_air_date}
            </p>
            <button type='submit' className='btn-trailer' onClick={onClick} >Watch Trailer </button>
        </div> 
        <div className="iframeContainer" id ="iframeContainer" >
        </div>
       {keyVideo ? 
       (<Modal isOpen={modalIsOpen} className='modal' >
         
         <button className='btn-close' onClick={() =>setModalIsOpen(false)}>X</button>
                <div className='iframe-container'>
                    <iframe src={`https://www.youtube.com/embed/${keyVideo}`} key={movie.id}/>
                </div>
            
        </Modal>)  : <Modal isOpen={modalIsOpen} className='modal' > <button className='btn-close' onClick={() =>setModalIsOpen(false)}>X</button><div className='no-video'>No Video Available</div></Modal>
      
         }
        </div>
        
      
    )
}

export default Item;
