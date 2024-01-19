import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../components/Home";
import Navigation from "../components/Navigation"; // Assurez-vous que le chemin est correct
import Restaurant from "../components/Restaurant";
import User from "../components/User";

const routes = [
  {
    path: '/',
    name: "Home",
    component: Home
  },
  {
    path: '/restaurant',
    name: "Restaurant",
    component: Restaurant
  },  
  {
    path: '/user',
    name: "User",
    component: User
  },
];

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRouter;
