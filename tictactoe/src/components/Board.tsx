import { useState } from "react"
import Cell from "./Cell"

const Board = () => {

    const [cross, setCross] = useState(true)

    return <div>
        <Cell cross={cross} setCross={setCross} />
        <Cell cross={cross} setCross={setCross}/>
        </div>
}
export default Board