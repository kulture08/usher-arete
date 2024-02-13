import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h2`
    font-size:30px;
    line-height:1.2;
    color:black;
    @media(min-width:992px){
        font-size:43px;
        line-height:1.3;
    }
   
`

function Heading({children}) {
  return (
    <Wrapper>
        {children}
    </Wrapper>
  )
}

export default Heading