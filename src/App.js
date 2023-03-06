
import {Route, Routes} from "react-router-dom"
import NavBar from "./components/Navbar";
import About from "./pages/About";
import Work from "./pages/Work.js";
import Notes from "./pages/Notes.js";

function App(){

    return(
        <>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<About/>}></Route>
            <Route path="/Work" element={<Work/>}></Route>
            <Route path="/Notes" element={<Notes/>}></Route>
        </Routes>
        </>
    )

}

export default App;