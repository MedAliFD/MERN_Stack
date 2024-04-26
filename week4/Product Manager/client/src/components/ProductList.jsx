import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);


    function refrech() {
        axios.get("http://localhost:8000/api/product")
            .then(res => {
                // console.log(res.data)
                setProducts(res.data)
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
                        <h3>{prod.title}</h3>
                        <p>Price: {prod.price}</p>
                        <p>Description: {prod.description}</p>
                        <li>
                                    <Link to={"/product/" + prod._id}>
                                        {prod.title}
                                    </Link>
                        </li>
                    </div>
                ))}
            </ul>
    </div>
  )
}

export default ProductList