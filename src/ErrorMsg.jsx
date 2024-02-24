import styled from "@emotion/styled";

const ErrorMsgStyle = styled.div`
  padding: 1rem;
  background-color: #fa8282;
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;
`;

export default function ErrorMsg({ children }) {
  return <ErrorMsgStyle>{children}</ErrorMsgStyle>;
}
