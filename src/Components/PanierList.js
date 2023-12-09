import React from 'react'
import Panier from './Panier'
import { useSelector } from 'react-redux'

const PanierList = () => {
  const Products=useSelector((state)=>state.ListReducer.ListProduct)
  var k=0
    Products.map(prod=>k=k+(prod.price*prod.counter))
    

  return (
    <div>
      <h1>Total price:<span>{k}</span></h1>
{Products.filter((el)=>el.panier===true).map((prod)=>(<Panier prod={prod} key={prod.id} />))}

    </div>
  )
}

export default PanierList