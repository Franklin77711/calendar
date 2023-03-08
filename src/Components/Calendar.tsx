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
const [firstDay, setFirstDay] = React.useState<number>(()=>{
    return new Date(currentYear, currentMonthByNum, 0).getDay()
});
const [LastDayOfCurrMonth, setLastDayOfCurrMonth] = React.useState<number>(()=>{
    return new Date(currentYear, currentMonthByNum, currentMonthDays - 1).getDay()});
const [lastDay, setLastDay] = React.useState<number>(()=>{
    return new Date(currentYear, currentMonthByNum, 0).getDate()
});
const [firstDaysArr, setFirstDaysArr] = React.useState<number[]>([]);
const [lastDayArr, setLastDayArr] = React.useState<number[]>([]);
const [isActive, setIsActive] = React.useState<number>();
const [isShown, setIsShown] = React.useState<boolean>(false);

const applyShow = () =>{
    setIsShown(true)
}
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
    setFirstDay(new Date(currentYear, currentMonthByNum, 0).getDay());
    setLastDay(new Date(currentYear, currentMonthByNum, 0).getDate());
    setLastDayOfCurrMonth(new Date(currentYear, currentMonthByNum, currentMonthDays - 1).getDay());
}, [currentMonthByNum])

useEffect(()=>{
    setDaysInMonth([])
    for(let i = 1; i <= currentMonthDays; i++){
        setDaysInMonth(current =>[...current, i])
    }
    
}, [currentMonthDays])

const applyActiveClass = (index:number)=>{
    setIsActive(index)
}

useEffect(()=>{ //add last month last few days
    setLastDayArr([])
    for (let i = firstDay; i > 0; i--){
        setLastDayArr(current =>[...current, lastDay - i + 1])
    }
}, [currentMonthDays, firstDay])

useEffect(()=>{ //add next month first few days NEED DEBUG
    setFirstDaysArr([])
        for (let i = LastDayOfCurrMonth; i < 6; i++){
            setFirstDaysArr(current =>[...current,i - LastDayOfCurrMonth + 1])
        }
}, [currentMonthDays, firstDay])

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
                    {lastDayArr.map((day, index) =>{
                        return <li key={index} className='inactive'>{/*day*/}</li>
                    })}
                    {daysInMonth.map((day, index)=>{
                        return <li key={index} onClick={()=>{applyActiveClass(index)}} className={`${isActive === index ? 'active':''} currmonth`}>{day}</li>
                    })}
                    {/* firstDaysArr.map((day, index) =>{
                        return <li key={index} className='inactive'>{day}</li>
                    })*/}
                </ul>
            </div>
            <div id="hour-div" className="show">
                <ul id="hour-ul">
                    <li className="reserved">10:00 - 11:00</li>
                    <li className="free">11:00 - 12:00</li>
                    <li className="free">12:00 - 13:00</li>
                    <li className="free">13:00 - 14:00</li>
                    <li className="free">14:00 - 15:00</li>
                    <li className="reserved">15:00 - 16:00</li>
                    <li className="free">16:00 - 17:00</li>
                    <li className="free">17:00 - 18:00</li>
                </ul>
            </div>
        </div>
)
}

export default Calendar