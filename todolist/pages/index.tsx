import { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div`
  font-style: italic;
  padding: 20px;
`;
const index: NextPage = () => {
  return <Container>hello typescript</Container>;
};
export default index;
