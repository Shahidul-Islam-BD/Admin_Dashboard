import { createBrowserRouter } from "react-router-dom";
import UploadTheme from "../pages/Dashboard/Admin/UploadTheme/UploadTheme";
import Dashboard from "../pages/Dashboard/Dashboard";
import MainLayout from "../layouts/MainLayout";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Dashboard></Dashboard>
            },
            {
                path:'dashboard/admin/upload/theme',
                element:<UploadTheme></UploadTheme>
            }
        ]
    },
])

export default router;
