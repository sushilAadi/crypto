import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./screen/Dashboard/Dashboard.jsx";
import Cryptotable from "./screen/Cryptotable/Cryptotable.jsx";
import SideBar from "./components/Sidebar/SideBar.jsx";
import Transaction from "./screen/Transaction/transaction";
import Statistics from "./screen/Statistics/Statistics.jsx";
import Wallet from "./screen/Wallet/Wallet.jsx";
import News from "./screen/News/News.jsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/Exchange",
    element: <Cryptotable />,
  },

  {
    path: "/Transaction",
    element: <Transaction />,
  },
  {
    path: "/Wallet",
    element: <Wallet />,
  },
  {
    path: "/statistics",
    element: <Statistics />,
  },
  {
    path: "/News",
    element: <News />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <div className="d-flex  overflow-hidden w-100">
      <SideBar />
      <RouterProvider router={router} />
    </div>
    </QueryClientProvider>
  </React.StrictMode>
);
