import { Route, Switch } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import AddEditTasks from "./pages/AddEditTasks";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/add-tasks">
          <AddEditTasks />
        </Route>
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
