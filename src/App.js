import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./fortawesome/index";
import AuthenticatedRoute from './components/AuthenticatedRoute'
import Login from './components/login';
import Logout from './components/Logout';
function App() {
  return (
    <div className="App ">
      <header className="App-header">
      <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={Login} />
                            <Route path="/login" component={Login} />
                            <AuthenticatedRoute path="/logout" component={Logout} />

                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>
      </header>
    </div>
  );
}

export default App;
