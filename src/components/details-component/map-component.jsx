import React from 'react';
// import {}from 'react-leaflet'
import L from 'leaflet'
class Map extends React.Component {
    state = {  }
componentDidMount()
{
    // console.log(this.props.latlng.latlng[0] ,'Map')
    this.setMap()
}
    render() { 
        return (<div id='mapId' ></div>  );
    }
    // this method used to display country location on the map
    setMap(){
        const {country}=this.props
    let mymap = L.map('mapId').setView([country.latlng[0], country.latlng[1]], 6);
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        //map version
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        // access token is my map box access control
        accessToken: 'pk.eyJ1IjoiYWhtZWQtYWxhYTE5OTgiLCJhIjoiY2tycWNsdXIxMDc3ajJ1cWM3YWN1ZjM4eSJ9.uDdek3vpqo9HHg68fejHqA'
    }).addTo(mymap);
    let marker = L.marker([country.latlng[0], country.latlng[1] ],).addTo(mymap)
    marker.bindPopup(country.name).openPopup();
    }
}
 
export default Map;
