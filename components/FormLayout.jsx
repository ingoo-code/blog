import Router from "next/router";
import Layout from './Layout'
import Styled from 'styled-components'

const Background = Styled.div`
    width:100vw;
    height:100vh;
    background:#eee;
    display:flex;
    align-items: center;
    justify-content: center;
    
    & > div {
        width:30vw;
        height:500px;
        background:#fff;
        padding:20px;
    }
`

const FormLayout = ({children}) => {
    return (
        <Layout>
            <Background>
                <div>
                    <p onClick={() => Router.back()}>뒤로가기</p>
                    {children}
                </div>
            </Background>
        </Layout>
    )
}

export default FormLayout