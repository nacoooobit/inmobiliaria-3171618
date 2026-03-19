import React, { useState, useEffect } from "react";
import { propiedad } from "../types";

type Props = {
	onAdd: (p: propiedad) => void;
	onUpdate: (p: propiedad) => void;
	editingProperty: propiedad | null;
};

export default function PropertyForm({ onAdd, onUpdate, editingProperty }: Props) {
	const [direccion, setDireccion] = useState("");
	const [precio, setPrecio] = useState<number>(0);

	useEffect(() => {
		if (editingProperty) {
			setDireccion(editingProperty.direccion);
			setPrecio(editingProperty.precio);
		}
	}, [editingProperty]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const p: propiedad = {
			id: editingProperty?.id ?? Date.now(),
			direccion,
			precio,
			type: "venta",
			status: "disponible",
		} as propiedad;

		if (editingProperty) onUpdate(p);
		else onAdd(p);

		setDireccion("");
		setPrecio(0);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input value={direccion} onChange={(e) => setDireccion(e.target.value)} placeholder="Dirección" />
			<input value={precio} onChange={(e) => setPrecio(Number(e.target.value))} placeholder="Precio" type="number" />
			<button type="submit">Guardar</button>
		</form>
	);
}
