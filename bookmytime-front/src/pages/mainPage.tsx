import React from 'react';
// import Calendar from '../components/calendar/calendar'



import Month from '../components/Month/month'

interface IProps {
}

interface IState {
  today: Date;
}

class MainPage extends React.Component<IProps, IState> {
constructor(props:any) {
    super(props)
    this.state = {
        today: new Date()
    }
}




render() {
    
    return(
        <div>
            <h1>Book My Time</h1>
            <Month today = {this.state.today}/>
            {/* <Month today = {this.state.today}/> */}

            {/* <Calendar today = {this.state.today}/> */}
            {/* <Day /> */}
            
            
        </div>  
    )
    }
}

export default MainPage