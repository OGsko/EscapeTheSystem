import { useSearchParams } from "react-router-dom";

type RoomsProps = {
  hint: string;
};

const Hint = ({ hint }: RoomsProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    setSearchParams({ hint: "true" });
  };

  const hintValue = searchParams.get("hint");

  if (hintValue === "true") {
    return (
      <div className="flex flex-col gap-4">
        <p className="text-lg leading-8 text-lime-200/90">{hint}</p>
        <button
          className="inline-block w-fit rounded-lg border border-lime-600 bg-[#0f120f] px-5 py-3 font-semibold uppercase tracking-wide text-lime-300 transition hover:border-lime-500 hover:bg-lime-950/40"
          onClick={() => setSearchParams({})}
        >
          HIDE HINT
        </button>
      </div>
    );
  }

  if (hintValue === null) {
    return (
      <button
        className="inline-block w-fit rounded-lg border border-lime-600 bg-[#0f120f] px-5 py-3 font-semibold uppercase tracking-wide text-lime-300 transition hover:border-lime-500 hover:bg-lime-950/40"
        onClick={handleClick}
      >
        SHOW HINT
      </button>
    );
  }
};

export default Hint;
