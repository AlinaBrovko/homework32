import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./modules/common/components/Navigation/Navigation";
import NotFound from "./modules/common/components/NotFound";
import UsersModule from "./modules/users/UsersModule";
import "./App.css";
import Container from "@mui/material/Container";

function App() {
  return (
    <Container
      sx={{
        pt: 8,
        bgcolor: "background.paper",
        height: "100%",
        overflow: "scroll",
      }}
    >
      <Router>
        <Navigation />
        <Routes>
          <Route path="" element={<h3>Home work #32</h3>} />
          <Route path="users/*" element={<UsersModule />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
