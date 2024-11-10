import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"

import Home from '../views/Home'
import AboutUs from '../views/AboutUs'

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route index element={ <Home /> } />
            <Route path='aboutus' element={ <AboutUs /> } />
        </Route>
    )
);

export default function Index() {
    return <RouterProvider router={route}/>
}