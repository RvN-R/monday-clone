import { Link } from 'react-router-dom'
import AvatarDisplay from "./avatardisplay"
import StatusDisplay from "./statusdisplay"
import PriorityDisplay from "./prioritydisplay"
import ProgressDisplay from "./progressdisplay"
import DeleteBlock from "./deleteblock"

const ticketCard = ({color, ticket}) => {
    return (
        <div className="ticket-card">
            {/* <link to = {`/ticket/${ticket.documentId}`} id="link"> */}
            <div id='link'>
                <div className="ticket-color" style={{backgroundColor: color}}></div>
                <h3>{ticket.title}</h3>
                <AvatarDisplay ticket ={ticket}/>
                <StatusDisplay status={ticket.status}/>
                <PriorityDisplay priority={ticket.priority}/>
                <ProgressDisplay progress={ticket.progress}/>
            </div>
            {/* </link> */}
            <DeleteBlock/>
        </div>
    )
}

// 46:14 on the video link is preventing the page from rendering properly
// Got to  1:35:18
export default ticketCard