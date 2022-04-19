import { Link } from 'react-router-dom'
import AvatarDisplay from "./avatardisplay"
import StatusDisplay from "./statusdisplay"
import PriorityDisplay from "./prioritydisplay"
import ProgressDisplay from "./progressdisplay"
import DeleteBlock from "./deleteblock"

const ticketCard = ({color, ticket}) => {
    return (
        <div className="ticket-card">
            {/* <link> */}
                <div className="ticket-color"></div>
                <h3>{ticket.title}</h3>
                <AvatarDisplay/>
                <StatusDisplay/>
                <PriorityDisplay/>
                <ProgressDisplay/>
            {/* </link> */}
            <DeleteBlock/>
        </div>
    )
}
export default ticketCard