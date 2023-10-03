import { useForm } from 'react-hook-form';
import {useState} from "react"
import axios from "axios";

import {usePullDown } from "../context/UserContext"

const EditForm = ({show, setShow}) => {
    const initRadioButtons = [
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
    const checkboxes = usePullDown()
    const [radios, setRadio] = useState(initRadioButtons)

    const { register, handleSubmit, formState:{errors} } = useForm()

    const onSubmit = (data) => {
        const updateUser = async () => {
            await axios.post('http://localhost:8080/employee/insert',{
                staffCode: data.staffCode,
                lastName: data.lastName,
                firstName: data.firstName,
                lastNameRomaji: data.lastNameRomaji,
                firstNameRomaji: data.firstNameRomaji,
                staffDepartment: data.staffDepartment,
                projectType: data.projectType,
                joinedYear: data.joinedYear,
                newGladFlg: data.newGladFlg === '1' ? true : false
            }
                
            ).then(function (response) {
                console.log(response);
              })
          }
          updateUser();
          setShow(false)
      }
    const closeModal = () => {
        setShow(!show)
    }

    const changeRadio = () => {
        setRadio(radios.map(oldItem => {
            return {...oldItem, selectedFlg:!oldItem.selectedFlg};
      }))
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <table><tbody>
                    <tr>
                        <td id="">社員コード</td>
                        <td>
                            <input type="text" id="staffCode"
                                {...register('staffCode', {required:'入力が必須の項目です'})} />
                            {errors.staffCode?.message && <div>{errors.staffCode.message}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td id="">姓</td>
                        <td>
                            <input type="text" id="firstName"
                                {...register('firstName', {required:'入力が必須の項目です'})} />
                            {errors.firstName?.message && <div>{errors.firstName.message}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td id="">名</td>
                        <td>
                            <input type="text" id="lastName"
                                {...register('lastName', {required:'入力が必須の項目です'})} />
                            {errors.lastName?.message && <div>{errors.lastName.message}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td id="">姓 ローマ字</td>
                        <td>
                            <input type="text" id="firstNameRomaji" 
                                {...register('firstNameRomaji', {required:'入力が必須の項目です'})} />
                            {errors.firstNameRomaji?.message && <div>{errors.firstNameRomaji.message}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td id="">名 ローマ字</td>
                        <td>
                            <input type="text" id="lastNameRomaji" 
                                {...register('lastNameRomaji', {required:'入力が必須の項目です'})} />
                            {errors.lastNameRomaji?.message && <div>{errors.lastNameRomaji.message}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td id="">所属</td>
                        <td>
                            <select {...register('staffDepartment', {required:'選択が必須の項目です'})}>
                                {
                                    checkboxes.map(checkbox => {
                                        return (
                                        <option value={checkbox.value} key={checkbox.key}>{checkbox.name}</option>
                                        )
                                    })
                                }
                            </select>
                            {errors.staffDepartment?.message && <div>{errors.staffDepartment.message}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td id="">入社年月日</td>
                        <td>
                            <input type="text" id="joinedYear"
                                {...register('joinedYear', {required:'入力が必須の項目です'})} />
                            {errors.joinedYear?.message && <div>{errors.joinedYear.message}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td id="">経歴</td>
                        <td>
                        {
                            radios.map((radio) => {
                                const { id, label, selectedFlg, value} = radio;
                                return (
                                    <label key={id}>
                                        <input type="radio" value={value} id={id}
                                        {...(register("newGladFlg"))}
                                        name="newGladFlg"
                                        onChange={changeRadio}
                                        checked={selectedFlg}
                                        />
                                        {label}
                                    </label>
                                );
                            })
                        }
                        {errors.newGladFlg?.message && <div>{errors.newGladFlg.message}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td id="">案件概要／業務内容</td>
                        <td>
                            <textarea id="projectType" {...register('projectType')} />
                        </td>
                    </tr>
                </tbody></table>
                <button type="submit">更新</button><button onClick={closeModal}>Close</button>
            </form>
        </>
    )
}

export default EditForm