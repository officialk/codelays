import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './Loader.css';


export const Loader = ({color, width}) => {
  const Container = styled.div`
  span{
    background-color:${color};
    width:${width};
  }
  `
  return (
    <>
    <Container data-test-id="loadProgressBar">
      <div className="progressBar">
        <span className="loader"></span>
      </div>
    </Container>
    </>
  );
};

Loader.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
};

Loader.defaultProps = {
  color: "#d30404",
  width: "10%",
};



