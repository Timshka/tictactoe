import { useState } from "react"
import './cell.css'

function Cell() {
    const [sign, setSign] = useState<string | null>(null)


    return (
        <div className="cell" onClick={() => setSign("X")}>
            { sign }
        </div>
    )
}
  
  export default Cell
  