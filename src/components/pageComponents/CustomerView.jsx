import React from 'react';
import { UseSelector, useSelector } from 'react-redux';
import { deleteCustomer } from '../../Redux/customerSlice';
import { useDispatch} from 'react-redux';


export function CustomerView() {
  const customer = useSelector((state)=>state.customer)
  const dispatch = useDispatch();
  function deleteHandler (index){
    dispatch(deleteCustomer(index))
  }
  return (
    <>
      <div>
        <h3 className='py-2'>Customer List</h3>
        <ul style={{ listStyle: "none" }}>
          {customer.map((customer,index) => (
            <li key={customer}>{customer} <button className ="btn btn-info" onClick={()=>deleteHandler(index)}>Delete</button></li>
            // Assuming customer has a property 'id' and 'name', adjust accordingly
          ))}
        </ul>
      </div>
    </>
  );
}
