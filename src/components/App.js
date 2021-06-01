import '../styles/App.css';
import Nav from './Nav';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import Item from './pages/Item';

function App() {
  return (
    <div className="App">
      <Nav />
      <main >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/catalog" component={Catalog} />
          <Route path="/catalog/car/:name/:index" component={Item} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
      <footer>
        Copyright Smith {new Date().getFullYear()}. Все права защищены
      </footer>
    </div>
  );
}

export default App;
