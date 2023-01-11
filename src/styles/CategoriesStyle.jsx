import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;
export const ItemContainer = styled.div`
  flex: 1;
  height: 70vh;
  margin: 3px;
  position: relative;
  background-color: black;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
`;
export const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: transparent;
  color: gray;
  cursor: pointer;
  font-weight: 300;
  background-color: #f98a82;
  color: white;
`;
