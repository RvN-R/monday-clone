import logo from '../images/saturnicon.png'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSatellite } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faHomeUser } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    
    const navigate = useNavigate();

    return (
        <nav>
            <div className="logo-container">
                <div className='logo'><FontAwesomeIcon icon={faSatellite} size="3x"/></div>
            </div>
            <div className='controls-container'>
                <div className ="icon" onClick={() => navigate('/ticket')}><FontAwesomeIcon icon={faPlusCircle} size='lg'/></div>
                <div className ="icon" onClick={() => navigate('/')}><FontAwesomeIcon icon={faHomeUser} size='lg'/></div>
            </div>

        </nav>
        
    )
}
export default Nav

// got to 27.50 in the video 