import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Genre({ids}) {
      /* console.log(ids) */
    const GenreArray=[]
    ids.map(id => {
        /* console.log(id) */
        if(id=='10759') {
           GenreArray.push('Action & Adventure')
           
    }
        else if(id=='16'){
            GenreArray.push('Animation')
        }
        else if(id=='35'){
            GenreArray.push('Comedy')
        }
        else if(id=='80'){
            GenreArray.push('Crime')
        }
        else if(id=='99'){
            GenreArray.push('Documentary')
        }
        else if(id=='18'){
            GenreArray.push('Drama')
        }
        else if(id=='10751'){
            GenreArray.push('Family')
        }
        else if(id=='10762'){
            GenreArray.push('Kids')
        }
        else if(id=='9648'){
            GenreArray.push('Mystery')
        }
        else if(id=='10763'){
            GenreArray.push('News')
        }
        else if(id=='10764'){
            GenreArray.push('Reality')
        }
        else if(id=='10765'){
            GenreArray.push('Sci-Fi & Fantasy')
        }
        else if(id=='10766'){
            GenreArray.push('Soap')
        }
        else if(id=='10767'){
            GenreArray.push('Talk')
        }
        else if(id=='10768'){
            GenreArray.push('War & Politics')
        }
        else if(id=='37'){
            GenreArray.push('Western')
        }
})
    console.log(GenreArray)
return (
        <div className='genres-category'>
            {GenreArray[0] && <p className='category'>{GenreArray[0]}</p>}
            {GenreArray[1] && <p className='category'>{GenreArray[1]}</p>}
            {GenreArray[2] && <p className='category'>{GenreArray[2]}</p>}    
                
        </div>
                
            ) 
     
}
 
    


export default Genre
