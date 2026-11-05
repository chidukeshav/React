import { Fragment } from "react";
import Data from "./Data.json"
import { useNavigate } from 'react-router-dom';

const Cosmetics = () => {
    console.log(Data);

    let navigate=useNavigate()

    let handlecart=()=>{
        navigate("/cart")
    }
    
  return (
    <div>{
        Data.products.map((lio)=>{
            console.log(lio);
            return<Fragment>
                <img src={lio.images[0]} alt="" />
                <button onClick={handlecart}>Add to cart</button>
            </Fragment>
            
        })
    }
        </div>
  )
}

export default Cosmetics