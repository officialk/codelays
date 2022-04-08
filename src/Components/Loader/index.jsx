import React from 'react';
import styled from 'styled-components';
import './Loader.css';


export const Loader = ({color, width}) => {
  const Container = styled.div`
  span{
    background-color:${color};
    width:${width}%;
  }
  `
  return (
    <>
    <Container data-testid="loadProgressBar">
      <div className="progressBar">
        <span data-testid="loader" className="loader"></span>
      </div>
    </Container>
    </>
  );
};
