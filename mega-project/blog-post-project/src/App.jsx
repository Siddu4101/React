import './App.css'
import {conf} from './config/conf'

function App() {

console.log(import.meta.env.VITE_APPWRITE_PROJECT_URI)
console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID)
console.log(import.meta.env.VITE_APPWRITE_DATABASE_ID)
console.log(import.meta.env.VITE_APPWRITE_BUCKET_ID)
  return (
    <>
      Welcome to my {conf.projectUri}
    </>
  )
}

export default App
