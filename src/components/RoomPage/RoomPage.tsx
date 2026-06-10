import { useParams } from "react-router-dom";
import roomsData from "../../data/rooms.json";

const RoomPage = () => {
  const { roomPath } = useParams();
  const currentRoom = roomsData.find((room) => room.roomPath === roomPath);

  if (!currentRoom) {
    return <div>Room not found</div>;
  }

  // Just nu visar vi alltid rummets olösta version.
  // Senare kan det nog bytas till solved/unsolved med Context och inventory.
  // Senare kan hinten förmodligen styras med useSearchParams.
  return (
    <main className="min-h-screen bg-zinc-950 text-green-400 flex items-center justify-center p-6">
      <section className="w-full max-w-3xl rounded-xl border border-green-500 bg-zinc-900 p-6 shadow-lg flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{currentRoom.roomName}</h1>
        <img
          src={currentRoom.unsolvedImage}
          alt={currentRoom.roomName}
          className="mx-auto w-full max-w-sm max-h-[420px] rounded-lg object-cover"
        />
        <section className="flex flex-col gap-3">
          <p className="leading-relaxed">{currentRoom.unsolvedInstruction}</p>
          <p className="text-green-300">{currentRoom.hint}</p>
        </section>
      </section>
    </main>
  );
};

export default RoomPage;
