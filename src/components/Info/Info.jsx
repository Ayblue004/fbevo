import './Info.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {AiFillLeftSquare} from 'react-icons/ai'
import React, {useState} from "react"
import { IconContext } from 'react-icons'


const Info=()=>{
    const [display,setDisplay] = useState("none")
    return(
        <>
                <IconContext.Provider value={{className:"open"}}>
                    <AiFillLeftSquare onClick={()=>setDisplay("block")}/>
                </IconContext.Provider>
            <div id="side-nav" style={{"display":`${display}`}}>
                <IconContext.Provider value={{className:"close"}}>
                    <AiOutlineCloseCircle onClick={()=>setDisplay("none")}/>
                </IconContext.Provider>
            </div>
        </>
    )
}

export default Info