import React from 'react'
import Header from '../components/Header/Header'

export default function Layout(props) {
    return (
        <>
            <Header />
            { props.children }
        </>
    )
}
