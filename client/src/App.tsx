// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Homepage } from './Homepage';
import Header from './Header';


const router = createBrowserRouter([
  {
    Component: Header, children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: 'user',
        children: [
          {
            path: 'profile',
            element: <div>Profile</div>
          },
          {
            path: 'settings',
            element: <div>Settings</div>
          }
        ]
      }

    ]
  },

])

const App: React.FC = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default App
