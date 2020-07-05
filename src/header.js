import React from 'react'


function Header() {
    

      
    return (
       <header style ={{background : "orange" ,backdropFilter:"fade", display:"flex"}} >
            <img   src ="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" style ={{width:200,height:150}}/>
           <span> <p style={{fontWeight : "bold", color:"white", fontSize :"50px" ,leftMargin :"20px", position: "absolute"}}>MemeGenerator </p></span>
            </header>
    )
}

export default Header

