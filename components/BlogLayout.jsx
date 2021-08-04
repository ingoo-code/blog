import Nav from './Nav'
import Layout from './Layout'
import Header from './Layout/Header'
import NavToggle from './NavToggle'
import Styled from 'styled-components'
import Router from 'next/router'
import {useState} from 'react'



//react-accordion-with-header
const AppLayout = ({ children }) => {
    
    return (
        <>
            <Layout>
                <Header>
                    <h1>Ingoos</h1>
                    <Nav />
                    <NavToggle />
                    <AddPostBtn onClick={ ()=>Router.push('/write') }>
                        +
                    </AddPostBtn>
                </Header>
                {children}
            </Layout>
        </>
    )
}

export default AppLayout

const AddPostBtn = Styled.button`
    width:50px;
    height:50px;
    border-radius:25px;
    background:#000;
    position:fixed;
    bottom:50px;
    right: 50px;
    font-size:20px;
    color:#fff;
`