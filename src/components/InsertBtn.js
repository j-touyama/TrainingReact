import { useOrverRayShowDispatch, useCallApiTypeDispatchContext } from "../context/UserContext"
import "../App.css"

const InsertBtn = () => {

  const setShow = useOrverRayShowDispatch()
  const setCallApiType = useCallApiTypeDispatchContext()
    const insertUser = () => {
      setShow(true)
      setCallApiType("insert")
    }
    return <p className="insertBtn"><button onClick={insertUser}>新規登録</button></p>
}

export default InsertBtn