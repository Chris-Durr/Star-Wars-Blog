import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, ListGroup } from 'react-bootstrap';
import { getState } from "../store/flux";
import { Context } from "../store/appContext";


export const Carta=(props)=>{
  const {store, action} = useContext(Context);

    return <div key={props.key} className = "d-flex justify-content-center">
  
<Card>
  <Card.Body>
  <Card.Img variant="top" src={store.fotos[props.i]} className="card-img-top" alt="..." />
    <Card.Title>{props.name}</Card.Title>
    <Card.Subtitle></Card.Subtitle>
    <Card.Text>
    </Card.Text>
    <Link to={'/personaje/'+props.i}>
    <Button variant="primary">More Info</Button>
    </Link>
  </Card.Body>
</Card>
</div>
};