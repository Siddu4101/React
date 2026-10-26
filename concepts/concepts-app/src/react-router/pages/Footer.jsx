import {Link} from 'react-router'

export default function Footer(){
    return<>
   <div className="p-6 border-2 border-green-400 bg-purple-900 text-white mb-3 justify-between flex items-center">
    <h3>React router example</h3>

    <div>
      <Link to="https://google.com">Google</Link>{" | "}
      <Link to="https://github.com">Github</Link>{" | "}
      <Link to="https://instagram.com">Instagram</Link>{" | "}
      <Link to="https://code.visualstudio.com">VsCode</Link>
    </div>
  </div>
  </>
}