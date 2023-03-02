import { useState, useEffect } from "react";
import * as React from "react";



function Calendar(){

const allmonth: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const [currentMonthByNum, setcurrentMonthByNum] = React.useState<number>(()=>{
    const date = new Date;
    return date.getMonth() ;
});
const [currentYear, setCurrentYear] = React.useState<number>(()=>{
    const date = new Date;
    const curryear = date.getFullYear();
    return curryear
});
const [currentMonthDays, setcurrentMonthDays] = React.useState<number>(()=>{
    return new Date(currentYear, currentMonthByNum +1, 0).getDate();
})
const [daysInMonth, setDaysInMonth] = React.useState<number[]>([]);
const [isActive, setIsActive] = React.useState<number>();

const changeMonthNeg = ()=>{ 
    if( currentMonthByNum <= 0){
        setcurrentMonthByNum(11)
        setCurrentYear(currentYear-1)
    }else{
        setcurrentMonthByNum(currentMonthByNum - 1)
    }
    
}
const changeMonthPos = ()=>{ 
    if (currentMonthByNum >= 11){
        setcurrentMonthByNum(0)
        setCurrentYear(currentYear+1)
    }else{
        setcurrentMonthByNum(currentMonthByNum + 1)
 
    }
}
useEffect(()=>{
    setcurrentMonthDays(new Date(currentYear, currentMonthByNum + 1, 0).getDate());
}, [currentMonthByNum])

useEffect(()=>{
    console.log('render')
    setDaysInMonth([])
    for(let i = 1; i <= currentMonthDays; i++){
        setDaysInMonth(current =>[...current, i])
    }
}, [currentMonthDays])

const applyActiveClass = (index:number)=>{
    setIsActive(index)
}

return(
        <div id="calendar-wrapper">
            <div id="calendar-nav">
                <div id="current-date">
                    {allmonth[currentMonthByNum]} {currentYear}
                </div>
                <div id="month-switcher">
                    <div id="prev-month" className="switch-button" onClick={changeMonthNeg}> {'<'} </div>
                    <div id="next-month" className="switch-button" onClick={changeMonthPos}> {'>'} </div>
                </div>
            </div>
            <div id="day-names">
                <ul className="day-names-list-ul">
                    <li>Monday</li>
                    <li>Tuesday</li>
                    <li>Wednesday</li>
                    <li>Thursday</li>
                    <li>Friday</li>
                    <li>Saturday</li>
                    <li>Sunday</li>
                </ul>
            </div>
            <div id="days-num">
            <ul className="day-list-ul">
                    <li className="inactive">30</li>
                    <li className="inactive">31</li>
                    {daysInMonth.map((day, index)=>{
                        return <li key={index} onClick={()=>{applyActiveClass(index)}} className={`${isActive === index ? 'active':''}`}>{day}</li>
                    })}
                    <li className="inactive">1</li>
                    <li className="inactive">2</li>
                </ul>
            </div>
        </div>
)
}

export default Calendar