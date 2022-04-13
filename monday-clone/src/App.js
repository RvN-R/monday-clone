import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/nav'
import Dashboard from './pages/dashboard'
import TicketPage from './pages/ticketpage'
const App = () => {
  return (
    <div className="app">
      <Nav/>
      <BrowserRouter>
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

// 16:49