import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/Home-Page"
import SinglePage from "./pages/Single-Page"
import EditPage from "./pages/Edit-Page"
import CreatePage from "./pages/Create-Page"



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<HomePage/>} />
      <Route path="/single-page" element= {<SinglePage/>} />
      <Route path="/create-page" element= {<CreatePage/>} />
      <Route path="/edit-page" element= {<EditPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
