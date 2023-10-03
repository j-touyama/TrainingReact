import {UserTBody} from "./UserTBody"
import {usePullDown } from "../context/UserContext"

const UserInfo = () => {

    const checkbox = usePullDown()
    return (
        <div>
        {
          checkbox.map(type=>{
            if (type.dispFlg) {
              return (
                <>
                <h2>{type.name}</h2>
                <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>社員コード</th>
                    <th>姓　名</th>
                    <th>name</th>
                    <th>入社年月日</th>
                    <th>経歴</th>
                    <th>案件概要</th>
                    <th>編集</th>
                    <th>削除</th>
                  </tr>
                </thead>
                <UserTBody type={type}/>
              </table>
              </>
              )
            }
          })
        }
      </div>
    )
}
export default UserInfo