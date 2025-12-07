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
import SendParcel from "../pages/Private/SendParcel/SendParcel";
import DashBoardLayout from "../layout/DashboardLayout";
import MyParcels from "../pages/Dashboard/My-Parcels/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess";
import PaymentCanceled from "../pages/Dashboard/Payment/PaymentCanceled";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import Loading from "../components/loading/Loading";
import ApproveRiders from "../pages/Dashboard/Approve-Riders/ApproveRiders";
import UsersManagement from "../pages/Dashboard/Users-Management/UsersManagement";
import Forbidden from "../components/Forbidden/Forbidden";
import AdminRoute from "./AdminRoute";
import AssignRiders from "../pages/Dashboard/Assign-Riders/AssignRiders";
import AssignedDeliveries from "../pages/Dashboard/Assign-Deliveries/AssignedDeliveries";
import RiderRoute from "./RiderRoute";
import DashboardHome from "../pages/Dashboard/Dashboard-Home/DashboardHome";
import UserRoute from "./UserRoute";
import CompletedDeliveries from "../pages/Dashboard/Completed-Deliveries/CompletedDeliveries";
import ParcelTrack from "../pages/Root/Parcel-Track/ParcelTrack";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <PageNotFound />,
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
                loader: () => fetch('/service_centers.json'),
                hydrateFallbackElement: <Loading />
            },
            {
                path: '/aboutUs',
                Component: AboutUs,
                loader: () => fetch('/aboutus.json'),
                hydrateFallbackElement: <Loading />
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
                path: '/parcel-track/:trackingId',
                Component: ParcelTrack
            },
            {
                path: '/rider',
                element: <PrivateRoute>
                    <Rider />
                </PrivateRoute>,
                loader: () => fetch('/service_centers.json').then(res => res.json()),
                hydrateFallbackElement: <Loading />
            },
            {
                path: '/send_parcel',
                element: <PrivateRoute>
                    <SendParcel />
                </PrivateRoute>,
                loader: () => fetch('/service_centers.json'),
                hydrateFallbackElement: <Loading />
            },
            {
                path: '/forbidden',
                Component: <Forbidden />
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
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashBoardLayout></DashBoardLayout>
        </PrivateRoute>,
        children: [

            // common route
            {
                path: 'dashboard-home',
                Component: DashboardHome
            },

            // user only route
            {
                path: 'my-parcels',
                element: <UserRoute><MyParcels /></UserRoute>
            },
            {
                path: 'payment/:parcelId',
                element: <UserRoute><Payment /></UserRoute>
            },
            {
                path: 'payment-success',
                element: <UserRoute><PaymentSuccess /></UserRoute>
            },
            {
                path: 'payment-cancelled',
                element: <UserRoute><PaymentCanceled /></UserRoute>
            },
            {
                path: 'payment-history',
                element: <UserRoute><PaymentHistory /></UserRoute>
            },

            // admin only route
            {
                path: 'approve-riders',
                element: <AdminRoute><ApproveRiders /></AdminRoute>
            },
            {
                path: 'users-management',
                element: <AdminRoute><UsersManagement /></AdminRoute>
            },
            {
                path: 'assign-riders',
                element: <AdminRoute><AssignRiders /></AdminRoute>
            },

            // rider only route
            {
                path: 'assigned-deliveries',
                element: <RiderRoute><AssignedDeliveries /></RiderRoute>
            },
            {
                path: 'completed-deliveries',
                element: <RiderRoute><CompletedDeliveries /></RiderRoute>
            }
        ]
    }
]);

export default router;