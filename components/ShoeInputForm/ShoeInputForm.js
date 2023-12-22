import { useContext } from 'react';
import './ShoeInputForm.css'
import CartContext from '../../store/cart-context';

const ShoeInputForm = () =>{
    const cartCtx=useContext(CartContext)
    let name,desc,price,obj;
    const nameHandler=(e)=>{
        name=e.target.value
    }
    const descHandler = (e)=>{
        desc=e.target.value;
    }
    const priceHandler =(e)=>{
        price=e.target.value;
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        obj={
            id:cartCtx.shoes.length,
            name:name,
            description:desc,
            price:price
        }
       cartCtx.addList(obj)
    }
    return <form className='form' onSubmit={submitHandler}>
            <label>Shoe Name</label>
            <input type='text' onChange={nameHandler}></input>
            <label>Shoe Desc.</label>
            <input type='text' onChange={descHandler}></input>
            <label>Price</label>
            <input type='number' onChange={priceHandler}></input>
            <button type='submit' >Add Shoe</button>
    </form>
}



export default ShoeInputForm;