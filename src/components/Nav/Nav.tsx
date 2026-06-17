import roomsData from "../../data/rooms.json";
import { Link } from "react-router-dom";

import type { Rooms } from "../../Type";

const Nav = () => {
  return (
    <aside className="w-full rounded-2xl border border-lime-700 bg-[#151813] p-6 text-lime-300 shadow-[0_0_30px_rgba(120,160,60,0.08)] xl:sticky xl:top-6">
      <div className="mb-6 border-b border-lime-800 pb-6">
        <p className="text-sm uppercase tracking-[0.35em] text-lime-500">
          Project
        </p>
        <h1 className="mt-2 text-5xl font-black uppercase tracking-wide text-lime-300">
          Nexus
        </h1>
        <p className="mt-4 text-sm leading-7 text-lime-200/85">
          Explore the facility, solve each room in order and use the right item
          to unlock the next step.
        </p>
      </div>

      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-lime-500">
        Navigation
      </p>

      <ul className="flex flex-col gap-3">
        {roomsData.map((item: Rooms) => (
          <li key={item.id}>
            <Link
              to={`/rooms/${item.roomPath}`}
              className="block rounded-lg border border-lime-800 bg-[#0f120f] px-4 py-3 text-sm font-semibold uppercase tracking-wide text-lime-200 transition hover:border-lime-500 hover:bg-lime-950/40"
            >
              {item.roomName}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Nav;
