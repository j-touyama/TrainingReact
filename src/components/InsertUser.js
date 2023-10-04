import { useOrverRayShowDispatch, useCallApiTypeDispatchContext } from "../context/UserContext"

const InsertUser = () => {

  const setShow = useOrverRayShowDispatch()
  const setCallApiType = useCallApiTypeDispatchContext()
    const insertUser = () => {
      setShow(true)
      setCallApiType("insert")
    }
    return <p><button onClick={insertUser}>新規登録</button></p>
}

export default InsertUser