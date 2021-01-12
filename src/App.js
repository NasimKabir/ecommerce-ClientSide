import './App.css';
import HeaderComponent from './common/HeaderComponent';
import FooterComponet from './common/FooterComponet';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

global.jQuery = require('jquery');
require('bootstrap');

function App() {
  return (
    <div className="App">
     
      <Router>
        <> 
        <HeaderComponent />
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/product/:id" component={ProductDetails} />
          </Switch>
          <FooterComponet />
        </>
      </Router>

      
    </div >
  );
}

export default App;
