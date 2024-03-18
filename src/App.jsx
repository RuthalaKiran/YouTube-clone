import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Pages/Homepage/Homepage'
import Channelpage from './Pages/Channelpage/Channelpage'
import Videospage from './Pages/Videospage/Videospage'
import Searchpage from './Pages/Searchpage/Searchpage'


function App() {
  return (
    <div className='dark:bg-gray-900 dark:text-white duration-200 bg-white'>
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Homepage/>} />
          <Route path='/video/:videoId'  element={<Videospage/>} />
          <Route path='/channel/:channelId'  element={<Channelpage/>} />
          <Route path='/search/:searchTerm'  element={<Searchpage/>} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
