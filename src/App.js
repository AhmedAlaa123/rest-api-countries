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
            <Route exact path='/countries-rest/' render ={props=><HomePage data={props}/>}/>
            <Route exact path='/countries-rest/page-not-found' component={PageNotFound}/>
            <Route path='/countries-rest/:country' render ={props=><DetailsPage data={props}/>}/>
            <Redirect exact from='/' to ='/countries-rest/' />
            <Redirect to='/countries-rest/page-not-found/'/>
          </Switch>
       </BrowserRouter>
    );
  }
}

export default App;
