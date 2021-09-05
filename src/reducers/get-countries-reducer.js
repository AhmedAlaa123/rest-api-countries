import axios from "axios"
const intitailState={
    countries:[]
}
 function  getCountriesReducer(state=intitailState,action){
    console.log('get countries Reducer!')
    const data=getData('https://restcountries.eu/rest/v2/all')
    console.log(data)
    return  data
}
   // this method used to get countries from passed url
  const getData= async url=>{
    await  axios.get(url).then(response=>{
        // check of response status ===200 is mean data is found !
        if(response.status===200)
        {

             const data=response.data
            //  console.log(data)
             return data;
             // setting the state with returned countries
            //  this.setState({countries:data})
        }
    })
    return null
}
export default getCountriesReducer;