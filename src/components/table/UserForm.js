import React from "react"
import {FormBody} from "./FormBody"
import {usePullDown } from "../../context/UserContext"

const UserForm = () => {

    const checkboxes = usePullDown()
    const titles = ['No','社員コード','氏名','name','入社年月日','経歴','案件概要','更新','削除']

    return (
        <>
        {
          checkboxes.map(checkbox=>{
            if (checkbox.dispFlg) {
              return (
                <React.Fragment key={checkbox.key}>
                    <h2>{checkbox.name}</h2>
                    <table className="userTable">
                        <thead>
                            <tr>
                                {titles.map(title => <th key={title}>{title}</th>)}
                            </tr>
                        </thead>

                        <FormBody type={checkbox}/>

                    </table>
                </React.Fragment>
              )
            } else {
                return null
            }
          })
        }
      </>
    )
}
export default UserForm