import UseCallBackExample from "./hooks/useCallBack/UseCallBackExample"
import UseEffectExample from "./hooks/useEffect/UseEffectExample"
import { UseRefExample } from "./hooks/useRef/UseRefExample"
import BackgrondChanger from "./hooks/useState/BackgroundChanger"
import UseStateExample from "./hooks/useState/UseStateHook"

function App() {

  return (
    <>
    <h1 className="text-2xl font-bold">Hello</h1>
    <UseStateExample/><br /><br />
    <BackgrondChanger/><br /><br />
    <UseCallBackExample/> <br/><br/>
    <UseEffectExample/> <br /><br />
    <UseRefExample/>
    </>
  )
}

export default App
