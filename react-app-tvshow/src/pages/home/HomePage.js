import React from 'react'
import Popular from '../../components/Popular'
import TopRated from '../../components/TopRated'
import Logo from '../../containers/logo/logo'
import Search from '../../containers/search/Search'
import '../../App.css';

function HomePage() {
    return (
        <>
            <Logo/>
            <Search/>
            <Popular/>
            <TopRated/>
        </>
    )
}

export default HomePage
