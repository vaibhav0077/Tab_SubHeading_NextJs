import styled, { css } from "styled-components";

export const TabHead = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  background: linear-gradient(0deg, #19233a, #19233a), #ffffff;
`;
export const TabContainer = styled.div`
  margin: 10px;
  width: 100%;
  height: 100%;
`;
export const TabBody = styled.div`
  width: 100%;
`;
export const Tab = styled.div`
  padding: 1em;

  color: ${({ selected }) => (selected ? "#FFFFFF;" : "#8A8E9E;")};
  * {
  }
  a {
    color: ${({ selected }) => (selected ? "#FFFFFF;" : "#8A8E9E;")};
  }
`;
