import React from 'react';
import Calendar from 'react-calendar';

class Calendar_my extends React.Component {
    state = {
        date: new Date(),
        
      }

      onChange = date => this.setState({ date })

      onClickDay = (event) => {
        
      }

    render () {
        return (
            <div className =" calendar_container lower">
            <Calendar
            className= "calendar"
            onClick={this.onClickDay}  
              onChange={this.onChange}
              value={this.state.date}
              
              
            />
            {/* <Calendar
            className= "calendar"
            onChange={this.onChange}
            value={this.state.date}
            /> */}
          </div>
        )
    }
}

export default Calendar_my;