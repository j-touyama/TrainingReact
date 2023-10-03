import {useState} from "react"

import {UserProvider} from "./context/UserContext"
import InsertUser from "./components/InsertUser"
import TargetDisplay from "./components/TargetDisplay"
import UserInfo from "./components/UserInfo"
import EditForm from "./components/EditForm"
import "./App.css"

function App() {
  const [show, setShow] = useState(false)
  return (
    <UserProvider>
      <h1>社員一覧</h1><hr/>
      <InsertUser show={show}  setShow={setShow}/>
      <TargetDisplay  />
      <UserInfo/>
    </UserProvider>
  );
}

export default App;
