import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../slices/cartSlice";

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);
    // const cartItems = useSelector(store => store); // Never do this - Performance issue - component will be re-render whenver store change

    const dispatch = useDispatch();

    return (
        <div>
            <p>see your cart</p>

            <button className="bg-blue-400 p-2" onClick={ ()=> dispatch(clearCart()) }>clear </button>  

            {
                cartItems.map(item => (
                    <div key={item} className="flex gap-3 shadow-lg shadow-black p-2 py-4 m-2">
                        <div className="flex flex-col gap-2">
                            <p>Resturant id : {item}</p>

                            <button onClick={()=> dispatch(removeItem(item))}>remove</button>
                        </div>
                    </div>
                ))
            }



        </div>
    )
};

export default Cart;