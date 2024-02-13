import React from 'react'
import styled from 'styled-components'
// import theme from "../theme.js"
const Wrapper = styled.section`
background-color:#000;
.luve{
    padding: 40px 6%;
    
}
.span{

    margin-bottom: 15px;
}
.red{
margin-right:40px;
    font-size:15px;
    font-weight:700;
    color:red;
}
.react{
    max-width:100%;
    height:auto;
}
h3{
    margin-bottom:20px;
    font-weight:700;
    font-size:30px;
    color: #fff;
}
p{
    width: 97%;
    margin-bottom:30px;
color: #fff;
    font-family:${props=> props.theme.fonts.primary};
   line-height:2;
    font-size:12px; 
   }
@media(min-width:768px){
    .zamo{
       
    width: 90%;
       
 }
    .luve{
        padding:30px;
        }
    }
@media(min-width: 1024px){
  .zamo{
    width: 39%;
  }
  .react{
    max-width: 70%;
    height: auto;
    margin-left: 107px;
  }
  .luve{
    display:flex;
    justify-content:space-between;
    align-items:center;
   }
   }
  


@media(min-width: 1200px){

    .luve{
        padding:100px;
    }
    .zamo{
        margin-left: 71px;
        width: 51%;
    }
    .react{
        margin-left: 101px;
    width: 63%;
}
}

`
function About() {
  return (
    <>
        <Wrapper>
        <div className="luve">
            <div className="zamo">
                <h3>About the Founder</h3>
                <p className='span'>
                    <span className='red'>Greg Newton</span>
                    Founder & Managing Partner</p>
                <p>Greg has an intense strategic focus bolstered by strong finance and operating experiences within
                    Fortune
                    1oo and international, multi-billion dollar companies. Prior to founding Arete Growth Partners, Greg
                    directed strategy and innovation, and was responsible for corporate strategy and development efforts
                    at a
                    $2B international manufacturer of construction materials and building products.
                </p>
                <p>Greg began his career with GE where he graduated from their Financial Management Program ÊFMP and
                    subsequently held various financial leadership roles across mergers and acquisitions, financial
                    planning and
                    analysis, supply chain operations, and product management. Greg is also a graduate of Hamilton
                    College
                    where he holds a Bachelor of Arts in Economics and was captain of the Men s Basketball team.
                </p>
                <p>In the spirit of arete, Greg has fostered his own pursuit of excellence as a lifelong learner with an
                    achievement oriented mindset. He is passionate about partnering with owners to ensure that their
                    legacy
                    endures and the full potential of their business gets realized. </p>
                
            </div>
            <div className="chalaha">
                    <img src="./Images/Group 34.png"  className='react'  alt="images"/>
                    <div className='card-text'>
                        
                    </div>
                </div>

        </div>
    </Wrapper>
    </>
  )
}

export default About