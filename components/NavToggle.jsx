import React from 'react'

import Styled from 'styled-components'

const Toggle = Styled.div`
background:transparent;
border-color:transparent;


& > .nav-toggle {
    display:none;
}

& > .nav-toggle + label{
    display:block;
    width:2.5rem;
    height:1.75rem;
    position:relative;
    cursor:pointer;
}

& > .nav-toggle + label > span {
    display:block;
    position:absolute;
    width:100%;
    height:2px;
    border-radius:30px;
    background:#666;
    transition:all .35s
}
& > .nav-toggle + label > span:nth-child(1){
    top:0;
}
& > .nav-toggle + label > span:nth-child(2){
    top:50%;
    transform: translateY(-50%);
}
& > .nav-toggle + label > span:nth-child(3){
    bottom:0
}

& > .nav-toggle:checked + label > span:nth-child(1){
    top:50%;
    transform: translateY(-50%) rotate(45deg);
}

& > .nav-toggle:checked + label > span:nth-child(2){
    opacity: 0;
}

& > .nav-toggle:checked + label > span:nth-child(3){
    bottom:50%;
    transform: translateY(50%) rotate(-45deg);
}
`

const Accordion = Styled.div`
    /* opacity:${(props) => (props.flag === true) ? '1' : '0'} */
    position:absolute;
    width:100%;
    left:0px;
    top:10vh;
    z-index:2;
    background:#fff;
    display:${props => (props.flag ? 'block' : 'none')};

    & > ul {
        margin-top:5vh;
        display:flex;
        flex-direction:column;

    }

    & > ul > li {
        margin-top:20px;
        text-align:center;
    }
`

const NavToggle = () => {

    const [menuIcon,setMenuIcon] = React.useState(false)

    const handleToggle = () => {
        setMenuIcon(!menuIcon)
    }

    return (
        <Toggle>
            <input type="checkbox" id="nav-toggle" onClick={handleToggle} className="nav-toggle"/>
            <label htmlFor="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <Accordion flag={menuIcon}>
                <ul>
                    <li>대분류 카테고리
                        <ul>
                            <li>menu1-1</li>
                            <li>menu1-2</li>
                            <li>menu1-3</li>
                            <li>menu1-4</li>
                            <li>menu1-5</li>
                        </ul>
                    </li>
                    <li>대분류 카테고리</li>
                    <li>대분류 카테고리</li>
                    <li>대분류 카테고리</li>
                    <li>대분류 카테고리</li>
                </ul>
            </Accordion>
        </Toggle>
    )
}

export default NavToggle