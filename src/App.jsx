import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { RoutedComponent } from './router/RoutedComponent'
import { Links } from './router/Links'

function App() {

  return (
    <>
      <BrowserRouter>
        <Links />
        <RoutedComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
