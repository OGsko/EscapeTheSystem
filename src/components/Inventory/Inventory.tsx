import { useInventory } from "../../context/InventoryContext";
import type { Items } from "../../Type";

interface InventoryProps {
  onItemClick: (item: Items) => void;
}

const Inventory = ({ onItemClick }: InventoryProps) => {
  const { inventory } = useInventory();

  return (
    <section className="w-full rounded-2xl border border-lime-700 bg-[#151813] p-4 text-lime-300 shadow-[0_0_30px_rgba(120,160,60,0.08)]">
      <h2 className="mb-4 text-2xl font-black uppercase tracking-wide text-lime-300">
        Inventory
      </h2>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {inventory.map((item) => (
          <div
            key={item.id}
            onClick={() => onItemClick(item)}
            className="group relative cursor-pointer rounded-xl border border-lime-800 bg-[#0f120f] p-3 transition hover:border-lime-500 hover:bg-lime-950/30"
          >
            <img
              src={item.image}
              alt={item.item}
              className="mb-3 h-20 w-full object-contain"
            />
            <p className="font-semibold uppercase tracking-wide text-lime-200">
              {item.item}
            </p>

            <div className="pointer-events-none absolute left-3 right-3 top-3 z-10 rounded-lg border border-lime-600 bg-[#0b0e0b]/95 p-3 opacity-0 shadow-[0_0_20px_rgba(120,160,60,0.15)] transition duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-lime-500">
                Item info
              </p>
              <p className="text-sm leading-6 text-lime-100">
                {item.description}
              </p>
            </div>

            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-lime-500/70">
              Hover for details
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Inventory;
