import './App.css';
import HeaderComponent from './common/HeaderComponent';
import FooterComponet from './common/FooterComponet';
import MainContent from './common/MainContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
global.jQuery = require('jquery');
require('bootstrap');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponent />
        <div className="row">
          <MainContent />

        </div>
        <FooterComponet />
      </header>
    </div>
  );
}

export default App;
