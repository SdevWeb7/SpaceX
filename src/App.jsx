import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Destination from "./pages/Destination.jsx";
import Crew from "./pages/Crew.jsx";
import Technology from "./pages/Technology.jsx";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route path={'/'} element={<Home />} />
            <Route path={'/destination'} element={<Destination />} />
            <Route path={'/crew'} element={<Crew />} />
            <Route path={'/technology'} element={<Technology />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
