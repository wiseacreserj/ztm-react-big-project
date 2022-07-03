import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { setIsCartOpen } from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selector";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
    CartDropdownContainer,
    CartItems,
    EmptyMessage,
} from "./cart-dropdown.styles.jsx";

import "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate("/checkout");
        dispatch(setIsCartOpen(false));
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => {
                        return <CartItem cartItem={item} key={item.id} />;
                    })
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>

            <Button onClick={goToCheckoutHandler}>go to checkout</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;
