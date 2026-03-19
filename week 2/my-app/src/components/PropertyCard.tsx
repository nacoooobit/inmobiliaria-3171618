import React from "react";  
import { propiedad } from "../types";

type Props = {
	property: propiedad;
};

export default function PropertyCard({ property }: Props) {
	return (
		<article>
			<h3>{property.direccion}</h3>
			<p>Precio: ${property.precio}</p>
			<p>Status: {property.status}</p>
			<p>Tipo: {property.type}</p>
		</article>
	);
}
