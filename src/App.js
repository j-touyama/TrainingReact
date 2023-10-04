import { useOrverRayShow, UserProvider } from "./context/UserContext"
import InsertUser from "./components/table/InsertUser"
import TargetCheckBox from "./components/TargetCheckBox"
import UserTable from "./components/table/UserTable"
import Modal from "./components/modal/Modal"
import "./App.css"

function App() {
  const show = useOrverRayShow()
  return (
    <div className="index">
      <UserProvider>
        {{show} && <Modal />}
        <h1>社員一覧</h1><hr/>
        <InsertUser />
        <TargetCheckBox />
        <UserTable/>
      </UserProvider>
    </div>
  );
}

export default App;
