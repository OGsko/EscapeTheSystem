import React from 'react'
import roomsData from "../../data/rooms.json";
import { Link } from "react-router-dom";



import type { RoomsTwo } from '../../Type';

const Nav = () => {
  return (
    <nav>
        <ul className='flex w-full max-w-3xl rounded-xl border border-green-500 bg-zinc-900 p-6 shadow-lg gap-4'>
            {roomsData.map((item: RoomsTwo) => (
                <li key={item.id}>
                    <Link to = {`/rooms/${item.roomPath}`}>
                    {item.roomName}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Nav