import { useState } from "react";
import { propiedad } from "./types";
import Header from "./components/header";
import PropertyForm from "./components/PropertyForm";
import PropertyList from "./components/PropertyList";
function App() {
  const [properties, setProperties] = useState<propiedad[]>([])
  const [editingProperty, setEditingProperty] = useState<propiedad | null>(null)

  //  CREATE
  const addProperty = (property: propiedad) => {
    setProperties([...properties, { ...property, id: Date.now() }])
  }

  //  DELETE
  const deleteProperty = (id: number) => {
    setProperties(properties.filter((p: propiedad) => p.id !== id))
  }

  // UPDATE
  const updateProperty = (updated: propiedad) => {
    setProperties(
      properties.map((p: propiedad) =>
        p.id === updated.id ? updated : p
      )
    )
    setEditingProperty(null)
  }

  const handleEdit = (property: propiedad) => {
    setEditingProperty(property)
  }

  return (
    <div>
      <Header />

      <PropertyForm
        onAdd={addProperty}
        onUpdate={updateProperty}
        editingProperty={editingProperty}
      />

      <PropertyList
        properties={properties}
        onDelete={deleteProperty}
        onEdit={handleEdit}
      />
    </div>
  )
}

export default App