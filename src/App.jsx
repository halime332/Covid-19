import React from 'react'
import {createBrowserRouter,  RouterProvider} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Layout from './components/layout';


//route'ları tanımladık
const router = createBrowserRouter([
  {
    path:"/", element:<Layout/>,
    children:[
        {path:"/", element:<Home/>},
        {path:"/detail/:code", element:<Detail/>},
  ],
},
]);

//RouterProvider ile router'ı uygulamaya dahil ettik
const App = () => {
    return (
    <RouterProvider router={router}/>
  );

};
export default App;