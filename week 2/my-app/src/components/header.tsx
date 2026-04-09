import React from "react";

export default function Header() {
	return (
		<header className="site-header">
			<div className="container">
				<h1 className="brand">Inmuebles</h1>
				<nav className="nav-links">
					<a href="#">Inicio</a>
					<a href="#">Listado</a>
					<a href="#">Contacto</a>
				</nav>
			</div>
		</header>
	);
}
