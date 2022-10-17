import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [darkmode, setdarkMode]=React.useState(false)
    function togglemodes(){
    setdarkMode(prevMode => !prevMode)
}
    return (
        <div className="container">
            <Navbar handletogglemodes={togglemodes}/>
            <Main darkMode={darkmode}/>
        </div>
    )
}