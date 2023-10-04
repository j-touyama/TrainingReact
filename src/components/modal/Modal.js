import "../../App.css"
import EditForm from "./ModalEditForm"
import { useOrverRayShow } from "../../context/UserContext"

const Modal = () => {
    const show = useOrverRayShow()
    if (show) {
        return (
            <div id="overlay">
                <div id="content">
                    <EditForm />
                </div>
            </div>
        );
        } else {
            return null;
        }
}

export default Modal