import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const nav = useNavigate(); 

// need to refresh to show the new added data // product

    function refrech() {
        axios.get("http://localhost:8000/api/product")
            .then(res => {
                setProducts(res.data);
                nav("/");
            })
            .catch(err => {
                console.log(err)
            })

    }
    useEffect(() => {
        refrech()
    }, [])


  return (
    <div>
        <br />
        
        <h2>All Products</h2>
            <ul>
                {products.map((prod, idx) => (
                    <div key={idx}>
                        <h3>
                                    <Link to={"/product/" + prod._id}>
                                        {prod.title}
                                    </Link>
                        </h3>
                    </div>
                ))}
            </ul>
    </div>
  )
}

export default ProductList