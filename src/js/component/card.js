import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, ListGroup } from 'react-bootstrap';
import { getState } from "../store/flux";
import { Context } from "../store/appContext";


export const Carta=(props)=>{
  const {store, actions} = useContext(Context);


    return <div id="cardiv" key={props.key} className = "container d-flex justify-content-center">
<div style={{width: "300px"}}>
<Card id="cartamain">
  <Card.Body>
  <Card.Img variant="top" src={store.fotos[props.i]} className="card-img-top" alt="..." />
    <Card.Title>{props.name}</Card.Title>
    <Card.Subtitle></Card.Subtitle>
    <Card.Text>
    </Card.Text>
    <Link to={'/personaje/'+props.i}>
    <Button variant="primary">More Info</Button>
    </Link>
    <Button  onClick={(()=>{
      actions.addFav(props.name)
      })} variant="danger">Favorites</Button>

  </Card.Body>
</Card>
</div>
</div>
};