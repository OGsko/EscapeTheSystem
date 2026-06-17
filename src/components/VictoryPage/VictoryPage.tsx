import Image from "./../../../public/images/winscreen.png";

import { Link } from "react-router-dom";
import { useInventory } from "../../context/InventoryContext";

const VictoryPage = () => {
  const { resetInventory } = useInventory();

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090b08] bg-[radial-gradient(circle_at_top,_rgba(158,198,82,0.12),_transparent_35%)] px-4 py-8 text-lime-300 md:px-6 md:py-12">
      <section className="mx-auto flex min-h-[72vh] w-full max-w-5xl flex-col justify-center gap-6 rounded-2xl border border-lime-700 bg-[#151813] p-5 shadow-[0_0_40px_rgba(120,160,60,0.08)] md:p-6">
        <div className="flex flex-col gap-4 border-b border-lime-800 pb-5 md:flex-row md:items-center md:justify-between">
          <h1 className="text-4xl font-black uppercase tracking-wide text-lime-300">
            Escape Complete
          </h1>
          <p className="rounded-lg border border-lime-800 bg-[#0f120f] px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-lime-500">
            Project Nexus
          </p>
        </div>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-center">
          <div className="flex min-h-[420px] items-center justify-center rounded-xl border border-lime-800 bg-[#10130f] p-4 md:min-h-[520px]">
            <img
              src={Image}
              alt="Exit image"
              className="h-[340px] w-full rounded-lg object-contain md:h-[460px]"
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <p className="max-w-md text-xl leading-9 text-lime-200/90">
              You escaped the facility and shut down the AI lockdown. Project
              Nexus is finally behind you.
            </p>

            <Link
              to="/"
              onClick={resetInventory}
              className="inline-flex min-h-14 w-fit items-center justify-center rounded-lg border border-lime-600 bg-[#0f120f] px-6 py-3 text-center font-semibold uppercase tracking-wide text-lime-300 transition hover:border-lime-500 hover:bg-lime-950/40"
            >
              Play Again
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
};

export default VictoryPage;
