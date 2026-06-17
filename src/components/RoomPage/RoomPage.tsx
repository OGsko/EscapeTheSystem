import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useInventory } from "../../context/InventoryContext";
import { useState } from "react";
import type { Items } from "../../Type";

import roomsData from "../../data/rooms.json";
import Inventory from "../Inventory/Inventory";
import Nav from "../Nav/Nav";
import Hint from "../../Hint/Hint";
import itemsData from "../../data/items.json";

const RoomPage = () => {
  const { roomPath } = useParams();
  const currentRoom = roomsData.find((room) => room.roomPath === roomPath);
  const { addItemToInventory, inventory } = useInventory();
  const navigate = useNavigate();

  const [lastRoomSolved, setLastRoomSolved] = useState(false);

  if (!currentRoom) {
    return <Navigate to={`/`} replace />;
  }

  const roomIsSolved = inventory.some((i) => i.id === currentRoom.itemToAdd);

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

    if (currentRoom.id === 6 && item.id === 6) {
      setLastRoomSolved(true);
    }
  };

  return (
    <>
      <main className="min-h-screen bg-zinc-950 text-green-400 flex flex-col items-center justify-center p-6">
        <Nav />
        <section className="w-full max-w-3xl rounded-xl border border-green-500 bg-zinc-900 p-6 shadow-lg flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{currentRoom.roomName}</h1>
          <img
            src={
              lastRoomSolved
                ? currentRoom.solvedImage
                : roomIsSolved
                  ? currentRoom.solvedImage
                  : currentRoom.unsolvedImage
            }
            alt={currentRoom.roomName}
            className="mx-auto w-full max-w-sm max-h-[420px] rounded-lg object-cover"
          />
          <section className="flex flex-col gap-3">
            <p className="leading-relaxed">
              {lastRoomSolved
                ? currentRoom.solvedInstruction
                : roomIsSolved
                  ? currentRoom.solvedInstruction
                  : currentRoom.unsolvedInstruction}
            </p>
            {!lastRoomSolved ? (
              <Hint hint={currentRoom.hint} />
            ) : (
              <button
                onClick={() => navigate("/victory")}
                className="bg-green-500 text-black px-4 py-2 rounded"
              >
                ESCAPE!
              </button>
            )}
          </section>
        </section>
        <Inventory onItemClick={handleItemClick} />
      </main>
    </>
  );
};

export default RoomPage;
