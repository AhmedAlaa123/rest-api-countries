import React from 'react';
import { connect } from 'react-redux';
import './header.css'
import { changeMoodAction } from '../../actions/action-creator';

class Header extends React.Component {

   
    
   render(){
        const {darkMode}=this.props
        this.setColors(darkMode)
    
        return(
            <header className='header'>
                <div className="container">
                <div className="row justify-content-between">
                    <div className="brand">Where in the World?</div>
                    <div className='mode' onClick={this.props.changeMode}><i className={`fa fa-${darkMode?'sun':'moon'}`}></i> {darkMode?'Light':'Dark'} Mode</div>
                </div>
                </div>
            </header>
        )
    }
   
    setColors(darkMode){

        document.documentElement.style.setProperty('--backColor--',`${darkMode?'hsl(207, 26%, 17%)':'hsl(0, 0%, 98%)'}`)
        document.documentElement.style.setProperty('--textColor--',`${darkMode?'hsl(0, 0%, 100%)':'hsl(200, 15%, 8%)'}`)
        document.documentElement.style.setProperty('--elementsBackColor--',`${darkMode?'hsl(209, 23%, 22%)':'hsl(0, 0%, 100%)'}`)
        document.documentElement.style.setProperty('--inputTextColor--',`${darkMode?'hsl(0, 0%, 100%)':'hsl(0, 0%, 52%)'}`)
    }
}

const mapStateToProps=state=>{
    return {
        darkMode:state.modeReducer.darkMode
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        changeMode:()=>dispatch(changeMoodAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);