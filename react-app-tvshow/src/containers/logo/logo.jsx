import React from 'react'
import styled from 'styled-components'
import LogoImg from '../../imgs/logo.jpg'
import {Link} from 'react-router-dom'

const TopContainer = styled.div`
    width:80%;
    margin:auto;
    display:flex;
    align-items:center;
    margin-bottom:0;
    justify-content:center;
    padding:20px;
    
`
const LogoContainer = styled.div`
    width:100px;
    
    cursor:pointer;
    transition:all 0.35s;

    &:hover {
        transform:scale(1.1);
    }
    img {
        width:100%;
        height:100%;
    }
`
const LogoText = styled.h1`
    font-size:4rem;
    font-weight:200;
    margin-left:10px;
    margin-bottom:0;
    background: -webkit-linear-gradient(#ff8000, #bc0404);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
    font-family: 'Caveat', cursive;
    text-transform:uppercase;
`
const PText = styled.p `
    display:flex;
    justify-content:center;
    text-align:center;
    margin-top:0;
    font-weight:100;
    font-size:1.5em;
    color:#fff;
    @media (max-width:400px){
        font-size:1em;
    }

`

function Logo() {
    return(
        <div>
           <TopContainer>
                <Link to='/'>
                <LogoContainer>
                    <img src={LogoImg} alt=''/>
                </LogoContainer>
                </Link>
                <LogoText>
                    Shows
                </LogoText>
            </TopContainer> 
            <PText>Watch Official Trailer for your favorite TV Show!</PText>
        </div>
    
    )
}
export default Logo