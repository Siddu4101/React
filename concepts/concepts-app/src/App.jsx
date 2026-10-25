import CurrencyConvertor from "./component-reusage/CurrencyConvertor"
import { PasswordGenerator } from "./hooks/simpleProject/PasswordGenerator"
import UseCallBackExample from "./hooks/useCallBack/UseCallBackExample"
import UseEffectExample from "./hooks/useEffect/UseEffectExample"
import { UseRefExample } from "./hooks/useRef/UseRefExample"
import BackgrondChanger from "./hooks/useState/BackgroundChanger"
import UseStateExample from "./hooks/useState/UseStateHook"

function App() {

  return (
    <>
    <h1 className="text-2xl font-bold">Hello</h1>
    <UseStateExample/><br /><br /><hr /><hr /><br/>
    <BackgrondChanger/><br /><br /><hr /><hr /><br/>
    <UseCallBackExample/> <br/><br/><hr /><hr /><br/>
    <UseEffectExample/> <br /><br /><hr /><hr /><br/>
    <UseRefExample/> <br /> <br /><hr /><hr /><br/>
    <PasswordGenerator/> <br /><br /><hr /><hr /><br/>
    <CurrencyConvertor/><hr /><hr /><br/>
    </>
  )
}

export default App
