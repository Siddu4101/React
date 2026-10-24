import { useState, useEffect, useCallback, useRef } from "react";

export function PasswordGenerator() {
    let [passLength, setPassLength] = useState(8)
    let[includeSpecialChar, updateIncludeSpecialChar] = useState(false)
    let[includeNumber, updateIncludeNumber] = useState(false)
    let [passVal, updatePassVal] = useState("")

    useEffect(()=>{
        generatePass()
    }, [includeSpecialChar, includeNumber, passLength])

    let copyPass = useRef(null)

    let generatePass = useCallback(() => {
        let chars = "abcdefghijklmnopqrstuvwxyz";
        let nums = "0123456789"
        let speChar = "!@#$%^&*()"
        let passSuperSet = chars;
        let generatedPass = ""
        if(includeNumber)
            passSuperSet += nums
        if(includeSpecialChar)
            passSuperSet += speChar

        for(let i =0; i<passLength; i++){
            generatedPass = generatedPass += passSuperSet[Math.floor(Math.random()*passSuperSet.length)]
        }
        
        updatePassVal(passVal = generatedPass)
        
    })

    function updatePassLenght(e){
       setPassLength(e.currentTarget.value)

    }

    function copyPassWordToClip(){
        copyPass.current.select()
        navigator.clipboard.writeText(copyPass.current.value)
    }

  return (
    <>
      <h1>Project: Password Generator</h1>
      <br />
      <label>
        <span>Password</span>
        <input
          type="text"
          readOnly
          ref={copyPass}
          value={passVal}
          className="border-black p-2 m-2 border-2"
          placeholder="Password Generator"
        ></input>
        <button className="p-2 m-2 border-2 bg-blue-400 shadow-2xl " onClick={copyPassWordToClip}>Copy</button>
        <br />
      </label>
      <label>
        <span>Include special char</span>
          <input id="pass" type="checkbox" className="m-3 p-3 h-5 w-5" onInput={()=> updateIncludeSpecialChar(prvVal => !prvVal)}></input>
      </label>
      <label>
        <span>Include Numbers</span>
          <input type="checkbox" className="m-3 p-3 h-5 w-5" onInput={()=>updateIncludeNumber(prvValue => !prvValue)}></input>
      </label><br />
      <label>
        <span>Number of char in Password {passLength}</span>
        <input type="range" min={8} max={100} className="m-3" onInput={updatePassLenght}/>
      </label>
    </>
  );
}
