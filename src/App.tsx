import { useRoutes } from "react-router-dom";
import routes from './router'

import Home from "./page/home"
import Mine from "./page/mine"
import NotFound from "./page/notFount"

import './App.css'

function App() {

  const Route = useRoutes(routes)
  return (
    <div className="container">
      {Route}
    </div>
  )
}

export default App
