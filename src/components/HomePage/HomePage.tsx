import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-zinc-950 text-green-400 flex items-center justify-center p-6">
      <section className="max-w-2xl border border-green-500 rounded-xl p-8 bg-zinc-900 shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Project Nexus</h1>

        <p className="mb-3">
          You are trapped inside an abandoned AI research facility.
        </p>
        <p className="mb-3">
          Solve puzzles, collect items, and find a way to escape!
        </p>

        <Link
          to="/rooms/server-room"
          className="inline-block rounded-lg border border-green-400 px-5 py-3 font-semibold hover:bg-green-400 hover:text-black transition"
        >
          Enter the facility
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
