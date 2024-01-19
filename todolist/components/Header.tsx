import styled from "styled-components";
import palette from "../pages/styles/palette";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 0 12px;
  border-bottom: 1px solid ${palette.gray};
  h1 {
    font-size: 21px;
  }
`;

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Siyoung's TodoList</h1>
    </Container>
  );
};

export default Header;