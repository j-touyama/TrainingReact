import React from "react"
import { useForm } from 'react-hook-form';
import axios from "axios";

import { usePullDown, useRadioInfo, useRadioInfoDispatch, useOrverRayShow, useOrverRayShowDispatch, useTargetUserContext, useTargetUserDispatchContext, useCallApiTypeContext } from "../context/UserContext"
import {initTargetUser} from "../context/UserContext"

const EditForm = () => {

    const checkboxes = usePullDown()
    const radios = useRadioInfo()
    const setRadio = useRadioInfoDispatch()
    const show = useOrverRayShow()
    const setShow = useOrverRayShowDispatch()
    const targetUser = useTargetUserContext()
    const setTargetUser = useTargetUserDispatchContext()
    const callApiType = useCallApiTypeContext()

    const { register, handleSubmit, formState:{errors} } = useForm()

    const onSubmit = (data) => {
        switch(callApiType){
            case "insert":
                const insertUser = async () => {
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
                    }).then(function (response) {
                        alert("ユーザーが登録されました。");
                    }).catch(error => alert("登録処理に失敗しました。"))
                }
                insertUser();
                setShow(false)
                break
            case "update":
                const updateUser = async () => {
                    await axios.post('http://localhost:8080/employee/update',{
                        id: data.id,
                        staffCode: data.staffCode,
                        lastName: data.lastName,
                        firstName: data.firstName,
                        lastNameRomaji: data.lastNameRomaji,
                        firstNameRomaji: data.firstNameRomaji,
                        staffDepartment: data.staffDepartment,
                        projectType: data.projectType,
                        joinedYear: data.joinedYear,
                        newGladFlg: data.newGladFlg === '1' ? true : false
                    }).then(function (response) {
                        alert("ユーザー情報が更新されました。");
                    }).catch(error => alert("更新処理に失敗しました。"))
                }
                updateUser();
                setShow(false)
                break
            default:
                setShow(false)
                break
        }



    }

    const changeRadio = () => {
        setRadio(radios.map(oldItem => {
            return {...oldItem, selectedFlg:!oldItem.selectedFlg};
        }))
    }

    const closeModel = () => {
        setShow(!show)
        setTargetUser(initTargetUser)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <table><tbody>
                    <tr>
                        <td id="">社員コード</td>
                        <td>
                            <input type="text" id="staffCode" defaultValue={targetUser.staffCode}
                                {...register('staffCode', {required:'入力が必須の項目です'})} />
                            {errors.staffCode?.message && <div>{errors.staffCode.message}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td id="">姓</td>
                        <td>
                            <input type="text" id="firstName" defaultValue={targetUser.firstName}
                                {...register('firstName', {required:'入力が必須の項目です'})} />
                            {errors.firstName?.message && <div>{errors.firstName.message}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td id="">名</td>
                        <td>
                            <input type="text" id="lastName" defaultValue={targetUser.lastName}
                                {...register('lastName', {required:'入力が必須の項目です'})} />
                            {errors.lastName?.message && <div>{errors.lastName.message}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td id="">姓 ローマ字</td>
                        <td>
                            <input type="text" id="firstNameRomaji" defaultValue={targetUser.firstNameRomaji}
                                {...register('firstNameRomaji', {required:'入力が必須の項目です'})} />
                            {errors.firstNameRomaji?.message && <div>{errors.firstNameRomaji.message}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td id="">名 ローマ字</td>
                        <td>
                            <input type="text" id="lastNameRomaji" defaultValue={targetUser.lastNameRomaji}
                                {...register('lastNameRomaji', {required:'入力が必須の項目です'})} />
                            {errors.lastNameRomaji?.message && <div>{errors.lastNameRomaji.message}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td id="">所属</td>
                        <td>
                            <select {...register('staffDepartment', {required:'選択が必須の項目です'})} defaultValue={targetUser.staffDepartment}>
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
                            <input type="text" id="joinedYear" defaultValue={targetUser.joinedYear}
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
                                        checked={targetUser.newGladFlg===selectedFlg}
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
                            <textarea id="projectType" {...register('projectType')}
                             defaultValue={targetUser.projectType === null ? '' : String(targetUser.projectType).replaceAll('<br />', '\n')} />
                        </td>
                    </tr>
                </tbody></table>
                <input type="hidden" value={targetUser.id} {...register('id')}/>
                <button type="submit">更新</button>
                <button type="button" onClick={closeModel}>Close</button>
            </form>
        </>
    )
}

export default EditForm