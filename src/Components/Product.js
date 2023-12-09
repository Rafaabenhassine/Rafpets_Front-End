import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { addPanier, deleteProduct, availableProduct, min, plus } from "../JS/Actions/Actions";



function Product({ Prod,setTotal,total }) {
  const dispatch = useDispatch();
  const Products=useSelector((state)=>state.ListReducer.ListProduct)


  return (
    
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Prod.posterUrl} />
      <Card.Body>
        <Card.Title>{Prod.name}</Card.Title>
        <Card.Text>{Prod.description}</Card.Text>
        <Card.Text>{Prod.price}</Card.Text>
        <Button onClick={()=>dispatch(min(Prod.id))} style={{borderRadius:50}}>-</Button>  
        <i>{Prod.compter}</i>
        <Button onClick={()=>dispatch(plus(Prod.id))} style={{borderRadius:50}}>+</Button>
        <Button
          onClick={() => dispatch(availableProduct(Prod.id))}
          variant={Prod.available ? "success" : "danger"}
        >
          {Prod.available ? <span>available</span> : <span>unvailable</span>}
        </Button>
        <Button onClick={() => dispatch(deleteProduct(Prod.id))}>Delete</Button>
       <Button onClick={()=>dispatch(addPanier(Prod.id))}> {Prod.panier?"remove from panier":"add to panier"}</Button>
       
       
      </Card.Body>
    </Card>
  );
}

export default Product;
