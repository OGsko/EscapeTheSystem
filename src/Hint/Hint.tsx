import "../index.css"

import { useSearchParams } from "react-router-dom"



type RoomsProps = {
    hint: string
}

const Hint = ({hint}: RoomsProps) => {
    const [searchParams, setSearchParams] = useSearchParams()

    const handleClick = () => {
        setSearchParams({ hint: "true"})
    }

    const hintValue = searchParams.get("hint")

    if (hintValue === "true") {
        return (
            <div>
                <p className="text-green-300">{hint}</p>
                <button className="button" onClick={() => setSearchParams({})}>HIDE HINT</button>
            </div>
        )
    }

    if(hintValue === null) {
        return (
            <button className="button" onClick={handleClick}>SHOW HINT</button>

        )
    }
}

export default Hint