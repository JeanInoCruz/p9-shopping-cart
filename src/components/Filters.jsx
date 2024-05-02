import { useId } from "react";
import { useFilters } from "../hooks/useFilters.js";

export function Filters() {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="flex items-center justify-between text-sm font-medium ">
      <div className="flex gap-4">
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div className="text-black">
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
}
