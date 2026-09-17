import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './components/Layout';
// import Blog from './pages/Blog';
import Whoarewe from './pages/Whoarewe';
import Notfound from './components/Notfound';
import BlogdetailsComp from './components/BlogdetailsComp';
import BlogListView from './components/BlogListView';
import Light from './components/Light';
import Bortreh from './components/Bortreh';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog",
        element: <BlogdetailsComp/>,
      },
      {
        path: "who",
        element: <Whoarewe />,
      },
       {
        path: "view",
        element: <BlogdetailsComp/>,
      },
      {
        path: "list",
        element: <BlogListView/>,
      },
      {
        path: "light",
        element: <Light />,
      },
      {
        path: "bortreh",
        element: <Bortreh/>,
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);



function App() {
  return (
  <RouterProvider router={router} />
  );
}

export default App;