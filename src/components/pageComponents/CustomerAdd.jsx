import { useState } from "react";
import React from "react";
import { addCustomer as addCustomerAction} from "../../Redux/customerSlice";
import { useDispatch} from 'react-redux';

export function CustomerAdd() {
  const [input, setInput] = useState("");
  //const [customer,setCustomer]=useState([]);
  const dispatch = useDispatch();
  function addCustomer(){
        if(input){
           // setCustomer((prevState)=>[...prevState,input]);
            // console.log(customer);
            dispatch(addCustomerAction(input))
            setInput("")
        }
  }
  return (
    <>
      <div className="text-center">
        <h4 className="text-info py-5">Adding New Customer</h4>
        <input type="text" value ={input} onChange={(e) => setInput(e.target.value)} />
        <button className="btn btn-danger mx-4" onClick={addCustomer}>ADD</button>
      </div>
    </>
  );
}
