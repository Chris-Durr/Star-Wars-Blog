import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const {store, actions} = useContext(Context);
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 fixed-top">
			<Link to="/">
			<a className="navbar-brand" href="#">
      <img src="https://www.freepnglogos.com/uploads/star-wars-logo-png-10.png" alt="" width="100" height="50"></img>
    </a>
			</Link>
			<div className="btn-group dropstart">
  <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Favoritos
  </button>
  <ul className="dropdown-menu">
  {store.favoritos.length == 0 ? "Añade tus favoritos" : store.favoritos.map((name, i)=>{
		return <li key={i}>{name}{" "}
		<button onClick={() => {actions.removFav(name);}}>
		X
	  </button></li>
	})}
  </ul>

</div>

					
			<div className="ml-auto">
				<Link to="/planetas">
					<button className="btn btn-secondary">Planetas</button>
				</Link>
			</div>
		</nav>
	);
};
