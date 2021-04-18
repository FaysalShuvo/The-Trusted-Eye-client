import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AddService from "./components/Dashboard/AddService/AddService/AddService";
import { Button } from "react-bootstrap";
import AddAdmin from "./components/Dashboard/AddAdmin/AddAdmin";
import Book from "./components/Dashboard/Book/Book";
import AddComment from "./components/Dashboard/AddComment/AddComment";
import BookingsList from "./components/Dashboard/BookingsList/BookingsList";
import LogIn from "./components/LogIn/LogIn";
import { createContext, useState } from "react";
import OrderList from "./components/Dashboard/OrderList/OrderList";
import ManageService from "./components/Dashboard/ManageService/ManageService";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>

          <Route exact path="/dashboard/bookings">
            <div className="text-center">
              <h1>What Problem Do you want to solve ?</h1>
              <Button as={Link} to="/" className="btn-danger">
                Home
              </Button>
            </div>
          </Route>
          <PrivateRoute exact path="/dashboard/bookings/:id">
            <Book />
          </PrivateRoute>
          <Route path="/dashboard/add-comment">
            <AddComment />
          </Route>
          <PrivateRoute path="/dashboard/bookings-list">
            <BookingsList />
          </PrivateRoute>
          <Route path="/dashboard/order-list">
            <OrderList />
          </Route>
          <Route path="/dashboard/all-service">
            <ManageService />
          </Route>
          <Route path="/dashboard/add-service">
            <AddService />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard/add-admin">
            <AddAdmin />
          </Route>
          <Route path="*">
            <div className="text-center">
              <h1>Wrong Url! </h1>
              <Button as={Link} to="/" className="btn-danger">
                Home
              </Button>
            </div>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
