import { createContext, useContext, useState, type ReactNode } from "react";
import itemsData from "../data/items.json";
import type { Items } from "../Type";

interface InventoryContextType {
  inventory: Items[];
  addItemToInventory: (item: Items) => void;
}

const InventoryContext = createContext<InventoryContextType | undefined>(
  undefined,
);

interface InventoryProviderProps {
  children: ReactNode;
}

// Spelaren börjar med UV Light, som har id 1 i items.json.
const startingItem = itemsData.find((item) => item.id === 1) as Items;

// Providern sparar inventory och delar det med komponenterna i appen
export const InventoryProvider = ({ children }: InventoryProviderProps) => {
  const [inventory, setInventory] = useState<Items[]>([startingItem]);

  const addItemToInventory = (item: Items) => {
    
    // Kontrollera att föremålet inte redan finns innan det läggs till.
    const itemAlreadyExists = inventory.some(
      (inventoryItem) => inventoryItem.id === item.id,
    );

    if (!itemAlreadyExists) {
      setInventory([...inventory, item]);
    }
  };

  return (
    <InventoryContext.Provider value={{ inventory, addItemToInventory }}>
      {children}
    </InventoryContext.Provider>
  );
};

// Hook som gör det enklare för komponenter att använda Context.
export const useInventory = () => {
  const context = useContext(InventoryContext);

  if (!context) {
    throw new Error("useInventory must be used within an InventoryProvider");
  }
  return context;
};
