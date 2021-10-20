import "./App.css";
import { useState } from "react";
import Navigation from "./component/navigation/navigation";
import Student from "./component/student/student";
import Header from "./component/header/header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditStudent from "./component/student/editStudent";
import AddStudent from "./component/student/addStudent";

function App() {
  const [page, setPage] = useState(window.location.pathname.slice(1));
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation page={page} setPage={setPage} />
        <div className="body">
          <Header page={page} />
          <div className="body__content">
            <Route
              path="/students"
              render={() => <Student setPage={setPage} />}
            />
            <Route path="/pets" render={() => <h1>Pets</h1>} />
            <Route path="/computers" render={() => <h1>Computers</h1>} />
            <Switch>
              <Route
                path="/students/add-a-new-student"
                component={AddStudent}
              />
              <Route path="/students/:id" component={EditStudent} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
