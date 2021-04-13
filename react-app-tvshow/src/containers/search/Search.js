import React, {useState} from 'react'
import './Search.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'

function Search() {
    const [text, setText] =useState('')
  
    return (
        <div className='container-search'>
           <div className="search">
                <input type="text" 
                className="searchTerm" 
                placeholder="What TV Show would you like to watch?" 
                name="searchText"
                onChange={e => setText(e.target.value)}
                value={text}/> 
           {(text) ? <Link to={{
                            pathname:`/search/${text}`
                    }}>
                        <button type="submit" className="searchButton">
                            <FontAwesomeIcon icon={faSearch} /></button>
                    </Link> : 
                    <Link to='/'>
                        <button type="submit" className="searchButton">
                            <FontAwesomeIcon icon={faSearch} /></button>
                    </Link> 
            }
            </div> 
        </div>   
    )
}

export default Search
