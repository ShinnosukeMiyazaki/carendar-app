import styled from "styled-components";

import CarendarItem from "./CarendarItem";

const CarenderBase = styled.ul`
  display:flex;
  width:100%;
  border: 0.5px solid #95a5a6;
  height: 100px;
`;

/* 
  Day Data 
*/

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();

console.log(year);
console.log(month);


const Component = () => {
    const day = [1,2,3,4,5,6,7];
    return (
        <CarenderBase>
            {
                day.map((data, index) => {
                    return (
                        <CarendarItem key={index} day={data} />
                    )
                })
            }
        </CarenderBase>
    )
}

export default Component