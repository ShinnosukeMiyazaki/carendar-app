import styled from "styled-components";

type Props = {
    message: string[]
}

const Wrap = styled.div`
  height:15px;
  width:100%;
  line-height: 13px;
  text-align:center;
  border-radius:15px;
  border: 2px solid #7f8c8d;
  color:#2c3e50;
  font-weight:bold;
  margin-bottom:5px;
`;

const StuffToDoItem: React.SFC<Props> = ({message}) => {
    return (
    <>{
        message.map((data, index) => {
            return (
                <Wrap key={index}>
                    {data}
                </Wrap>
            )

        })
        }</>
    )
}

export default StuffToDoItem;