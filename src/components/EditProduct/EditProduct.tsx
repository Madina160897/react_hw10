import { FC, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProductAction } from "../../actions/productsActions";
import { RootState } from "../../store";
import { IProduct } from "../../types";


const EditProduct:FC<IProduct> = ({id}) => {
    const dispatch = useDispatch();
    const [ name, setName ] = useState("")
    const [ price, setPrice ] = useState("")
    const [quantity, setQuantity] = useState("");

    const editProduct = (e: FormEvent) => {
        e.preventDefault();
        dispatch(editProductAction({name, price: parseInt(price), id, quantity: parseInt(quantity) }))

        
    }
    return(
        <>
            <form className="edit-input">
                
                {/* @ts-ignore */}
                <input 
                type="text" 
                value={name}
                placeholder="Name" 
                onChange={(e) => setName(e.target.value)}
                />
                <input 
                type="number" 
                value={price} 
                placeholder="Price" 
                onChange={(e) => setPrice(e.target.value)}
                />
                <input 
                type="number" 
                value={quantity} 
                placeholder="Quantity" 
                onChange={(e) => setQuantity(e.target.value)}
                />
                <button className="btn-mini" onClick={editProduct}>Edit</button>
            </form>
        </>
    )
}
export default EditProduct;