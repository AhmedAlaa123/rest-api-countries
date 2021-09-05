(this["webpackJsonprest-api-countries"]=this["webpackJsonprest-api-countries"]||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},47:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(19),c=n.n(s),o=(n(42),n(10)),i=n(11),l=n(13),u=n(12),d=n(35),h=n(3),j=(n(43),n(14)),b=(n(47),"ADD_COUNTRY"),p="SAVE_COUNTRIES",m="CHANGE_MODE",x=n(0),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.darkMode;return this.setColors(e),Object(x.jsx)("header",{className:"header",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row justify-content-between",children:[Object(x.jsx)("div",{className:"brand",children:"Where in the World?"}),Object(x.jsxs)("div",{className:"mode",onClick:this.props.changeMode,children:[Object(x.jsx)("i",{className:"fa fa-".concat(e?"sun":"moon")})," ",e?"Light":"Dark"," Mode"]})]})})})}},{key:"setColors",value:function(e){document.documentElement.style.setProperty("--backColor--","".concat(e?"hsl(207, 26%, 17%)":"hsl(0, 0%, 98%)")),document.documentElement.style.setProperty("--textColor--","".concat(e?"hsl(0, 0%, 100%)":"hsl(200, 15%, 8%)")),document.documentElement.style.setProperty("--elementsBackColor--","".concat(e?"hsl(209, 23%, 22%)":"hsl(0, 0%, 100%)")),document.documentElement.style.setProperty("--inputTextColor--","".concat(e?"hsl(0, 0%, 100%)":"hsl(0, 0%, 52%)"))}}]),n}(a.a.Component),O=Object(j.b)((function(e){return{darkMode:e.modeReducer.darkMode}}),(function(e){return{changeMode:function(){return e({type:m})}}}))(f),v=n(5),y=n.n(v),g=n(15),k=n(18),C=n.n(k),w=(n(69),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={country:"",showMenu:!1,countries:[],loading:!0},e.handelToggelMenuClick=function(t){e.setState({showMenu:!e.state.showMenu})},e.handelSearch=function(e){e.preventDefault()},e.handelTextChange=function(t){var n=t.target.value;if(""!==n){var r=e.props.savedCountries.filter((function(e){return e.name.toLowerCase().startsWith(n.toLocaleLowerCase())}));e.setState({countries:r})}else e.setState({countries:e.props.savedCountries})},e.getData=function(){var t=Object(g.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get(n).then((function(t){200===t.status&&e.setState({countries:t.data,loading:!1})})).catch((function(t){e.setState({loading:!1})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.goToDetailsPage=function(t){e.props.AddCountry(t),e.props.data.history.replace("/countries-rest/".concat(t.name))},e.handelFilterUsingRegion=function(t){var n=t.target.textContent,r=e.props.savedCountries;if("all"!==n.toLocaleLowerCase()){var a=r.filter((function(e){return e.region.toLowerCase()===n.toLocaleLowerCase()}));e.setState({countries:a})}else e.setState({countries:r})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(g.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getData("https://restcountries.eu/rest/v2/all");case 2:this.props.saveCountries(this.state.countries);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.darkMode;return Object(x.jsx)("main",{children:Object(x.jsxs)("div",{className:"container",children:[this.state.loading?Object(x.jsx)("div",{className:"overlay-loading",children:Object(x.jsxs)("div",{className:"buble-container",children:[Object(x.jsx)("span",{className:"buble"},"4")," ",Object(x.jsx)("span",{className:"buble"},"1")," ",Object(x.jsx)("span",{className:"buble"},"2")," ",Object(x.jsx)("span",{className:"buble"},"3")]})}):"",Object(x.jsxs)("div",{className:"row justify-content-between",children:[Object(x.jsxs)("form",{onSubmit:this.handelSearch,className:"mb-4",children:[Object(x.jsx)("input",{className:"form-control",id:"country",onChange:this.handelTextChange,type:"text",placeholder:"Search for Country ..."}),Object(x.jsx)("label",{htmlFor:"country",children:Object(x.jsx)("i",{className:"fa fa-search"})})]}),Object(x.jsxs)("div",{className:"dropdown ml-auto",children:[Object(x.jsx)("button",{onClick:this.handelToggelMenuClick,className:"btn  dropdown-toggle border-0",type:"button",id:"dropdownMenu2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",style:{backgroundColor:"".concat(e?"hsl(209, 23%, 22%)":"hsl(0, 0%, 100%)"),color:"".concat(e?"hsl(0, 0%, 100%)":"hsl(200, 15%, 8%)")},children:"Filter By Region"}),Object(x.jsxs)("ul",{className:"dropdown-menu  ".concat(this.state.showMenu?"active":""),"aria-labelledby":"dropdownMenu2",children:[Object(x.jsx)("li",{className:"dropdown-item",onClick:this.handelFilterUsingRegion,children:"All"}),Object(x.jsx)("li",{className:"dropdown-item",onClick:this.handelFilterUsingRegion,children:"Africa"}),Object(x.jsx)("li",{className:"dropdown-item",onClick:this.handelFilterUsingRegion,children:"Americas"}),Object(x.jsx)("li",{className:"dropdown-item",onClick:this.handelFilterUsingRegion,children:"Asia"}),Object(x.jsx)("li",{className:"dropdown-item",onClick:this.handelFilterUsingRegion,children:"Europe"}),Object(x.jsx)("li",{className:"dropdown-item",onClick:this.handelFilterUsingRegion,children:"Oceania"})]})]})]}),this.displayCountries()]})})}},{key:"displayCountries",value:function(){var e=this,t=this.state.countries;return Object(x.jsx)("div",{className:"row justify-content-between mt-5",children:t.map((function(t){return Object(x.jsxs)("div",{className:"col-md-4 country-data col-lg-3 mb-4 ",title:"Click to Show Details",onClick:function(){return e.goToDetailsPage(t)},children:[Object(x.jsx)("img",{className:"card-img-top img-fluid",src:t.flag,alt:t.name?t.name:""}),Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("h5",{className:"card-title",children:t.name?t.name:"Un Titled"}),Object(x.jsxs)("ul",{className:"list-unstyled",children:[Object(x.jsxs)("li",{className:" p-0 mb-1 my-text-14px",children:[Object(x.jsx)("b",{children:"Population : "})," ",t.population?t.population:"Un known"]}),Object(x.jsxs)("li",{className:"p-0 mb-1 my-text-14px",children:[Object(x.jsx)("b",{children:"Region : "})," ",t.region?t.region:"un known"]}),Object(x.jsxs)("li",{className:"p-0 mb-1 my-text-14px",children:[Object(x.jsx)("b",{children:"Capital : "})," ",t.capital?t.capital:"un known"]})]})]})]},t.name)}))})}}]),n}(r.Component)),N=Object(j.b)((function(e){return{savedCountries:e.saveCountiresReducer,darkMode:e.modeReducer.darkMode}}),(function(e){return{AddCountry:function(t){return e(function(e){return{type:b,country:e}}(t))},saveCountries:function(t){return e(function(e){return{type:p,countries:e}}(t))}}}))(w),M=n(37),S=n(21),B=n.n(S),D=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.setMap()}},{key:"render",value:function(){return Object(x.jsx)("div",{id:"mapId"})}},{key:"setMap",value:function(){var e=this.props.country,t=B.a.map("mapId").setView([e.latlng[0],e.latlng[1]],6);B.a.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoiYWhtZWQtYWxhYTE5OTgiLCJhIjoiY2tycWNsdXIxMDc3ajJ1cWM3YWN1ZjM4eSJ9.uDdek3vpqo9HHg68fejHqA"}).addTo(t),B.a.marker([e.latlng[0],e.latlng[1]]).addTo(t).bindPopup(e.name).openPopup()}}]),n}(a.a.Component),R=(n(70),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).countryBorders=[],e.state={country:null,border:null,loading:!0,fromMenu:!1},e.handelBack=function(t){e.props.data.history.replace("/countries-rest/")},e.setData=Object(g.a)(y.a.mark((function t(){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==(n=e.props.selectedCountry).country){t.next=7;break}return e.setState({loading:!0}),t.next=5,e.getCountryFromBackEnd(e.props.data.match.params.country);case 5:t.next=10;break;case 7:return t.next=9,e.setState({country:n,loading:!1});case 9:e.loadBordersCountryFromProps();case 10:case"end":return t.stop()}}),t)}))),e.displayData=function(){var t=e.state.country;if(!e.state.country)return Object(x.jsx)("p",{id:"error-message",className:"text-center text-danger  font-weight-bold ",children:"Un Known Country Please Go To Menu and Select The Country"});e.state.border&&!e.state.fromMenu?(e.countryBorders.push(e.state.border),e.countryBorders=Object(M.a)(new Set(e.countryBorders))):e.countryBorders=e.state.border?e.state.border:[];var n=e.props.darkMode;return Object(x.jsxs)("div",{className:"row justify-content-between mt-4",children:[Object(x.jsx)("div",{className:"col-md-6",children:Object(x.jsx)("img",{className:"img-fluid",src:t.flag,alt:""})}),Object(x.jsxs)("div",{className:"col-md-6 country-detail",children:[Object(x.jsx)("h3",{children:t.name}),Object(x.jsxs)("div",{className:"row justify-content-between",children:[Object(x.jsxs)("div",{className:"col-md-6 mb-5 my-text-16px",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Native Name : "}),t.nativeName]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Population"})," : ",t.population]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Region : "}),t.region]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Sub Regions : "}),t.subregion]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Capital : "}),t.capital]})]}),Object(x.jsxs)("div",{className:"col-md-6 my-text-16px",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Top Level Domain : "}),t.topLevelDomain]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Currencies : "}),t.currencies.map((function(e){return Object(x.jsx)("span",{className:"mr-4",children:e.name},e.name)}))]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{children:"Languages : "}),t.languages.map((function(e){return Object(x.jsx)("span",{className:"mr-4",children:e.name},e.name)}))]})]})]}),Object(x.jsxs)("div",{className:"mb-5 row my-text-16px col",children:[Object(x.jsx)("b",{children:"Border Countries : "}),e.countryBorders.map((function(e){return e?Object(x.jsx)("span",{className:"border-country btn-back mb-3",style:{backgroundColor:"".concat(n?"hsl(209, 23%, 22%)":"hsl(0, 0%, 100%)"),color:"".concat(n?"hsl(0, 0%, 100%)":"hsl(200, 15%, 8%)")},children:e.name},Math.random()):""}))]})]})]})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(g.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setData();case 2:this.props.countires.length>0&&this.setState({fromMenu:!0});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.darkMode;return Object(x.jsx)("main",{className:"pt-5",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("button",{onClick:this.handelBack,className:"btn btn-back",style:{backgroundColor:"".concat(e?"hsl(209, 23%, 22%)":"hsl(0, 0%, 100%)"),color:"".concat(e?"hsl(0, 0%, 100%)":"hsl(200, 15%, 8%)")},children:[Object(x.jsx)("i",{className:"fa fa-arrow-left"})," back"]}),this.displayData(),this.state.loading?Object(x.jsx)("div",{className:"overlay-loading",children:Object(x.jsxs)("div",{className:"buble-container",children:[Object(x.jsx)("span",{className:"buble"},"4")," ",Object(x.jsx)("span",{className:"buble"},"1")," ",Object(x.jsx)("span",{className:"buble"},"2")," ",Object(x.jsx)("span",{className:"buble"},"3")]})}):"",this.state.country?Object(x.jsx)(D,{country:this.state.country}):""]})})}},{key:"getCountryFromBackEnd",value:function(){var e=Object(g.a)(y.a.mark((function e(t){var n=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("https://restcountries.eu/rest/v2/name/".concat(t,"?fullText=true")).then((function(e){200===e.status&&(n.countryBorders=[],n.setState({country:e.data[0],loading:!1,border:null,fromMenu:!1}),n.loadBordersCountry(e.data[0].borders))})).catch((function(e){n.setState({loading:!1})}));case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()},{key:"loadBordersCountryFromProps",value:function(){for(var e=[],t=0;t<this.props.countires.length;t++)for(var n=0;n<this.state.country.borders.length;n++)this.props.countires[t].alpha3Code===this.state.country.borders[n]&&e.push(this.props.countires[t]);this.setState({border:e})}},{key:"loadBordersCountry",value:function(){var e=this;this.state.country.borders.forEach((function(t){e.getBorderCountries(t)}))}},{key:"getBorderCountries",value:function(){var e=Object(g.a)(y.a.mark((function e(){var t,n=this,r=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,C.a.get("https://restcountries.eu/rest/v2/alpha/".concat(t)).then((function(e){n.setState({border:e.data})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),n}(a.a.Component)),T=Object(j.b)((function(e){return{selectedCountry:e.countryReducer,countires:e.saveCountiresReducer,darkMode:e.modeReducer.darkMode}}))(R),F=function(){return Object(x.jsx)("div",{children:"Page Not Found"})},L=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={showMenu:!1},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(d.a,{children:[Object(x.jsx)(O,{}),Object(x.jsxs)(h.d,{children:[Object(x.jsx)(h.b,{exact:!0,path:"/rest-api-countries/",render:function(e){return Object(x.jsx)(N,{data:e})}}),Object(x.jsx)(h.b,{exact:!0,path:"/rest-api-countries/page-not-found",component:F}),Object(x.jsx)(h.b,{path:"/rest-api-countries/:country",render:function(e){return Object(x.jsx)(T,{data:e})}}),Object(x.jsx)(h.a,{exact:!0,from:"/",to:"/rest-api-countries/"}),Object(x.jsx)(h.a,{to:"/rest-api-countries/page-not-found/"})]})]})}}]),n}(a.a.Component),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},A=(n(73),n(26)),E=localStorage.getItem("darkMode"),U={darkMode:E=!!E&&"true"===E};var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,n=e.darkMode;return t.type===m?(localStorage.setItem("darkMode",!n),{darkMode:!n}):e},W={country:""};var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;return t.type===b?t.country:e},Y={countries:[]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;return t.type===p?t.countries:e},_=Object(A.a)({modeReducer:I,countryReducer:J,saveCountiresReducer:H}),z=Object(A.b)(_);c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(j.a,{store:z,children:Object(x.jsx)(L,{})})}),document.getElementById("root")),P()}},[[74,1,2]]]);
//# sourceMappingURL=main.689b0c51.chunk.js.map