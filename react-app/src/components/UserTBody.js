import parse from 'html-react-parser';
import axios from "axios";

import {useUsers } from "../context/UserContext"

export const UserTBody = ({type}) => {

    const users = useUsers()

    const deleteUser = (e) => {
        const staffCode = e.target.value
        const deleteUser = async () => {
          await axios.get('http://localhost:8080/employee/delete?staffCode=' + staffCode)
        }
        deleteUser();
      }
    
      return (
        <tbody>
        {users?.filter(user => user.staffDepartment === type.value)
          .map((user, index)  => {
            const projectType = user.projectType && parse('<span>' + user.projectType + '</span>')
            return (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.staffCode}</td>
                <td>{user.lastName} {user.firstName}</td>
                <td>{user.lastNameRomaji} {user.firstNameRomaji}</td>
                <td>{user.joinedYear}</td>
                <td>{user.newGladFlg ? "新卒" : "中途"}</td>
                <td>{projectType}</td>
                <td>
                  <button value={user.staffCode} onClick={(e) => console.log(e.target.value)}>編集</button>
                </td>
                <td>
                  <button value={user.staffCode} onClick={deleteUser}>削除</button>
                </td>
              </tr>
            )
          })}
        </tbody>
    )
}