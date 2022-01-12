import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addcart,deletecart } from "../redux/actions";
export default function Product() {
  const { id } = useParams();
  console.log("id>>>>",id);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [btnClcik, setBtnClcik] = useState(false);
  const [cartBtn,setCartBtn] = useState("اضافه کردن")   
//   const handleClick = () =>{
     
//   }
  const dispatch = useDispatch();
  const addProduct = (product) => {
    if(cartBtn === "اضافه کردن"){
        dispatch(addcart(product));
        setCartBtn("حذف از سبد خرید")
        
    }else {
        dispatch(deletecart(product))
        setCartBtn("اضافه کردن")
       
    }
  };
  let compolet = true;
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await axios(`http://localhost:5000/api/products/find/${id}`);
      if (compolet) {
        setProduct(await response.data.categories);
        setLoading(false);
      }
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton count={5} height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const ShowProducts = () => {
    return (
      <>
      {product.map((u,i)=>{
        return(
          <>
          <div className="col-md-6 mt-2">
          <img
            src={u.img}
            alt={product.title}
            width="400px"
            height="400px"
          />
        </div>
         <div className="col-md-6">
         <h4 className="text-uppercase text-black-50">{product.category}</h4>
         <h1 className="dispaly-5 text-info">{u.title}</h1>
         <p className="load fw-blod mt-2">
           تعداد {u.count}
          
         </p>
         <h3 className="display-6 fw-bold my-4">قیمت : {u.price}</h3>
         <p className="load">{product.description}</p>
         <button className="btn btn-outline-dark px-4 py-2"  onClick={()=> addProduct(product)}>
           {cartBtn}
         </button>
         <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2">
           رفتن به سبد خرید
         </Link>
       </div>
       </>
          )
      })}
        {/* <div className="col-md-6">
          <img
            src={product.img}
            alt={product.title}
            width="400px"
            height="400px"
          />
        </div> */}
        {/* <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="dispaly-5">{product.title}</h1>
          <p className="load fw-blod">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="load">{product.description}</p>
          <button className="btn btn-outline-dark px-4 py-2"  onClick={()=> addProduct(product)}>
            {cartBtn}
          </button>
          <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to Cart
          </Link>
        </div> */}
      </>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}
