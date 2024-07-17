import { createBrowserRouter  } from "react-router-dom";

import Login from "../Pages/auth/Login/Login";
import Actives from "../Pages/Catalog/Actives/Actives";
import Location from "../Pages/Catalog/Locations/Location";
import ProductType from "../Pages/Catalog/ProductType/ProducType";
import Providers from "../Pages/Catalog/Providers/Providers";
import CustomerType from './../Pages/Catalog/CustomerType/CustomerType';
import Users from "../Pages/Security/Users/Users";
import Roles from "../Pages/Security/Roles/Roles";
import Access from "../Pages/Security/Access/Access";
import Main from "../Layout/Main";
import App from "../App";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/dashboard",
        element: <Main />,
        children: [
            {
                path: "catalog", 
                children: [
                    {
                        index: true, // Esta es la ruta por defecto
                        path: "actives",
                        element: <Actives />,
                    },
                    {
                        path: "location",
                        element: <Location />,
                    },
                    {
                        path: "productType",
                        element: <ProductType />,
                    },
                    {
                        path: "providers",
                        element: <Providers />,
                    },
                    {
                        path: "customerType",
                        element: <CustomerType />
                    }
                ]
            },
            {
                path: "security",
                children: [
                    {
                        path: "users",
                        element: <Users />
                    },
                    {
                        path: "roles",
                        element: <Roles />
                    },
                    {
                        path: "access",
                        element: <Access />
                    }
                ]
            }
        ]
    },
    {
        path: "/login",
        element: <Login />,
    }
], );
