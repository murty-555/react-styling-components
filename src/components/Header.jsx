import logo from "../assets/logo.png";
// import {styled} from 'styled-components';

import './Header.css'

// const StyledComp = styled.div`
//     width: 50%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// `


export default function Header(){
    return (
        <header>
            {/* <StyledComp>
                <button>item1</button>
                <button>item1</button>
            </StyledComp> */}
            <img src={logo} alt="A canvas"/>
            <h1>ReactArt</h1>
            <p>A community of artists and art-lovers.</p>
        </header>
    )
}