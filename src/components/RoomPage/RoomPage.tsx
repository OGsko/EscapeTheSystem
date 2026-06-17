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
    <main className="min-h-screen bg-[#090b08] bg-[radial-gradient(circle_at_top,_rgba(158,198,82,0.12),_transparent_35%)] p-4 text-lime-300 md:p-6">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-6 xl:grid xl:grid-cols-[320px_minmax(0,1fr)] xl:items-start">
        <Nav />

        <section className="w-full rounded-2xl border border-lime-700 bg-[#151813] p-5 shadow-[0_0_40px_rgba(120,160,60,0.08)] md:p-6">
          <div className="mb-5 flex flex-col gap-4 border-b border-lime-800 pb-5 md:flex-row md:items-center md:justify-between">
            <h1 className="text-4xl font-black uppercase tracking-wide text-lime-300">
              {currentRoom.roomName}
            </h1>
            <p className="rounded-lg border border-lime-800 bg-[#0f120f] px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-lime-500">
              Project Nexus
            </p>
          </div>

          <section className="grid gap-5 xl:grid-cols-[minmax(0,1.45fr)_360px]">
            <div className="flex flex-col gap-5">
              <div className="flex min-h-[300px] items-center justify-center rounded-xl border border-lime-800 bg-[#10130f] p-4 md:min-h-[420px] xl:min-h-[520px]">
                <img
                  src={
                    lastRoomSolved
                      ? currentRoom.solvedImage
                      : roomIsSolved
                        ? currentRoom.solvedImage
                        : currentRoom.unsolvedImage
                  }
                  alt={currentRoom.roomName}
                  className="max-h-[260px] w-full rounded-lg object-contain md:max-h-[380px] xl:max-h-[480px]"
                />
              </div>

              <div className="max-w-4xl">
                <Inventory onItemClick={handleItemClick} />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="rounded-xl border border-lime-800 bg-[#10130f] p-5">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-lime-500">
                  Instruction
                </p>
                <p className="text-lg leading-8 text-lime-200/90">
                  {lastRoomSolved
                    ? currentRoom.solvedInstruction
                    : roomIsSolved
                      ? currentRoom.solvedInstruction
                      : currentRoom.unsolvedInstruction}
                </p>
              </div>

              <div className="rounded-xl border border-lime-800 bg-[#10130f] p-5">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-lime-500">
                  Hint
                </p>
                {!lastRoomSolved ? (
                  <Hint hint={currentRoom.hint} />
                ) : (
                  <button
                    onClick={() => navigate("/victory")}
                    className="rounded-lg border border-lime-500 bg-lime-400 px-5 py-3 font-bold uppercase tracking-wide text-black transition hover:bg-lime-300"
                  >
                    Escape
                  </button>
                )}
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default RoomPage;
