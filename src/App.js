import { useOrverRayShow, UserProvider } from "./context/UserContext"
import InsertUser from "./components/InsertUser"
import TargetDisplay from "./components/TargetDisplay"
import UserInfo from "./components/UserInfo"
import Modal from "./components/Modal"
import "./App.css"

function App() {
  const show = useOrverRayShow()
  return (
    <UserProvider>
      {{show} && <Modal />}
      <h1>社員一覧</h1><hr/>
      <InsertUser />
      <TargetDisplay />
      <UserInfo/>
    </UserProvider>
  );
}

export default App;
