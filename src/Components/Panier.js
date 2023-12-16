import React from 'react'
import Card from "react-bootstrap/Card";
import { addPanier } from '../JS/Actions/Actions';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';


const Panier = ({prod}) => {
  const dispatch = useDispatch();

  return (
    <div>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={prod.posterUrl} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>DESCRIPTION : {prod.description}</Card.Text>
        <Card.Text>SIZE : {prod.availableSize}</Card.Text>
        <Card.Text>COLOR : {prod.color}</Card.Text>
        <Card.Text>PRICE : {prod.price}</Card.Text>
        <i>{prod.counter}</i> 
      
        <Button onClick={()=>dispatch(addPanier(prod.id))}> {prod.panier?"remove from panier":"add to panier"}</Button>

      </Card.Body>
    </Card>
    </div>
  )
}

export default Panier