import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import PokeFlex from './PokeFlex'
import PokeGrid from './PokeGrid'

const App = () => {

  return (
    <Routes>
      <Route path="pokeflex" element={<PokeFlex/>} />
      <Route path="pokegrid" element={<PokeGrid/>} />
      <Route path="/" element={<Home/>} />
    </Routes>
  )
}

export default App
