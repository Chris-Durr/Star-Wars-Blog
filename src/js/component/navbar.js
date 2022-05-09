import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
			<a class="navbar-brand" href="#">
      <img src="https://www.freepnglogos.com/uploads/star-wars-logo-png-10.png" alt="" width="100" height="50"></img>
    </a>
			</Link>
			<div className="ml-auto">
				<Link to="/planetas">
					<button className="btn btn-secondary">Planetas</button>
				</Link>
			</div>
		</nav>
	);
};
