import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.p`
    font-size:14px;
    line-height:1.6;
    opacity:0.7;
`

function Paragraph(props) {
  return (
    <Wrapper>{props.children}</Wrapper>
  )
}

export default Paragraph