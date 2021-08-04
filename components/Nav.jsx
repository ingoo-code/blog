import Link from 'next/Link'
import Styled from 'styled-components'
import {useSelector} from 'react-redux'


const Gnb = Styled.ul`
    display:none;

    @media only screen and (min-width: 768px) {
        display:flex;
        flex-direction:row;
        & > li {
            margin-left:20px;
        }
    }
`

const Nav = () => {
    const {isLogin} = useSelector((state)=> state.user)


    return (
        <div className="gnb">
                <Gnb>
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    {
                        isLogin === false
                        ?   <><li><Link href="/login"><a>Login</a></Link></li>
                            <li><Link href="/join"><a>Join</a></Link></li></>    
                        
                        :   <><li><Link href="/Logout"><a>Logout</a></Link></li>
                            <li><Link href="/profile"><a>profile</a></Link></li></>
                    }
                    
                    <li><Link href="/posts/post"><a>posts/post</a></Link></li>
                </Gnb>
            </div>
    )
}

export default Nav;