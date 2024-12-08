import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"

import Home from '../views/Home'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import Dashboard from '../views/Dashboard'
import Settings from '../views/Settings'
import Form from '../views/Form'
import Protected from "./protected"
import { isAuthenticated, handleVerificationProtected } from '../services/authentication'

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route element={Protected}>
                <Route index element={ <Home /> } loader={() => handleVerificationProtected()}/>
                <Route path='dashboard' element={ <Dashboard /> } loader={() => handleVerificationProtected()}/>
                <Route path='settings' element={ <Settings /> } loader={() => handleVerificationProtected()}/>
                <Route path='form' element={ <Form /> } loader={() => handleVerificationProtected()}/>
            </Route>
            <Route path='signin' element={ <SignIn /> } loader={() => isAuthenticated()}/>
            <Route path='signup' element={ <SignUp /> } loader={() => isAuthenticated()}/>
        </Route>
    )
);

export default function Index() {
    return <RouterProvider router={route}/>
}