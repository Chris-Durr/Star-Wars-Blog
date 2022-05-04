import React from "react";
import { Button, Card, Container, ListGroup } from 'react-bootstrap';
import { getState } from "../store/flux";


export const Carta=(props)=>{
    return (
<Card>
  <Card.Body>
  <Card.Img variant="top" src="https://static.wikia.nocookie.net/esstarwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest/scale-to-width-down/350?cb=20071214134433" />
    <Card.Title>{props.name}</Card.Title>
    <Card.Subtitle></Card.Subtitle>
    <Card.Text>
    <ListGroup>
  <ListGroup.Item>Gender: {props.gender}</ListGroup.Item>
  <ListGroup.Item> Birth year: {props.birth_year}</ListGroup.Item>
</ListGroup>
    </Card.Text>
    <Button variant="primary">More Info</Button>
  </Card.Body>
</Card>
)};