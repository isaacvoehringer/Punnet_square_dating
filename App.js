import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
// import PlaceIndex from './places/PlaceIndex'
// import PlaceDetails from './places/PlaceDetails'
// import Navigation from './Navigation'
import Error404 from './Error404'
// import NewPlaceForm from './places/NewPlaceForm'
// import EditPlaceForm from './places/EditPlaceForm'
import SignUpForm from './users/SignUpForm'
import LoginForm from './users/LoginForm'
// import CurrentUserProvider from './contexts/CurrentUser'

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
         <Route exact path="/Punnett_square" component={Punnett_square} />
          <Route path="/" component={Error404} />
        </Switch>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;