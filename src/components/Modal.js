import "../App.css"
import EditForm from "./EditForm"

const Modal = ({show, setShow}) => {
    if (show) {
        return (
            <div id="overlay">
                <div id="content">
                    <EditForm show={show} setShow={setShow}/>
                </div>
            </div>
        );
        } else {
            return null;
        }
}

export default Modal