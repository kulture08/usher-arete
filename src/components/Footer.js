import React from 'react'
import { styled } from 'styled-components'


const Wrapper = styled.section`
padding:2rem;
background:#2D2C2C;
.footer{
 
 
  display :flex;
  justify-content:space-between;
}

  

@media(min-width: 1200px){
  .sly{
    margin-right: 125px;
  }
 .sly{
  margin-left: 140px;
 } 
} 
p{
  font-family:${props=> props.theme.fonts.primary};
  font-size:12px;
    color: #fff;
}


`  
function Footer() {
  return (
    <Wrapper>
        <div className="footer">
       
            <div className="sly">
                <p className="zwa">©2o22 Arete Growth Partners • Built by Uncommon.org, a non-profit website development company</p>
            </div>
            <div className="sly">
                <p>All Rights Reserved.</p>
            </div>

       
    </div>
    </Wrapper>
   
  )
}

export default Footer