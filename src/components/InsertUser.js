import Modal from "./Modal"
const InsertUser = ({show, setShow}) => {

    const insertUser = () => {
      setShow(true)
    }
    if(show){
      return <Modal show={show}  setShow={setShow}/>
    } else {
      return (
        <p><button onClick={insertUser}>新規登録</button></p>
      )
    }

}

export default InsertUser