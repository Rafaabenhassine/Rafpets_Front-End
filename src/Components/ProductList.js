import {React} from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
import { Button } from 'react-bootstrap'
import { Link} from 'react-router-dom'
import './ProductList.css'


const ProductList = () => {
  
    const Products=useSelector((state)=>state.ListReducer.ListProduct)
    var j=0
    Products.map(prod=>prod.panier?j=j+1:j)
    
  return (
    <div>
    
        {/* <Link to={"/Chiens"}><Button > Chiens</Button></Link>
        
        <Link to={"/Chats"}><Button > Chats</Button></Link> */}
        
        {Products.map(Prod=><Product Prod={Prod} key={Prod.id}  />)}
    
    </div>
  )
}

export default ProductList