import Container from "./container/Container";
import LogIn from "./pages/LogIn";
import Title from "./pages/Title";
import Layout from "./layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Title />
        <Container>
          <LogIn />
        </Container>
      </Layout>
    </div>
  );
}

export default App;
