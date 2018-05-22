import React from 'react';

class DataPicker extends React.Component {

    state = {
        show_calendar: 'none',
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
        // day_amount: '',
        day_amount: new Date(2018, 4+1, 0).getDate(),
        first_week_day: new Date(2018, 4, 1).getDay(),
        value: ''
       
    }

  
    handleClick = () => {
        
        this.setState({
            show_calendar: (this.state.show_calendar == 'none') ? 'block' : 'none',
        })

        console.log(this.state.first_week_day)
    }

    handleClickMonthBack = () => {
        if (this.state.month>0) {
             this.setState({
            month: this.state.month -1,
            day_amount: new Date(this.state.year, this.state.month, 0).getDate(),
        })

        } 
       
        console.log(this.state.day_amount)
        console.log(this.state.month)
    }
    
  

    handleClickMonthForward = () => {
        if (this.state.month<11) {
            this.setState({
            month: this.state.month +1,
            day_amount: new Date(this.state.year, this.state.month+2, 0).getDate(),
            
        })
        }
        
    

        console.log(this.state.day_amount)
        console.log(this.state.month)
    }

 

getDayAmount =()=> {
        let days = [];
        
        for (let i=1; i<=this.state.day_amount; i++) {
              days.push(i)
        }
       
        return days;        
    }

    generateFirstWeekDay = () => {
        let first_day = new Date(this.state.year, this.state.month, 1);
        return first_day.getDay()
    }
  
    handleChange = (e) => {
        let input_value = e.target.value
        console.log(input_value)
    }
   
    handleChosenDay = (e) => {
        this.setState({
            value: new Date(this.state.year, this.state.month, e.target.innerHTML).toLocaleDateString(),
        })

        console.log(e.target.innerHTML)
    }



    render () {
       

        if (this.state.day_amount===0 && this.state.month===0 ) {
            return null
        }

        console.log(this.state.month)
        console.log(this.state.day_amount)
        
 
        const style = {
            display: this.state.show_calendar,
        }

        // const day_nr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

        const months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];

        let first_day_in_week = this.generateFirstWeekDay()
        console.log(first_day_in_week)        
        
        let days_block = this.getDayAmount().map(a=><li onClick={this.handleClickColor} onClick={this.handleChosenDay} id={a}>{a}</li>);
        let empty_block = [];

        if(first_day_in_week !=0) {
            for (let i=0; i<first_day_in_week; i++) {
                empty_block.push(i)
            }
        }
        console.log(empty_block)

        let show_empty_block = empty_block.map(a=><li>{}</li>)

        return (
            <div className = "lower calendar">
                  <h1>Sprawdź dostępność terminu:</h1>
                  <div className = "calendar_picker">
                  <div className="input_container">
                      <input value={this.state.value} onChange={this.handleChange} onClick={this.handleClick} placeholder="Data początkowa" type="text"/>
                      <div style={style} className="pick_day">
                      <h3><span onClick={this.handleClickMonthBack}></span> {months[this.state.month]} {this.state.year}<span onClick={this.handleClickMonthForward}></span></h3>
                      <ul className="week_day">

                          <li>Nie</li>
                          <li>Pon</li>
                          <li>Wto</li>
                          <li>Śro</li>
                          <li>Czw</li>
                          <li>Pią</li>
                          <li>Sob</li>
                          {/* <li>Nie</li> */}
                      </ul>
                      <ul className="month_day"> 
                    {show_empty_block}
                    {days_block}
                    {/* {this.getDayAmount().map(a=> <li>{a}</li>)} */}
                      </ul>
                      </div>
                  </div>
                  <div className="input_container">
                      <input placeholder="Data końcowa" type="text"/>
                      <div style={style} className="pick_day">sdjsdlvnsdl</div>
                  </div>
                
                    
            </div>
            </div>
          
            
        )
    }
}

export default DataPicker;

