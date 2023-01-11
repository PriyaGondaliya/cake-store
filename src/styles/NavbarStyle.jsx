import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  /* background-color: lightblue; */
`;
export const Wrapper = styled.div`
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  /* align-items: center; */
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  border: 1px solid lightgray;
  align-items: center;
  display: flex;
  margin-left: 25px;
  padding: 5px;
`;

export const Input = styled.input`
  border: none;
`;

export const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
export const Logo = styled.h1`
  text-align: center;
  font-weight: bold;
  /* color: #f27d93; */
`;
// export const Logo = styled.img`
//   /* text-align: center;
//   font-weight: bold; */
//   object-fit: contain;
//   height: 100px;
//   width: 100px;
// `;
export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  /* align-items: center; */
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-right: 25px;
`;
