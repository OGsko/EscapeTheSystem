import { useParams } from "react-router-dom";
import roomsData from "../../data/rooms.json";
import Inventory from "../Inventory/Inventory";
import Nav from "../Nav/Nav";
import Hint from "../../Hint/Hint";
import itemsData from "../../data/items.json";
import type { Items } from "../../Type";
import { useInventory } from "../../context/InventoryContext";

const RoomPage = () => {
  const { roomPath } = useParams();
  const currentRoom = roomsData.find((room) => room.roomPath === roomPath);
  const { addItemToInventory } = useInventory();

  if (!currentRoom) {
    return <div>Room not found</div>;
  }
  
  // Kontrollerar om spelaren använder rätt item och lägger till rummets belöning.
  const handleItemClick = (item: Items) => {
    if (item.id !== currentRoom.itemToSolve) {
      return;
    }

    const rewardItem = itemsData.find(
      (inventoryItem) => inventoryItem.id === currentRoom.itemToAdd,
    );

    if (rewardItem) {
      addItemToInventory(rewardItem);
    }
  };

  // Just nu visar vi alltid rummets olösta version.
  // Senare kan det nog bytas till solved/unsolved med Context och inventory.

  return (
    <>
      <main className="min-h-screen bg-zinc-950 text-green-400 flex flex-col items-center justify-center p-6">
        <Nav />
        <section className="w-full max-w-3xl rounded-xl border border-green-500 bg-zinc-900 p-6 shadow-lg flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{currentRoom.roomName}</h1>
          <img
            src={currentRoom.unsolvedImage}
            alt={currentRoom.roomName}
            className="mx-auto w-full max-w-sm max-h-[420px] rounded-lg object-cover"
          />
          <section className="flex flex-col gap-3">
            <p className="leading-relaxed">{currentRoom.unsolvedInstruction}</p>
            <Hint hint={currentRoom.hint} />
          </section>
        </section>
        <Inventory onItemClick={handleItemClick} />
      </main>
    </>
  );
};

export default RoomPage;
