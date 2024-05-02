import { Filters } from "./Filters.jsx";

export function Header() {
  return (
    <header className="mb-8">
      <h1 className="mb-6 text-2xl">React Shop 🛒</h1>
      <Filters />
    </header>
  );
}
