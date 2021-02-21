import React from 'react';
import { 
    HeaderContainer,
    Logo,
    Nav,
    Menu,
    MenuItem,
    MenuLink
} from './Header.elements';

const Header = () => {
    return (
        <HeaderContainer>
            <Logo>EC Studios MNL</Logo>

            <Nav>
                <Menu>
                    <MenuItem>
                        <MenuLink href="#">
                            Home
                        </MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="#">
                            Work
                        </MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="#">
                            About
                        </MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="#">
                            Contact
                        </MenuLink>
                    </MenuItem>
                </Menu>
            </Nav>
        </HeaderContainer>
    )
}

export default Header;
