import "./App.css";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Compose from "./components/Compose";
import Storybook from "./components/Storybook";
import {
  createBrowserRouter,
Outlet,
} from "react-router-dom";
function App() {
  return (
    <>
     
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
}
const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    path: "/",
    element:<Body/>
  },{
    path: "about",
    element:<About/>
  },
    {
      path: "contact",
      element: <Contact />
      
    }, {
      path: "compose",
      element:<Compose/>
    
  },{
    path:"storybook",
    element:<Storybook/>
  }]
}])

export default router;
