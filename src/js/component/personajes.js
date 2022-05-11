import React, {useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Button, Card, Container, ListGroup } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Personajes = ()=>{
    const parametro = useParams();
    const {store, actions} = useContext(Context);

    return <div className = "d-flex justify-content-center">

<Card id="cartapersonajes" style={{ width: '18rem' }}>
  <Card.Header id="cardheader">{store.people[parametro.index]?.name}</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Gender: {store.people[parametro.index]?.gender}</ListGroup.Item>
    <ListGroup.Item>Height: {store.people[parametro.index]?.height}</ListGroup.Item>
    <ListGroup.Item>Hair color: {store.people[parametro.index]?.hair_color}</ListGroup.Item>
    <ListGroup.Item>Eye color: {store.people[parametro.index]?.eye_color}</ListGroup.Item>
    <ListGroup.Item>Birth year: {store.people[parametro.index]?.birth_year}</ListGroup.Item>
  </ListGroup>
  <Link to="/">
  <Button variant="dark">Go back</Button>
  </Link>
</Card>

    </div>
}