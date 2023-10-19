import React from 'react'
import { Container } from 'react-bootstrap'

const NotFound = () => {
    setTimeout(() => {
        window.location.href = '/'
    }, 3000)

    return (
    <>
        <Container className='text-center not-found'>
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <p>redirecting to home...</p>
        </Container>
    </>
    )
}

export default NotFound