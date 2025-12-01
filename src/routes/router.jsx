import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Root/Coverage/Coverage";
import Services from "../pages/Root/Services/Services";
import AboutUs from "../pages/Root/AboutUs/AboutUs";
import Pricing from "../pages/Root/Pricing/Pricing";
import Blog from "../pages/Root/Blog/Blog";
import Contact from "../pages/Root/Contact/Contact";
import PageNotFound from "../pages/Error/PageNotFound";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Private/Rider/Rider";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/services',
                Component: Services
            },
            {
                path: '/coverage',
                Component: Coverage,
                loader: () => fetch('/service_centers.json')
            },
            {
                path: '/aboutUs',
                Component: AboutUs,
                loader: () => fetch('/aboutus.json')
            },
            {
                path: '/pricing',
                Component: Pricing
            },
            {
                path: '/blog',
                Component: Blog
            },
            {
                path: '/contact',
                Component: Contact
            },
            {
                path: '/rider',
                element: <PrivateRoute>
                    <Rider />
                </PrivateRoute> 
            },
            {
                path: '/*',
                Component: PageNotFound
            }
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    }
]);

export default router;