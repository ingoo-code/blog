import Styled from 'styled-components'

const HeaderContainer = Styled.header`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding:0 5vw;
    box-sizing: border-box;
    height:10vh;
    width:100vw;
    border-bottom: 1px solid #ddd;
` 

const Header = ({children}) => {
    return (
        <HeaderContainer>
            {children}
        </HeaderContainer>
    )
}

export default Header