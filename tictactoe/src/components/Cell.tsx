import { useState } from "react"
import './cell.css'

const Cell = ({ cross, setCross }) => {

    const [sign, setSign] = useState<string | null>(null)

    const handleClick = () => {
        if (cross === true) {
            setSign("X")
        }
        else {
            setSign("O")
        }

        setCross((value) => !value)
    }


    return (
        <div className="cell" onClick={handleClick}>
            { sign }
        </div>
    )
}
  
  export default Cell
  