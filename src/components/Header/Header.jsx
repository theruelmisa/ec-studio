import React from 'react';
import { HeaderContainer } from './Header.elements';

const Header = () => {
    return (
        <HeaderContainer>
            <h1>EC Studio</h1>

            <nav>
                <ul>
                    <li>Home</li>
                    <li>Work</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}

export default Header;
