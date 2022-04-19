import TicketCard from '../components/ticketcard'

const Dashboard = () => {

    const tickets = [
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'NFT Safety 101 Video',
            owner: 'Richard Van Nairn',
            avatar: 'https://avatars.githubusercontent.com/u/76949692?s=400&u=afbcd8d2a0a037af17abd9ee1a67ea37dcadf4d6&v=4',
            status: 'done',
            priority: '5',
            progress: '40',
            description: 'Make a video to showcasing how to work with NFTs safely, including how to know if one is not genuine.',
            timestamp: '2022-02-11T07:36:17+0000'
        },
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'Build and Sell AI Model',
            owner: 'Richard Van Nairn',
            avatar: 'https://avatars.githubusercontent.com/u/76949692?s=400&u=afbcd8d2a0a037af17abd9ee1a67ea37dcadf4d6&v=4',
            status: 'working on it',
            priority: '2',
            progress: '70',
            description: 'Make a video about AI.',
            timestamp: '2022-02-13T07:36:17+0000'
        },
        {
            category: 'Q2 2022',
            color: 'blue',
            title: 'Build a Bot',
            owner: 'Richard Van Nairn',
            avatar: 'https://avatars.githubusercontent.com/u/76949692?s=400&u=afbcd8d2a0a037af17abd9ee1a67ea37dcadf4d6&v=4',
            status: 'working on it',
            priority: '3',
            progress: '10',
            description: 'Make a video about making a Bot.',
            timestamp: '2022-02-15T07:36:17+0000'
        }
    ]

    const uniqueCategories = [
        ...new Set(tickets?.map(({category}) => category))
    ]

    console.log(uniqueCategories)

    return (
        <div className="dashboard">
            <h1>My Projects</h1>
            <div className ="ticket-container">
                {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                    <div key ={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {tickets.filter(ticket => ticket.category === uniqueCategory)
                            .map((filteredTicket, _index) => (
                                <TicketCard
                                    id = {_index}
                                    color = {filteredTicket.color}
                                    ticket = {filteredTicket}
                                />
                            ))
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Dashboard