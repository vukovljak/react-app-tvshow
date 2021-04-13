import React from 'react'
import Item from './Item'
import '../App.css'

function Grid({movies}) {
    return ( <div className='container'>
            <div className='cards-container'>
                <section className='cards'>
        {movies.map(movie =>(
            <Item key={movie.id} movie={movie}></Item>
        ))}
    </section>
            </div>
    
    </div>)
        
    
}

export default Grid;
