import logo from '../images/saturnicon.png'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    
    const navigate = useNavigate();

    return (
        <nav>
            <div className="logo-container">
                <img src={logo} alt="logo"/>
            </div>
            <div className='controls-container'>
                <div onClick={() => navigate('/ticket')}>＋</div>
                <div onClick={() => navigate('/')}>🖜</div>
            </div>

        </nav>
        
    )
}
export default Nav

// got to 27.50 in the video 
// onClick in the video simply doesn't work for me 