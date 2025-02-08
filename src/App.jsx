// import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from 'react-router-dom';

// import Layout from './components/Layout/Layout'; 
// import Navbar from './components/Navbar/Navbar';
// import NotFound from './components/NotFound/NotFound';
// import Register from './components/Register/Register';
// import Login from './Components/Login/Login';
// import { RouterProvider } from 'react-router-dom';



//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="register" element={<Register />} />
//           <Route path="login" element={<Login />} />
//           <Route path="*" element={<NotFound />} />
//         </Route>
//       </Routes>
//     </Router>

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout/Layout';
// import Navbar from './components/Navbar/Navbar';
// import NotFound from './components/NotFound/NotFound';
// import Register from './components/Register/Register';
// import Login from './Components/Login/Login';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Layout />} />
//         <Route path="register" element={<Register />} />
//         <Route path="login" element={<Login />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// }

// export default function App();

// import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from 'react-router-dom';
// import Layout from './components/Layout/Layout';
// import Navbar from './components/Navbar/Navbar';
// import NotFound from './components/NotFound/NotFound';
// import Register from './components/Register/Register';
// import Login from './Components/Login/Login';
// import { RouterProvider } from 'react-router-dom';

// const router = createBrowserRouter

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Layout />} />
//         <Route path="register" element={<Register />} />
//         <Route path="login" element={<Login />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// }

// export default function App(){
// return(
// <>
// <RouterProvider router = {router}/>

// </>


// )

// }
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout/Layout';
// import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: '',
    element:   <Layout />,children:[{
      path: '/register',
      element: <Register />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    }, {
      path: '*',
      element: <NotFound />,
    },]
  },
  
 
]);


export default function App() {
  return <RouterProvider router={router} />;
}