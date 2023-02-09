import { Route, Routes } from "react-router-dom";
import Container from "./container/Container";
import LogIn from "./pages/LogIn";
import Title from "./pages/Title";
import Layout from "./layout/Layout";
import ForgotPassword from "./pages/ForgotPassword";
import CreateAccount from "./pages/CreateAccount";

function App() {
  return (
    <div>
      <Layout>
        <Title />
        <Container>
          <Routes>
            <Route path="/" exact element={<LogIn />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Container>
      </Layout>
    </div>
  );
}

export default App;
