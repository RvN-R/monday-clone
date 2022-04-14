import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './components/nav'
import Dashboard from './pages/dashboard'
import TicketPage from './pages/ticketpage'
const App = () => {
  return (
    <div className="app">
      
      
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/ticket' element={<TicketPage/>}/>
          <Route path='/ticket/:id' element={<TicketPage editMode={true}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

// 23.20