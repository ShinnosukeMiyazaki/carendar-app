import React from "react";
import styled from "styled-components";

import CarendarItem from "./CarendarItem";
import ToDoItem from "./StuffToDoItem";

const CarenderBase = styled.ul`
  display:flex;
  flex-wrap:wrap;
  width:100%;
  text-align:center;
`;

const Month = styled.p`
  font-size:2.6rem;
  color:#2c3e50;
  font-weight: bold;
`;

const Year = styled.p`
  margin-bottom: 20px;
`;

/* 
  Day Data 
*/

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const dayMaxNumber = new Date(year, month, 0).getDate();
const days = Array.from({length: dayMaxNumber}, (v, i) => i + 1);



const Component = () => {
    const toDo = [
        "To Do 1",
        "To Do 2",
        "To Do 3"
    ]
    return (
        <React.Fragment>
            <Month>
                {month}月
            </ Month>
            <Year>
                {year}年
            </Year>
            <CarenderBase>
            {
                days.map((data, index) => {
                    return (
                        <CarendarItem key={index} day={data} children={<ToDoItem message={toDo}/>} />
                    )
                })
            }
        </CarenderBase>
        </React.Fragment>
        
    )
}

export default Component