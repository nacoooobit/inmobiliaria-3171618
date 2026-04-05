import React, { useMemo, useState } from "react";
import { ItemList } from "./ItemList";
import SearchBar from "./SearchBar";
import FilterPanel from "./FilterPanel";
import SortSelector from "./SortSelector";
import { ITEMS } from "../data/items";
import useDebounce from "../hooks/useDebounce";

export const Catalog: React.FC = () => {
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search, 250);

  const [filters, setFilters] = useState<{ city?: string; onlyAvailable?: boolean; minPrice?: number; maxPrice?: number }>({});

  const [sortBy, setSortBy] = useState<string>("price");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const cities = useMemo(() => Array.from(new Set(ITEMS.map((i) => i.city))), []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Catálogo de Propiedades</h1>
      <p>Busca, filtra y ordena las propiedades disponibles en la inmobiliaria.</p>

      <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 16 }}>
        <aside>
          <SearchBar value={search} onChange={setSearch} onClear={() => setSearch("")} />
          <FilterPanel cities={cities} onFilterChange={setFilters} />
          <div style={{ marginTop: 12 }}>
            <SortSelector value={sortBy} direction={sortDir} onChange={(v, d) => { setSortBy(v); setSortDir(d); }} />
          </div>
        </aside>

        <main>
          <ItemList search={debounced} filters={filters} sortBy={sortBy} sortDir={sortDir} />
        </main>
      </div>
    </div>
  );
};

export default Catalog;
