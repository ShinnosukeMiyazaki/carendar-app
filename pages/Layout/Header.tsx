import styled from "styled-components"

const HeaderStyle = styled.header`
  width:100%;
  height: 75px;
  background: #bdc3c7;
  text-align: center;
  line-height:75px;
  font-weight: bold;
  font-size: 2rem;
  color: white;
`;

const Header = () => {
    return (
        <HeaderStyle>
            Calendar
        </HeaderStyle>
    )
}

export default Header;