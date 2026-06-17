import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090b08] bg-[radial-gradient(circle_at_top,_rgba(158,198,82,0.12),_transparent_35%)] px-4 py-8 text-lime-300 md:px-6 md:py-12">
      <section className="mx-auto w-full max-w-6xl rounded-2xl border border-lime-700 bg-[#151813] p-6 shadow-[0_0_40px_rgba(120,160,60,0.08)] md:p-8">
        <div className="rounded-xl border border-lime-800 bg-[#10130f] p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.45em] text-lime-500">
            Project
          </p>

          <h1 className="mt-6 text-6xl font-black uppercase tracking-wide text-lime-300 md:text-8xl">
            Nexus
          </h1>

          <p className="mt-6 text-2xl font-semibold uppercase tracking-[0.22em] text-lime-500 md:text-4xl">
            Escape the System
          </p>

          <div className="mt-12 max-w-5xl space-y-6 text-lg leading-9 text-lime-200/90 md:text-xl">
            <p>You are trapped inside an abandoned AI research facility.</p>
            <p>
              Solve each room in the correct order, collect new items and find a
              way out before the lockdown finishes.
            </p>
          </div>

          <div className="mt-12">
            <Link
              to="/rooms/server-room"
              className="inline-flex min-h-14 items-center justify-center rounded-lg border border-lime-600 bg-[#0f120f] px-8 py-3 font-semibold uppercase tracking-wide text-lime-300 transition hover:border-lime-500 hover:bg-lime-950/40"
            >
              Enter the Facility
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
