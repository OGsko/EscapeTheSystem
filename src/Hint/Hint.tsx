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
      <div>
        <p className="text-green-300">{hint}</p>
        <button
          className="inline-block rounded-lg border border-green-400 px-5 py-3 font-semibold hover:bg-green-400 hover:text-black transition"
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
        className="inline-block rounded-lg border border-green-400 px-5 py-3 font-semibold hover:bg-green-400 hover:text-black transition"
        onClick={handleClick}
      >
        SHOW HINT
      </button>
    );
  }
};

export default Hint;
