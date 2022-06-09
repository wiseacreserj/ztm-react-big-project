import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart } =
        useContext(CartContext);

    return (
        <div>
            <h1>Checkout</h1>
            <div>
                {cartItems.map((cartItem) => {
                    const { name, quantity, id } = cartItem;
                    return (
                        <div key={id}>
                            <h2>{name}</h2>
                            <span>{quantity}</span>
                            <br />
                            <span onClick={() => addItemToCart(cartItem)}>
                                Increment
                            </span>
                            <br />
                            <span onClick={() => removeItemFromCart(cartItem)}>
                                Decrement
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Checkout;
