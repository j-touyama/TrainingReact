import {createContext, useState, useContext, useEffect} from "react"
import axios from "axios";


const UsersContext = createContext();
const UsersDispatchContext = createContext();
const PullDownContext = createContext();
const PullDownDispatchContext = createContext();


export const UserProvider = ({children}) => {
    const [ checkbox, setCheckbox ] = useState(initDispType)
    const [ users, setUsers ] = useState()

    useEffect(() => {
        const getUser = async () => {
          const res = await axios.get('http://localhost:8080/employee/index')
          setUsers(res.data);
        }
        getUser();
      }, [users]);

      return (
        <UsersContext.Provider value={users}>
            <UsersDispatchContext.Provider value={setUsers}>
                <PullDownContext.Provider value={checkbox}>
                    <PullDownDispatchContext.Provider value={setCheckbox}>
                        {children}
                    </PullDownDispatchContext.Provider>
                </PullDownContext.Provider>            
            </UsersDispatchContext.Provider>
        </UsersContext.Provider>
    )
}
export const useUsers = () => {
    return useContext(UsersContext)
}
export const useUsersDispatch = () => {
    return useContext(UsersDispatchContext)
}

export const usePullDown = () => {
    return useContext(PullDownContext)
}
export const usePullDownDispatch = () => {
    return useContext(PullDownDispatchContext)
}

const initDispType = [
    {
      name:"エンジニア",
      key:"engineer",
      value:"0001",
      dispFlg:true
    },
    {
      name:"営業",
      key:"sales",
      value:"0002",
      dispFlg:true
    },
    {
      name:"コーポレート",
      key:"corporate",
      value:"0003",
      dispFlg:true
    }
  ]