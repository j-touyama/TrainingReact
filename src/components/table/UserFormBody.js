import parse from 'html-react-parser';
import axios from "axios";

import {useOrverRayShowDispatch, useUsers, useTargetUserDispatchContext, useCallApiTypeDispatchContext } from "../../context/UserContext"

export const UserFormBody = ({type}) => {

    const users = useUsers()
    const setShow = useOrverRayShowDispatch()
    const setTarget = useTargetUserDispatchContext()
    const setCallApiType = useCallApiTypeDispatchContext()

    const getTargetUser = (e) => {
        const targetCode = e.target.value
        users.forEach(user => {
            if (user.staffCode === targetCode) {
                const newUser = {...user}
                setTarget(newUser)
            }
        });
        setShow(true)
        setCallApiType("update")
    }

    const deleteUser = (e) => {
        const staffCode = e.target.value
        const deleteUser = async () => {
          await axios.get('http://localhost:8080/employee/delete?staffCode=' + staffCode)
          .catch(error => alert("ユーザー情報の削除に失敗しました。"))
        }
        if (window.confirm("該当ユーザーを削除します。よろしいですか。")) {
            deleteUser();
        }
    }

    return (
        <tbody>
            {users?.filter(user => user.staffDepartment === type.value)
                .map((user, index)  => {
                    const projectType = user.projectType && parse('<span>' + user.projectType + '</span>')
                    return (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td onDoubleClick={()=>{console.log(user.staffCode)}}>{user.staffCode}</td>
                            <td>{user.lastName} {user.firstName}</td>
                            <td>{user.lastNameRomaji} {user.firstNameRomaji}</td>
                            <td>{user.joinedYear}</td>
                            <td>{user.newGladFlg ? "新卒" : "中途"}</td>
                            <td className="textArea">{projectType}</td>
                            <td><button value={user.staffCode} onClick={getTargetUser}>更新</button></td>
                            <td><button value={user.staffCode} onClick={deleteUser}>削除</button></td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}