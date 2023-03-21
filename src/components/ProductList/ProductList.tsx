import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IProduct } from "../../types";
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../../actions/productsActions";
import { FC, FormEvent, useState } from "react";
import { EditProduct } from "../index";

interface IProductList{
  isLoading: boolean
}

const ProductList:FC<IProductList> = () => {
  const dispatch = useDispatch();

 

  const products = useSelector<RootState, IProduct[]>(
    (state) => state.products.list
  );



  return (
    <div className="block-products">
        <h1>Products:</h1>
        
        <table>
          <thead>

          <tr>
            <th>
              Name
            </th>
            <th>
            Price
            </th>
            <th>
            Quantity
            </th>
            <th>
            Delete
            </th>
            <th>
            Edit
            </th>
          </tr>
          </thead>
          <tbody >
          {products.map((item) => (
            
          <tr key={item.id}>
            <td>
              {item.name}
            </td>
            <td>
            
              {item.price}
            </td>
            <td>
              {item.quantity}
            </td>
            <td>
              {/* @ts-ignore */}
            <button className="btn-mini" onClick={() => {dispatch(deleteProductAction(item.id))}}>X</button>
            </td>
            <td>
              {/* @ts-ignore */}
            <EditProduct id={item.id}/>
            </td>
          </tr>
        
        
        ))}
        </tbody>
        </table>
    </div>
  )
}

export default ProductList;
