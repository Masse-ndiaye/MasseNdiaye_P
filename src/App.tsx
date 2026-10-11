import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContactPage'
import ProjetPage from './Pages/ProjetPage'
import CompetencesPage from './Pages/CompetencesPage'
import AproposPage from './Pages/AproposPage'
import Navbar from './composants/Navbar'

function App() {
  return(
    <section className=''>
        <Navbar/> 
      <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/apropos' element={<AproposPage/>}/>
    <Route path='/competences' element={<CompetencesPage/>}/>
    <Route path='/projet' element={<ProjetPage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </section>

  )
}
export default App
