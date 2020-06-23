import styled from "styled-components";

type Props = {
    day: number
}

const CarendarItem = styled.li`
  border: 0.5px solid #95a5a6;
  width: 14.28%;
  padding: 25px 5px;
  text-align: left;
`;

const DayNumberContainer = styled.div`
  width:100%;
  text-align:center;
  font-size:1.6rem;
  font-weight:bold;
`;

const Component: React.SFC <Props> = ({day}) => {
    return (
        <CarendarItem>
            <DayNumberContainer>
                {day}
            </DayNumberContainer>
        </CarendarItem>
    )
}

export default Component