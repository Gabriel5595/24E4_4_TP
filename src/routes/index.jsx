import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"

import Home from '../views/Home'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import Dashboard from '../views/Dashboard'
import Settings from '../views/Settings'
import Form from '../views/Form'

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route index element={ <Home /> } />
            <Route path='signin' element={ <SignIn /> } />
            <Route path='signun' element={ <SignUp /> } />
            <Route path='dashboard' element={ <Dashboard /> } />
            <Route path='settings' element={ <Settings /> } />
            <Route path='form' element={ <Form /> } />
        </Route>
    )
);

export default function Index() {
    return <RouterProvider router={route}/>
}