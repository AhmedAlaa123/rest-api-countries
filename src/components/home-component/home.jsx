import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addCountryAction, saveCountriesAction } from '../../actions/action-creator';
import './home.css'
class HomePage extends Component {
    state = { 
        country:'',
        showMenu:false,
        countries:[],
        loading:true,
     }
     handelToggelMenuClick=e=>{
        this.setState({showMenu:!this.state.showMenu})
      }
     handelSearch=e=>{
        //preventing reloding the page 
        e.preventDefault();
     }
     handelTextChange=e=>{
         
        const text=e.target.value;
        if(text==='')
        {
            this.setState({countries:this.props.savedCountries})
            return
        }
        // filtering countries that start with the input
        const countriesList=this.props.savedCountries.filter(country=>country.name.toLowerCase().startsWith(text.toLocaleLowerCase()));
        // setting the state countriesList
        this.setState({countries:countriesList})
     }

     // start component life cycle
 async componentDidMount(){
      
     await this.getData('https://restcountries.eu/rest/v2/all')
     this.props.saveCountries(this.state.countries) //saving Data in redux store
    
    }

    // this method used to get countries from passed url
    getData= async url=>{
        await  axios.get(url).then(response=>{
            // check of response status ===200 is mean data is found !
            if(response.status===200)
            {
                
                 // setting the state with returned countries
                 this.setState({countries:response.data,loading:false})
            }
        }).catch(er=>{ // catching the error
            this.setState({loading:false})
        })
    }
    // this method used to handel card click and go to details page
    goToDetailsPage=(country)=>{
        this.props.AddCountry(country); // add country to the store redux
        this.props.data.history.replace(`/countries-rest/${country.name}`) 
    }
    // this method used to filter countries using region or continent
    handelFilterUsingRegion=event=>{
        
        const continentName=event.target.textContent
        // construct savedcountries prop
        const {savedCountries}=this.props
        if(continentName.toLocaleLowerCase()==='all')
        {
            this.setState({countries:savedCountries})
            return
        }
        // filtering countries
        const countriesList=savedCountries.filter(country=>country.region.toLowerCase()===continentName.toLocaleLowerCase())
        this.setState({countries:countriesList})
        
    }
    render() { 
       
        // counstruct darkMode prop
        const {darkMode}=this.props
        return ( 
            <main >
            <div className='container'>
                {
                    this.state.loading?<div className='overlay-loading'>
                        <div className='buble-container'><span key='4' className='buble'></span> <span key='1' className='buble'></span> <span key='2' className='buble'></span> <span key='3' className='buble'></span></div>
                        </div>:''
                }
                <div className="row justify-content-between">
                    <form onSubmit={this.handelSearch} className='mb-4'>
                        <input className='form-control' id='country' onChange={this.handelTextChange} type='text' placeholder='Search for Country ...'  />
                        <label htmlFor="country" ><i className='fa fa-search'></i></label>
                    </form>
                    <div className="dropdown ml-auto" >
                        <button onClick={this.handelToggelMenuClick} className="btn  dropdown-toggle border-0" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:`${darkMode?'hsl(209, 23%, 22%)':'hsl(0, 0%, 100%)'}`,color:`${darkMode?'hsl(0, 0%, 100%)':'hsl(200, 15%, 8%)'}`}}>
                            Filter By Region
                        </button>
                        <ul className={`dropdown-menu  ${this.state.showMenu?'active':''}`} aria-labelledby="dropdownMenu2"  >
                            <li className="dropdown-item" onClick={this.handelFilterUsingRegion} >All</li>
                            <li className="dropdown-item" onClick={this.handelFilterUsingRegion} >Africa</li>
                            <li className="dropdown-item" onClick={this.handelFilterUsingRegion} >Americas</li>
                            <li className="dropdown-item" onClick={this.handelFilterUsingRegion} >Asia</li>
                            <li className="dropdown-item" onClick={this.handelFilterUsingRegion} >Europe</li>
                            <li className="dropdown-item" onClick={this.handelFilterUsingRegion} >Oceania</li>
                        </ul>
                    </div>
                </div>
                {/* Display Countries*/}
                {
                    this.displayCountries()
                }
            </div>
        </main> );
    }
    displayCountries(){
        const {countries}=this.state;
        
        return(
            <div className="row justify-content-between mt-5">
                    {
                        countries.map(country=>{
                            return(
                                <div key={country.name} className='col-md-4 country-data col-lg-3 mb-4 ' title='Click to Show Details' onClick={()=>this.goToDetailsPage(country)}>
                                    <img className="card-img-top img-fluid" src={country.flag}alt={country.name?country.name:''}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{country.name?country.name:'Un Titled'}</h5>
                                        <ul className="list-unstyled">
                                            <li className=" p-0 mb-1 my-text-14px" ><b>Population : </b> {country.population?country.population:'Un known'}</li>
                                            <li className="p-0 mb-1 my-text-14px" ><b>Region : </b> {country.region?country.region:'un known'}</li>
                                            <li className="p-0 mb-1 my-text-14px" ><b>Capital : </b> {country.capital?country.capital:'un known'}</li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
        );
    }
}
const mapStateToProps=state=>{
    return {
        savedCountries:state.saveCountiresReducer,
        darkMode:state.modeReducer.darkMode
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        AddCountry:country=>dispatch(addCountryAction(country)),
        saveCountries:countries=>dispatch(saveCountriesAction(countries))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);