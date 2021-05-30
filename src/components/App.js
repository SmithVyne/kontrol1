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
          <Route path="/catalog" component={Catalog} />
          <Route path="/catalog/car/:id" component={Item} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
