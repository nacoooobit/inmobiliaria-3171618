import React, { useMemo, useState } from "react";
import { ITEMS } from "../data/items";
import ItemCard from "./ItemCard";
import EmptyState from "./EmptyState";
import LoadingSpinner from "./LoadingSpinner";
import { Property } from "../types";

export const ItemList: React.FC<{
  search: string;
  filters: { city?: string; onlyAvailable?: boolean; minPrice?: number; maxPrice?: number };
  sortBy: string;
  sortDir: "asc" | "desc";
}> = ({ search, filters, sortBy, sortDir }) => {
  const [loading] = useState(false);

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    let base = ITEMS.slice();

    if (filters.city) base = base.filter((b) => b.city === filters.city);
    if (filters.onlyAvailable) base = base.filter((b) => b.available);
    if (filters.minPrice !== undefined) base = base.filter((b) => b.price >= filters.minPrice!);
    if (filters.maxPrice !== undefined) base = base.filter((b) => b.price <= filters.maxPrice!);

    if (s) {
      base = base.filter((b) => {
        return (
          b.title.toLowerCase().includes(s) ||
          b.address.toLowerCase().includes(s) ||
          b.city.toLowerCase().includes(s)
        );
      });
    }

    const sorted = base.slice().sort((a, b) => {
      let res = 0;
      if (sortBy === "price") res = a.price - b.price;
      if (sortBy === "bedrooms") res = a.bedrooms - b.bedrooms;
      if (sortBy === "city") res = a.city.localeCompare(b.city);
      return sortDir === "asc" ? res : -res;
    });

    return sorted;
  }, [search, filters, sortBy, sortDir]);

  if (loading) return <LoadingSpinner />;
  if (!filtered.length) return <EmptyState message="No hay propiedades que coincidan." />;

  return (
    <div>
      <div style={{ marginBottom: 8 }}>{filtered.length} resultados</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 12 }}>
        {filtered.map((item: Property) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
