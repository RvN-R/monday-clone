import axios from "axios"

const deleteBlock = ({ documentId }) => {

    const deleteTicket = async () => {
        const response = await axios.delete(`http://localhost:8000/tickets/${documentId}`)
        const success = response.status == 200
        if(success) window.location.reload()
    }
    return (
        <div className="delete-block">
            <div className="delete-icon" onClick={deleteTicket}>x</div>
        </div>
    )
}
export default deleteBlock