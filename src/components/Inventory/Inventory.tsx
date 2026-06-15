import { useInventory } from "../../context/InventoryContext";
import type { Items } from "../../Type";

interface InventoryProps {
  onItemClick: (item: Items) => void;
}

const Inventory = ({ onItemClick }: InventoryProps) => {
  const { inventory } = useInventory();

  return (
    <section className="w-full max-w-3xl rounded-xl border border-green-500 bg-zinc-900 p-4 text-green-400">
      <h2 className="mb-4 text-2xl font-bold">Inventory</h2>

      <div className="flex flex-wrap gap-4">
        {inventory.map((item) => (
          <div
            key={item.id}
            onClick={() => onItemClick(item)}
            className="w-40 cursor-pointer rounded-lg border border-green-700 bg-zinc-950 p-3 hover:border-green-400"
          >
            <img
              src={item.image}
              alt={item.item}
              className="mb-3 h-20 w-full object-contain"
            />
            <p className="font-semibold">{item.item}</p>
            <p className="mt-1 text-sm text-green-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Inventory;
