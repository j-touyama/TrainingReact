import {UserProvider} from "./context/UserContext"
import InsertUser from "./components/InsertUser"
import TargetDisplay from "./components/TargetDisplay"
import UserInfo from "./components/UserInfo"
import "./App.css"

function App() {
  return (
    <UserProvider>
        <h1>社員一覧</h1><hr/>
        <InsertUser />
        <TargetDisplay  />
        <UserInfo/>
      </UserProvider>
  );
}

export default App;
