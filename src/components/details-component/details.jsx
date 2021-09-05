import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
// import Map from './map-component';
import Map from './map-component';
import './details.css'

class DetailsPage extends React.Component{
    countryBorders=[]
    state= {
        country:null,
        border:null,
        loading:true,
        fromMenu:false,
      
    }
    async componentDidMount(){
        
        await this.setData()
        
        if(this.props.countires.length>0)
        {
            this.setState({fromMenu:true})
        }
        
        
    }
    handelBack=e=>{
     // go back to home page
        this.props.data.history.replace('/countries-rest/')
      
    }
   
    render ()
    {
       
        const {darkMode} =this.props
        return (
            <main className='pt-5' >
                <div className="container">
                    <button onClick={this.handelBack} className='btn btn-back' style={{backgroundColor:`${darkMode?'hsl(209, 23%, 22%)':'hsl(0, 0%, 100%)'}`,color:`${darkMode?'hsl(0, 0%, 100%)':'hsl(200, 15%, 8%)'}`}}><i className='fa fa-arrow-left'></i> back</button>
                    {
                        this.displayData()
                    }

                    {
                        this.state.loading?<div className='overlay-loading'>
                            <div className='buble-container'><span key='4' className='buble'></span> <span key='1' className='buble'></span> <span key='2' className='buble'></span> <span key='3' className='buble'></span></div>
                        </div>:''
                    }

                    {this.state.country?<Map country={this.state.country}/>:''}
                </div>
            </main>
        )


    }

     setData= async()=>
    {
        const {selectedCountry}=this.props;
      
        if(selectedCountry.country==='')
        {
            this.setState({loading:true})
            await this.getCountryFromBackEnd(this.props.data.match.params.country) // waiting for getting data from server
        
        }
        else{
            await this.setState({country:selectedCountry,loading:false}) // waiting to setting the state because this take time
            this.loadBordersCountryFromProps()
            
        }
        
    }
      async getCountryFromBackEnd(countryName)
    {
       
        try{
                await axios.get(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`).then( response=>{
                    if(response.status===200) // country is found response status Ok
                    {
                      
                        this.countryBorders=[] // Empty CountryBorders Array
                        this.setState({country:response.data[0],loading:false,border:null,fromMenu:false})
                        //Loading border countries for current Country
                        this.loadBordersCountry(response.data[0].borders)
                        
                        
                    }
                   
                }   
            ).catch(e=>{

                // Remove Loading Page
                this.setState({loading:false})
            }) 
        }catch(ex){
        }
     
 
    }
    loadBordersCountryFromProps(){
        // Filterring countries that is border for current country
        let countries=[]
        for(let x=0;x<this.props.countires.length;x++)
        {
            for(let y=0;y<this.state.country.borders.length;y++)
            {
                if(this.props.countires[x].alpha3Code===this.state.country.borders[y])
                {
                    countries.push(this.props.countires[x])
                }
            }
        }
        
        this.setState({border:countries})
    }
  
    // loading borders from bacend whene the user refresh the page bacause redux store will be empty!
     loadBordersCountry()
    {
        
        // looping on country borders alph3code to get its data from backend or from server
     this.state.country.borders.forEach(element=> {
         // getting country with current alpha3Code
          this.getBorderCountries(element)
         
        });
      
    }
    // this methos will get boredr country with passed country alpha3code asynchrouns 
    async getBorderCountries(countryCode='')
    {
        await  axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCode}`).then(response=>{
                
                this.setState({border:response.data})
               
                
        })
    }
    // this method used to display country data
    displayData=()=>{
        const {country}=this.state;
    //    setTimeout(() => {
            
    //     }, 3000);
        if(!this.state.country){
           
            return <p id='error-message' className='text-center text-danger  font-weight-bold ' >Un Known Country Please Go To Menu and Select The Country</p>
        }
        if(this.state.border&&!this.state.fromMenu)
        {
             this.countryBorders.push(this.state.border)
             this.countryBorders=[...(new Set(this.countryBorders))]
        }
        else{
            this.countryBorders=this.state.border?this.state.border:[]
        }
        const {darkMode}=this.props
        return (
            <div className='row justify-content-between mt-4'>
                    <div className="col-md-6">
                        <img  className='img-fluid' src={country.flag} alt="" />
                    </div>
                    <div className="col-md-6 country-detail">
                        <h3>{country.name}</h3>
                        <div className="row justify-content-between">
                        <div className="col-md-6 mb-5 my-text-16px">
                                <div><b>Native Name : </b>{country.nativeName}</div>
                                <div><b>Population</b> : {country.population}</div>
                                <div><b>Region : </b>{country.region}</div>
                                <div><b>Sub Regions : </b>{country.subregion}</div>
                                <div><b>Capital : </b>{country.capital}</div>
                        </div>
                        
                        <div className="col-md-6 my-text-16px">
                            <div><b>Top Level Domain : </b>{country.topLevelDomain}</div>
                            <div><b>Currencies : </b>{country.currencies.map(currency=><span key={currency.name} className='mr-4'>{currency.name}</span>)}</div>
                            <div><b>Languages : </b>{country.languages.map(language=><span key={language.name} className='mr-4'>{language.name}</span>)}</div>
                        </div>
                        </div>
                        <div className='mb-5 row my-text-16px col' ><b>Border Countries : </b>{this.countryBorders.map(x=>x?<span key={Math.random()} className='border-country btn-back mb-3' style={{backgroundColor:`${darkMode?'hsl(209, 23%, 22%)':'hsl(0, 0%, 100%)'}`,color:`${darkMode?'hsl(0, 0%, 100%)':'hsl(200, 15%, 8%)'}`}}>{x.name}</span>:'')}</div>
                    </div>
                </div>
        )
    }
    
}
const mapStateToProps=state=>{
    return {
        selectedCountry:state.countryReducer,
        countires:state.saveCountiresReducer,
        darkMode:state.modeReducer.darkMode
    }
}
export default connect(mapStateToProps)(DetailsPage)