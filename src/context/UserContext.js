import {createContext, useState, useContext, useEffect} from "react"
import axios from "axios";


const UsersContext = createContext();
const UsersDispatchContext = createContext();
const PullDownContext = createContext();
const PullDownDispatchContext = createContext();
const RadioInfoContext = createContext();
const RadioInfoDispatchContext = createContext();
const OvreRayShowContext = createContext();
const OvreRayShowDispatchContext = createContext();
const TargetUserContext = createContext();
const TargetUserDispatchContext = createContext();
const CallApiTypeContext = createContext();
const CallApiTypeDispatchContext = createContext();


export const UserProvider = ({children}) => {
    const [ checkbox, setCheckbox ] = useState(initDispType)
    const [ users, setUsers ] = useState()
    const [radios, setRadio] = useState(initRadioButtons)
    const [show, setShow] = useState(false)
    const [target, setTarget] = useState(initTargetUser)
    const [apiType, setApiType] = useState('')

    useEffect(() => {
        const getUser = async () => {
          await axios.get('http://localhost:8080/employee/index')
            .then(function (response) {
              setUsers(response.data.users);
            })
            .catch(error => alert("ユーザー情報の取得に失敗しました。"))
        }
        getUser();
      }, [users]);

      return (
        <UsersContext.Provider value={users}>
            <UsersDispatchContext.Provider value={setUsers}>
                <PullDownContext.Provider value={checkbox}>
                    <PullDownDispatchContext.Provider value={setCheckbox}>
                      <RadioInfoContext.Provider value={radios}>
                        <RadioInfoDispatchContext.Provider value={setRadio}>
                          <OvreRayShowContext.Provider value={show}>
                            <OvreRayShowDispatchContext.Provider value={setShow}>
                              <TargetUserContext.Provider value={target}>
                                <TargetUserDispatchContext.Provider value={setTarget}>
                                  <CallApiTypeContext.Provider value={apiType}>
                                    <CallApiTypeDispatchContext.Provider value={setApiType}>
                                      {children}
                                    </CallApiTypeDispatchContext.Provider>
                                  </CallApiTypeContext.Provider>            
                                </TargetUserDispatchContext.Provider>
                              </TargetUserContext.Provider>            
                            </OvreRayShowDispatchContext.Provider>
                          </OvreRayShowContext.Provider>            
                        </RadioInfoDispatchContext.Provider>
                      </RadioInfoContext.Provider>            
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

export const useRadioInfo = () => {
  return useContext(RadioInfoContext)
}
export const useRadioInfoDispatch = () => {
  return useContext(RadioInfoDispatchContext)
}

export const useOrverRayShow = () => {
  return useContext(OvreRayShowContext)
}
export const useOrverRayShowDispatch = () => {
  return useContext(OvreRayShowDispatchContext)
}
export const useTargetUserContext = () => {
  return useContext(TargetUserContext)
}
export const useTargetUserDispatchContext = () => {
  return useContext(TargetUserDispatchContext)
}

export const useCallApiTypeContext = () => {
  return useContext(CallApiTypeContext)
}
export const useCallApiTypeDispatchContext = () => {
  return useContext(CallApiTypeDispatchContext)
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
export const initRadioButtons = [
  {
      id:"newCareer",
      label:"新卒",
      value:1,
      selectedFlg:true,
  },
  {
      id:"midCareer",
      label:"中途",
      value:0,
      selectedFlg:false,
  }
]
export const initTargetUser = {
  id: '',
  staffCode: '',
  lastName: '',
  firstName: '',
  lastNameRomaji: '',
  firstNameRomaji: '',
  staffDepartment: '',
  projectType: '',
  joinedYear: '',
  newGladFlg: true,
}