import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer : {
        cart : cartSlice,
    }
});


export default store;






// how to use Redux
/**
 * create store
 *      -configureStore => RTK
 * 
 * Provide store
 *      -Provider => react-redux
 * 
 * Create Slices
 *      -createSlice({   => RTK
 *          name : ,
 *          intialState : ,
 *          reducers : {
 *              actionName : reducerFunction( state , action )  
 *          }
 *      })
 * 
 *      Export
 *          - slice.reducer(default) and slice.actions(named)
 * 
 * put slice into store 
 *      configureStore({
 *          reducer : {
 *              name : slice_name
 *          }
 *      })
 * 
 * subcribe store
 *      - useSelector( store => store.slice.data )   =>=> react-redux
 * 
 * dispatch actions
 *      - useDispatch()  => react-redux
 * 
 */