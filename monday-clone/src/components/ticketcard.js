import { Link } from 'react-router-dom'
import AvatarDisplay from "./avatardisplay"
import StatusDisplay from "./statusdisplay"
import PriorityDisplay from "./prioritydisplay"
import ProgressDisplay from "./progressdisplay"
import DeleteBlock from "./deleteblock"

const ticketCard = ({color, ticket}) => {
    return (
        <div className="ticket-card">
            <Link to = {`/ticket/${ticket.documentId}`} id="link">
            <div id='link'>
                <div className="ticket-color" style={{backgroundColor: color}}></div>
                <h3>{ticket.title}</h3>
                <AvatarDisplay ticket ={ticket}/>
                <StatusDisplay status={ticket.status}/>
                <PriorityDisplay priority={ticket.priority}/>
                <ProgressDisplay progress={ticket.progress}/>
            </div>
            </Link>
            <DeleteBlock documentId={ticket.documentId}/>
        </div>
    )
}

// Got to 2:39:06 in the video
export default ticketCard