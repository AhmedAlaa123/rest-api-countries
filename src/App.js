import React from 'react'
import { Route,BrowserRouter,Redirect,Switch } from 'react-router-dom';
import './app.css'
import Header from './components/header/header'
import HomePage from './components/home-component/home';
import DetailsPage from './components/details-component/details';
import PageNotFound from './components/page-not-found/PageNotFound';
;

class  App extends React.Component {
  state= {
    showMenu:false
  }

  render()
  {
    return (
       <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path='/rest-api-countries/' render ={props=><HomePage data={props}/>}/>
            <Route exact path='/rest-api-countries/page-not-found' component={PageNotFound}/>
            <Route path='/rest-api-countries/:country' render ={props=><DetailsPage data={props}/>}/>
            <Redirect exact from='/' to ='/rest-api-countries/' />
            <Redirect to='/rest-api-countries/page-not-found/'/>
          </Switch>
       </BrowserRouter>
    );
  }
}

export default App;
