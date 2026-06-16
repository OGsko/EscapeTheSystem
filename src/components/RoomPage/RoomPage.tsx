import { Navigate, useParams } from "react-router-dom";
import roomsData from "../../data/rooms.json";
import Inventory from "../Inventory/Inventory";
import Nav from "../Nav/Nav";
import Hint from "../../Hint/Hint";
import itemsData from "../../data/items.json";
import type { Items } from "../../Type";
import { useInventory } from "../../context/InventoryContext";

import { Link } from "react-router-dom";

import { useState } from "react";

const RoomPage = () => {
  const { roomPath } = useParams();
  const currentRoom = roomsData.find((room) => room.roomPath === roomPath);
  const { addItemToInventory } = useInventory();
  const {inventory} = useInventory()

  //State för sista rummet
  const [lastRoomSolved, setLastRoomSolved] = useState(false)

  if (!currentRoom) {
    return <Navigate to={`/`} replace/>
  }

  //Kolla om användaren har fått sitt reward item. 
  const roomIsSolved = inventory.some((i) => i.id === currentRoom?.itemToAdd);
  
  
  
  
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
    //om man står i sista rummet och klickar på master override key så ändras LastRoomSolved state.
    if(currentRoom.id === 6 && item.id === 6){
      setLastRoomSolved(true)
    }

  };

  //returnerar bild, text och knapp för hint. 
  //Om roomIsSolved så kommer bilden och texten ändras till solvedImage/solvedInstruction, annars det motsatta.
  //Om lastRoomSolved statet är true så visas också solvedImage, och detta är för att det sista rummets solvedImage ska visas även fast användaren ej får ett item.
  return (
    <>
      <main className="min-h-screen bg-zinc-950 text-green-400 flex flex-col items-center justify-center p-6">
        <Nav />
        <section className="w-full max-w-3xl rounded-xl border border-green-500 bg-zinc-900 p-6 shadow-lg flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{currentRoom.roomName}</h1>
          <img
            src={lastRoomSolved? currentRoom.solvedImage : roomIsSolved ? currentRoom.solvedImage : currentRoom.unsolvedImage }
            alt={currentRoom.roomName}
            className="mx-auto w-full max-w-sm max-h-[420px] rounded-lg object-cover"
          />
          <section className="flex flex-col gap-3">
            <p className="leading-relaxed">{lastRoomSolved? currentRoom.solvedInstruction :roomIsSolved ? currentRoom.solvedInstruction : currentRoom.unsolvedInstruction }</p>
            {/* Här måste context/inventory rensas. För när man startar om spelet igen är alla rum redan lösta pga roomIsSolved logiken */}
            {!lastRoomSolved ? (
              <Hint hint={currentRoom.hint} />
            ) : (
              <Link  
              to="/victory" className="bg-green-500 text-black px-4 py-2 rounded">
                ESCAPE!
              </Link>
            )}
            
          </section>
        </section>
        <Inventory onItemClick={handleItemClick} />
      </main>
    </>
  );
};

export default RoomPage;
