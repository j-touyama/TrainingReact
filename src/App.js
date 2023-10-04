import { useOrverRayShow, UserProvider } from "./context/UserContext"
import InsertBtn from "./components/InsertBtn"
import TargetCheckBox from "./components/TargetCheckBox"
import UserForm from "./components/table/UserForm"
import Modal from "./components/modal/Modal"
import "./App.css"

function App() {
  const show = useOrverRayShow()
  return (
    <div className="index">
      <UserProvider>
        {{show} && <Modal />}
        <h1>社員一覧</h1><hr/>
        <InsertBtn />
        <TargetCheckBox />
        <UserForm/>
      </UserProvider>
    </div>
  );
}

export default App;
