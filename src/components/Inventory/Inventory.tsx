import { useInventory } from '../../context/InventoryContext';

const Inventory = () => {

  const { inventory } = useInventory();

  return (
    <div>
      {inventory.map((item) => (
      <div key={item.id}>
        <p>{item.item}</p>
      </div>
      ))}
    </div>
  )
}

export default Inventory