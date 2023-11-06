import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <diiv className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </diiv>
  );
};

export default CartDropdown;
