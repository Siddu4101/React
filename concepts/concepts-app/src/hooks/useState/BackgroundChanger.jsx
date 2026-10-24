import { useState } from "react"

function BackgrondChanger(){
    /*1. Via useState better approach */
    let [bgColor, setBgColor] = useState('violet')

     return <> <h1>UseState Example: This is a backround changer example</h1>
    <div className="text-white min-h-screen p-4" id="back" style={{backgroundColor: bgColor}}>
    <button className="bg-green-700 border-black border-2 rounded-xl p-2 m-2" onClick={()=>changeBg("green")}>Green</button>
    <button className="bg-red-700  border-black border-2 rounded-xl p-2 m-2 " onClick={()=>changeBg("red")}>Red</button>
    <button className="bg-blue-700  border-black border-2 rounded-xl p-2 m-2" onClick={()=>changeBg("blue")}>Blue</button>
    <button className="bg-black border-black border-2 rounded-xl p-2 m-2"  onClick={()=>changeBg("black")}>Black</button>
    <button className="bg-yellow-300  border-black border-2 rounded-xl p-2 m-2" onClick={()=>changeBg("yellow")}>Yellow</button>
    </div>
    </>

    function changeBg(color){
      setBgColor(color)  
    } 


    /*2.  Via normal document handling 
    return<>
    <h1>2. This is a backround changer example</h1>
    <div className="text-white min-h-screen p-4" id="back" style={{backgroundColor: 'violet'}}>
    <button className="bg-green-700 border-black border-2 rounded-xl p-2 m-2" onClick={()=>changeBg("green")}>Green</button>
    <button className="bg-red-700  border-black border-2 rounded-xl p-2 m-2 " onClick={()=>changeBg("red")}>Red</button>
    <button className="bg-blue-700  border-black border-2 rounded-xl p-2 m-2" onClick={()=>changeBg("blue")}>Blue</button>
    <button className="bg-black border-black border-2 rounded-xl p-2 m-2"  onClick={()=>changeBg("black")}>Black</button>
    <button className="bg-yellow-700  border-black border-2 rounded-xl p-2 m-2" onClick={()=>changeBg("yellow")}>Yellow</button>
    </div>
    </>

  function changeBg(color){
        document.getElementById("back").style.backgroundColor = color 
    } 
    */
}

export default BackgrondChanger