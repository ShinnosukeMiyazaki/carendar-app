import styled from "styled-components";
import Layout from "./Layout/MyLayout";

import CarendarBase from "./components/CarebdarBase";

const Base = styled.div`
  width:100%;
  padding:0 10px;
`;

const Container = styled.div`
  width: 750px;
  margin: 0 auto;
  background: white;
  text-align: center;
  padding: 50px 5px;
  @media screen and (max-width: 770px){
      width:100%;
  }
`;

const Index = () => {
    return (
        <Layout>
            <Base>
            <Container>
                <CarendarBase></CarendarBase>
            </Container>
            </Base>
        </Layout>
    )
}

export default Index
