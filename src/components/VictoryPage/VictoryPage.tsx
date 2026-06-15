import Image from "./../../../public/images/winscreen.png"

import { Link } from "react-router-dom"

const VictoryPage = () => {
  return (
    <main className="min-h-screen bg-zinc-950 text-green-400 flex flex-col items-center justify-center p-6">
    <section className="w-full max-w-3xl rounded-xl border border-green-500 bg-zinc-900 p-6 shadow-lg flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Congratulations</h1>
        <img
          src={Image}
          alt="Exit image"
          className="mx-auto w-full max-w-sm max-h-[420px] rounded-lg object-cover"
        />
        <section className="flex flex-col gap-3">
          <p className="leading-relaxed">You have succesfully escaped the evil AI facility!</p>
            <Link
          to="/"
          className="inline-block rounded-lg border border-green-400 px-5 py-3 font-semibold hover:bg-green-400 hover:text-black transition"
        >
          Play again!
        </Link>
        </section>
      </section>


    </main>
  )
}

export default VictoryPage