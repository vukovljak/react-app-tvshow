import React from 'react'
import Show from '../components/Show'
import '../Results.css'

function Display({tvShows}) {
    return  (
        <div>
            <div>
                <section className='tv-shows'>
                    {tvShows.map(show =>(
                        <Show key={show.id} show={show}></Show>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Display
