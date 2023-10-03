import {UserTBody} from "./UserTBody"
import {usePullDown } from "../context/UserContext"

const UserInfo = () => {

    const checkboxes = usePullDown()
    const titles = ['No','社員コード','姓　名','name','入社年月日','経歴','案件概要','編集','削除']

    return (
        <>
        {
          checkboxes.map(checkbox=>{
            if (checkbox.dispFlg) {
              return (
                <>
                    <h2>{checkbox.name}</h2>
                    <table>
                        <thead>
                        <tr>
                            {titles.map(title => <th key={title}>{title}</th>)}
                        </tr>
                        </thead>

                        <UserTBody type={checkbox}/>

                    </table>
                </>
              )
            } else {
                return ''
            }
          })
        }
      </>
    )
}
export default UserInfo