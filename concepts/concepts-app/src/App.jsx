import UseCallBackExample from "./hooks/useCallBack/UseCallBackExample"
import BackgrondChanger from "./hooks/useState/BackgroundChanger"
import UseStateExample from "./hooks/useState/UseStateHook"

function App() {

  return (
    <>
    <h1 className="text-2xl font-bold">Hello</h1>
    <UseStateExample/><br /><br />
    <BackgrondChanger/><br /><br />
    <UseCallBackExample/>
    </>
  )
}

export default App
