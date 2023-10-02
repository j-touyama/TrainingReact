import { useEffect, useState } from "react";
import axios from "axios";
import parse from 'html-react-parser';

function App() {
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
  const [ checkbox, setCheckbox ] = useState(initDispType)
  const [ users, setUsers ] = useState()
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get('http://localhost:8080/employee/index')
      setUsers(res.data);
    }
    getUser();
  }, []);

  const changeDispType = (e) => {
    const newCheckBoxes = checkbox.map(type => {
      const newType = {...type}
      if (newType.name === e.target.value) {
        newType.dispFlg = !type.dispFlg
      }
      return newType
    })
    setCheckbox(newCheckBoxes)
  }

  return (
    <>
    	<h1>社員一覧</h1>
      <div>
        {
          checkbox.map(type => {
            return (
              <label key={type.key}>
                <input type="checkbox" value={type.name} onChange={changeDispType} checked={type.dispFlg}/>{type.name}
              </label>
            )
          })
      }
      </div>
      <br />
      <div>
        {
          checkbox.map(type=>{
            if (type.dispFlg) {
              return (
                <>
                <h2>{type.name}</h2>
                <table style={{ borderCollapse: "collapse"}}>
                <thead>
                  <tr>
                    <th style={{border: "solid 1px", padding: "10px"}}>No</th>
                    <th style={{border: "solid 1px", padding: "10px"}}>姓　名</th>
                    <th style={{border: "solid 1px", padding: "10px"}}>入社年月日</th>
                    <th style={{border: "solid 1px", padding: "10px"}}>経歴</th>
                    <th style={{border: "solid 1px", padding: "10px"}}>案件概要</th>
                  </tr>
                </thead>
                <tbody>
                {users?.filter(user => user.staffDepartment === type.value)
                  .map((user, index)  => {
                    const projectType = user.projectType && parse('<span>' + user.projectType + '</span>')
                    return (
                      <tr key={user.id}>
                        <td style={{border: "solid 1px", padding: "10px"}}>{index + 1}</td>
                        <td style={{border: "solid 1px", padding: "10px"}}>{user.lastName} {user.firstName}</td>
                        <td style={{border: "solid 1px", padding: "10px"}}>{user.joinedYear}</td>
                        <td style={{border: "solid 1px", padding: "10px"}}>{user.newGladFlg ? "新卒" : "中途"}</td>
                        <td style={{border: "solid 1px", padding: "10px"}}>{projectType}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              </>
              )
            }
          })
        }
      </div>
    </>
  );
}

export default App;
