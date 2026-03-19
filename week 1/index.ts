// ============================================
// PROYECTO SEMANAL: MODELADO DE ENTIDADES
// ============================================

console.log('🏛️ PROYECTO SEMANAL: MODELADO DE ENTIDADES\n');

// INSTRUCCIONES:
// Adapta este archivo a tu dominio asignado (ej: biblioteca, farmacia, gimnasio, restaurante, etc.)
// Implementa las entidades, tipos y funciones siguiendo los TODOs y comentarios.
// Usa interfaces, types, type unions y literales. Comenta el código con qué/para/impacto.

// ============================================
// 1. Define las entidades principales de tu dominio
// ============================================

// TODO: Define una interface para la entidad principal (ej: Book, Medicine, Member, Dish)
// interface Entity {
//   ...
// }

// TODO: Define al menos otra interface relacionada (ej: Author, Sale, Routine, Table)
// interface RelatedEntity {
//   ...
// }

// ============================================
// 2. Usa type unions y literales para propiedades clave
// ============================================

// TODO: Define un type union para un estado, categoría o rol relevante
// type Status = 'active' | 'inactive' | 'archived';

// TODO: Usa un type literal para limitar valores permitidos
// type Category = 'A' | 'B' | 'C';

// ============================================
// 3. Implementa funciones tipadas para operaciones básicas
// ============================================

// TODO: Implementa una función que cree una entidad
// function createEntity(/* ... */): Entity {
//   // ...
// }

// TODO: Implementa una función que liste entidades
// function listEntities(/* ... */): Entity[] {
//   // ...
// }

// TODO: Implementa una función que filtre entidades por status/categoría
// function filterByStatus(/* ... */): Entity[] {
//   // ...
// }

// ============================================
// 4. Prueba tus funciones con datos de ejemplo
// ============================================

// TODO: Crea algunos objetos de ejemplo y prueba las funciones
// console.log(createEntity(...));
// console.log(listEntities(...));
// console.log(filterByStatus(...));

// ============================================
// 5. Comenta tu código explicando qué/para/impacto
// ============================================

// QUÉ: ...
// PARA: ...
// IMPACTO: ...

console.log('\n🚦 Recuerda: Adapta TODO a tu dominio y comenta tu código.');

///////////////////////////////
// Proyecto Inmobiliaria
// Modelo de Entidades con TypeScript
///////////////////////////////

///////////////////////////////
// Types y Interfaces
///////////////////////////////

type tipoPropiedad = 'venta' | 'arriendo';
type Status = 'disponible' | 'vendida' | 'arrendada';

interface propiedad {
  id: number;
  direccion: string;
  precio: number;
  type: tipoPropiedad;
  status: Status;
}

type roleclient = 'arrendatario' | 'comprador';
interface client {
  id: number;
  name: string;
  role: roleclient;
}

type roleagent = 'vendedor' | 'arrendador';
interface agent {
  id: number;
  name: string;
  role: roleagent;
}

///////////////////////////////
//  Funciones Tipadas
///////////////////////////////

// QUÉ: Crear una propiedad
// PARA: Guardar un nuevo registro de propiedad
// IMPACTO: Permite añadir propiedades al sistema de forma tipada
function createProperty(prop: propiedad): propiedad {
  return prop;
}

// QUÉ: Listar propiedades
// PARA: Mostrar todas las propiedades disponibles
// IMPACTO: Facilita la visualización y organización
function listpropiedad(props: propiedad[]): propiedad[] {
  return props;
}

// QUÉ: Filtrar propiedades por estado
// PARA: Ver solo las propiedades que cumplan un criterio
// IMPACTO: Mejora la búsqueda y selección de propiedades
function filterByStatus(props: propiedad[], status: Status): propiedad[] {
  return props.filter(p => p.status === status);
}

// QUÉ: Crear cliente
// PARA: Registrar un nuevo cliente en el sistema
// IMPACTO: Mantiene un control de compradores y arrendatarios
function createClient(c: client): client {
  return c;
}

// QUÉ: Crear agente
// PARA: Registrar un agente encargado de ventas o arriendos
// IMPACTO: Permite asignar responsabilidades y controlar agentes
function createAgent(a: agent): agent {
  return a;
}

///////////////////////////////
//  Datos de Ejemplo
///////////////////////////////

// Propiedades
const p1: propiedad = { id: 1, direccion: "Calle 123, Bogotá", precio: 250000000, type: 'venta', status: 'disponible' };
const p2: propiedad = { id: 2, direccion: "Carrera 45, Medellín", precio: 1200000, type: 'arriendo', status: 'disponible' };
const p3: propiedad = { id: 3, direccion: "Calle 78, Cali", precio: 350000000, type: 'venta', status: 'vendida' };
const propiedades: propiedad[] = [p1, p2, p3];

// Clientes
const c1: client = { id: 1, name: "johan acuña", role: 'comprador' };
const c2: client = { id: 2, name: "nicolle acuña", role: 'arrendatario' };

// Agentes
const a1: agent = { id: 1, name: "Carlos Ruiz", role: 'vendedor' };
const a2: agent = { id: 2, name: "Laura Martínez", role: 'arrendador' };

///////////////////////////////
//  Uso de Funciones
///////////////////////////////

console.log("Crear propiedad:");
console.log(createProperty(p1));

console.log("\nListar propiedades:");
console.log(listpropiedad(propiedades));

console.log("\nFiltrar propiedades disponibles:");
console.log(filterByStatus(propiedades, 'disponible'));

console.log("\nCrear clientes:");
console.log(createClient(c1));
console.log(createClient(c2));

console.log("\nCrear agentes:");
console.log(createAgent(a1));
console.log(createAgent(a2));

///////////////////////////////
// Comentarios Generales
///////////////////////////////

// QUÉ: Funciones y tipos que representan propiedades, clientes y agentes.
// PARA: Mantener un sistema organizado y tipado para la inmobiliaria.
// IMPACTO: Permite agregar, listar y filtrar datos de manera segura y estructurada.