import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
// import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from "./StateProvider";
import {Link, useNavigate } from "react-router-dom";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  //change here
  const navigate = useNavigate();
  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate("/payment");
  };

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contians a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {/* backend start from here  */}
      <button onClick={(e) => handleClick("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
//********************************** The first code**************************************************** */
// function Subtotal() {
//   const [{ basket }, dispatch] = useStateValue();
//   const getBasketTotal = (basket) =>
//     basket?.reduce((amount, item) => item.price + amount, 0);
//   return (
//     <div className="subtotal">
//       <CurrencyFormat
//         renderText={(value) => (
//           <>
//             <p>
//               subtotal ({basket.length} items):
//               <strong>{value}</strong>
//             </p>
//             <small className="subtotal__gift">
//               <input type="checkbox" /> This order contians a gift
//             </small>
//           </>
//         )}
//         decimalScale={2}
//         value={getBasketTotal(basket)}
//         displayType={"text"}
//         thousandSeparator={true}
//         prefix={"$"}
//       />
//       {/* backend start from here  */}
//       <button >  Proceed to Checkout  </button>
      
    
//     </div>
//   );
// }
// // onClick={(e) => history.push("/payment")}
// export default Subtotal;
