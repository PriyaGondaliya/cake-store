import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background-color: black;
  position: relative;
  overflow: hidden;
`;
export const Arrow = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  position: absolute;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
export const Wrraper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all ease 1.5s;
`;
export const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const Image = styled.img`
  /* object-fit: fill; */
  height: 100%;
  width: 100vw;
  opacity: 0.7;
`;
export const InfoContainer = styled.div`
  color: white;
  position: absolute;
  height: 100%;
  width: 40%;
  background-color: transparent;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  left: 100px;
  flex-direction: column;
  align-items: flex-start;
`;
export const InfoTitle = styled.h1`
  font-size: 70px;
  font-weight: bold;
  margin-top: 200px;
`;
export const InfoSubTitle = styled.p`
  color: #fff;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 3px;
`;
export const InfoButton = styled.button`
  width: 150px;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  /* height: 30px; */
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-top: 8%;
  cursor: pointer;

  :hover {
    background-color: #bc645b;
    border: #bc645b;
    background-color: #f98a82;
  }
`;
