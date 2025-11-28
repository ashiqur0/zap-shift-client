import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import Services from "../pages/Services/Services";
import AboutUs from "../pages/AboutUs/AboutUs";
import Pricing from "../pages/Pricing/Pricing";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";

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
                Component: AboutUs
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
            }
        ]
    }
]);

export default router;