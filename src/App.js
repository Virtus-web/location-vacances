import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyle from './utils/styles/GlobalStyle'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Location from './pages/Location'
import Error from './pages/Error'

function App() {
    return (
        <BrowserRouter className="App">
        <GlobalStyle />
            <Header />
            <Switch>
                <Route exact path="/location-vacances" component={Home} />
                <Route exact path="/location/:id" render={(props) => <Location {...props} />} />
                <Route exact path="/about" component={About} />
                <Route path="*" component={Error} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default App;
