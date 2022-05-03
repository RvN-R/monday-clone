import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

const deleteBlock = ({ documentId }) => {

    const deleteTicket = async () => {
        const response = await axios.delete(`http://localhost:8000/tickets/${documentId}`)
        const success = response.status == 200
        if(success) window.location.reload()
    }
    return (
        <div className="delete-block">
            {/* <div className="delete-icon" onClick={deleteTicket}>x</div> */}
            <div className="delete-icon" onClick={deleteTicket}><FontAwesomeIcon icon={faX} /></div>
        </div>
    )
}
export default deleteBlock