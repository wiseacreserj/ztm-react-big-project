import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink,
} from "./navigation.styles.jsx";

const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);

    const isCartOpen = useSelector(selectIsCartOpen);

    const signOutUser = () => dispatch(signOutStart());

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">SHOP</NavLink>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>
                            SIGN OUT
                        </span>
                    ) : (
                        <NavLink to="/auth">SIGN IN</NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>

            <Outlet />
        </Fragment>
    );
};

export default Navigation;
