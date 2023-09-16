import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: light;
  display: flex;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  /* padding: 0px 20px 0px 20px; */
`;

export const ContainerChild = styled.div`
  width: 50%;
  background-color: #4898b2;
  /* display: flex; */
  border: 2px solid green;
  justify-content: center;
  padding: 1rem;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Header = styled.div`
  width: 100%;
  color: white;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Body = styled.div`
  width: 100%;
  border: 1px solid black;
`;

export const CardButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.3rem;
`;
export const CardButton = styled.button`
  border-radius: 0.5rem;
  border: 2px solid black;
  background-color: white;
  color: black;
  cursor: pointer;
  /* aspect-ratio: 1/1; */
  height: min-content;
  padding: 0.5rem;
  width: 100%;
  margin: 0 auto;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const PlayerContainer = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-direction: column;
  border-radius: 1rem;
  width: 80%;
  margin: 0 auto;
  /* border: 2px solid blue; */
  /* padding: 1rem; */
`;
