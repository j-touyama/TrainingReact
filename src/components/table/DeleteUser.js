const DeleteUser = ({staffCode, deleteUser}) => {

    return <button value={staffCode} onClick={deleteUser}>削除</button>
}

export default DeleteUser