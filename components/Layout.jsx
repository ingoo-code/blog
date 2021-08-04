import Head from 'next/head'


const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            {children}
        </>
    )
}

export default Layout