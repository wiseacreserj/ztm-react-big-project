import { useDispatch, useSelector } from "react-redux";

import "./product-card.styles.scss";
import { addItemToCart } from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selector";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const { name, price, imageUrl } = product;

    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () => {
        dispatch(addItemToCart(cartItems, product));
    };

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={addProductToCart}
            >
                Add to cart
            </Button>
        </div>
    );
};

export default ProductCard;
