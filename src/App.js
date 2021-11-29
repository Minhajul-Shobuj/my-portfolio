import './App.css';
import { BrowserRouter ,Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route path="/projects">
         <Projects></Projects>
       </Route>
       <Route></Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
