import logo from '../images/saturnicon.png'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    
    const navigate = useNavigate();

    return (
        <nav>
            <div className="logo-container">
                <img src={logo} alt="logo" className='logo'/>
            </div>
            <div className='controls-container'>
                <div className ="icon" onClick={() => navigate('/ticket')}>＋</div>
                <div className ="icon" onClick={() => navigate('/')}>My Projects</div>
            </div>

        </nav>
        
    )
}
export default Nav

// got to 27.50 in the video 