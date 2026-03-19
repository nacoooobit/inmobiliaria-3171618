import React from "react";
import { propiedad } from "../types";

type Props = {
	properties: propiedad[];
	onDelete: (id: number) => void;
	onEdit: (p: propiedad) => void;
};

export default function PropertyList({ properties, onDelete, onEdit }: Props) {
	return (
		<ul>
			{properties.map((p) => (
				<li key={p.id}>
					<div>
						<strong>{p.direccion}</strong> — ${p.precio}
						<div>Status: {p.status} • Tipo: {p.type}</div>
					</div>
					<button onClick={() => onEdit(p)}>Editar</button>
					<button onClick={() => onDelete(p.id)}>Eliminar</button>
				</li>
			))}
		</ul>
	);
}
