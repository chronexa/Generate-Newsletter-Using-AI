import React, { Component, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Box } from "@mui/material";
import Newsletter from "./Newsletter";
// import { AuthProvider, useAuth } from "./AuthProvider";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

// const ProtectedRoute = ({ element, ...rest }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { isAuthenticated } = useAuth();
//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate('/login', { state: { from: location } });
//     }
//   }, [isAuthenticated, navigate]);

//   return isAuthenticated ? element : null;
// };

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //<AuthProvider>
        <Router>
          {/* <Navbar /> */}
          <Box sx={{ pt: '64px' }}>
          <Routes>
            {/* <Route path="/" element={<Home />} exact></Route> */}
            <Route path="/newsletter" element={<Newsletter />} />
          </Routes>
          </Box>
        </Router>
      //</AuthProvider>
    );
  }
}

const appDiv = document.getElementById("app");
const root = ReactDOM.createRoot(appDiv);
root.render(<App />);
