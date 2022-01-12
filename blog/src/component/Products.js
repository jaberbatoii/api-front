import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import {Link, NavLink} from 'react-router-dom'
const Products = () => {
    const [data,setData ] = useState([])
    const [filter,setFilter ] = useState(data)
    const [loading,setLoading ] = useState(false)
    let componentMounted =true;

    useEffect(() => {
        const getProducts=async()=>{
            setLoading(true)
            const response =await axios('http://localhost:5000/api/products')
                        console.log(response.data);
                    if(componentMounted){
                        setData(await response.data)
                        setFilter(await response.data)
                        setLoading(false)
                       
                    } 
                    return () => {
                        componentMounted =false
                    }
        }
        getProducts();
    }, [])
    const Loading = () =>{
        return( 
        <>
            <div className='col-md-3'>
                <Skeleton height={350}/>
            </div>
            <div className='col-md-3'>
                <Skeleton height={350}/>
            </div>
            <div className='col-md-3'>
                <Skeleton height={350}/>
            </div>
            <div className='col-md-3'>
                <Skeleton height={350}/>
            </div>
        </>)
    }
    const filterProduct =(cat)=>{
        const updatelist=data.filter((x)=>x.category === cat);
            setFilter(updatelist)
    }
    const ShowProuduct = () =>{
        return (
     <>
            <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                    <button className='btn btn-outline-dark me-2' onClick={()=> setFilter(data)}>همه</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=> filterProduct(`men's clothing`)}>Mens clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=> filterProduct(`غذا`)}>غذا</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=> filterProduct('لباس')}>لباس</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=> filterProduct('الکترونیک')}>الکترونیک</button>
            </div>
            {filter.map((product)=>{
                return(
                        <>
                        <div className='col-md-3 mb-4'>
                        <div className="card h-100 text-center p-4" key={product.id} >
                        <Link to={`/products/${product._id}`}>
                            <img src={product.img} className="card-img-top" height="250px" alt={product.title}/>
                            <div className="card-body">
                                <h5 className="card-title ">{product.title.substring(0,12)}</h5>
                                {/* <p className="card-text load fw-bold">${product.price}</p> */}
                                <Link to={`/products/${product.id}`} className="btn btn-outline-dark">نمایش دسته ها</Link>
                            </div>
                        </Link>
                            </div>
                        </div>
                        </>
                )
            })}
     </>
        )
    }

    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>latest Products</h1>
                        <hr/>
                    </div>
                </div> 
                    <div className='row justify-content-center'>
                            {loading ? <Loading/> : <ShowProuduct/>}
                    </div>
            </div>
        </div>
    )
}

export default Products
