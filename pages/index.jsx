import React from 'react'
import AppLayout from '../components/BlogLayout'
import Image from 'next/image'

const index = () => {
    return (
        <AppLayout>
            index.jsx
            <Image src="/test.png" alt="me" width="256" height="200" />
            {/* <img src="/test.png" /> */}
        </AppLayout>
    )
}

export default index