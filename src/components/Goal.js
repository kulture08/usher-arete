import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.section`

margin-top:-10px;
background:#000;
.lem{
text-align:left;
padding:40px 6%;

}
h1{
    font-family:${props=> props.theme.fonts.primary};
    width: 103%;
    line-height: 1.3;
    font-weight: 700;
    font-size: 30px;
    color: #fff;
    margin-bottom: 30px;
}
p{
    width:98%;
    font-family:${props=> props.theme.fonts.primary};
    margin-top:30px;
    line-height:1.6;
    font-size:14px;
    color:#fff;
}
.react{
    max-width:100%;
    height:auto;
}
@media(min-width:768px){

.react{
   
height: auto;
    max-width: 100%;
}

.jika{
    width: 43%;
    color:#fff;
   
}

p{
    width: 237%;
    font-family: ${props => props.theme.fonts.primary};
    line-height:2;
    font-size:12px;
    color:#fff;
}
h1{
    width:200%;
}
}
@media(min-width: 1024px){
  p{
    width: 139%;
  }
  .react{
    height: auto;
    max-width: 69%;
    float: right;
  }
  h1{
    width:100%;
  }
.lem{
    display: flex;
    justify-content: space-between;
}
   }

@media(min-width: 1200px){
.jika{
     margin-top: 141px;
}
p{
    width: 135%;
}
h1{
    font-size:43px;
    width: 125%;
}
.lem{
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.react{
    margin-top: 141px;
max-width: 71%;
    height: auto;
}
}

`
function Goal() {
    return (
        <Wrapper>
            <div class="goal">
                <div class="lem">
                    <div class="jika">
                        <h1>
                            Arete Growth Partners
                            aims to identify, acquire,
                            and operate a single
                            business over the long term.
                        </h1>
                        <p>Our main goal is to partner with small business owners to execute a successful transition while
                            maintaining an
                            intense focus on preserving their legacy. The team at Arete Growth Partners is committed to a stable
                            succession and managing the day-to-day operations of the acquired business by taking a humble,
                            authentic
                            approach to leadership.

                        </p>




                        <p>Arete Growth Partners is led by a dedicated entrepreneur and backed by experienced partners with a
                            focus
                            on driving
                             sustainable growth and optimizing operations to derive long-term value. The team conducts
                            an
                            efficient process by using complete discretion in partnering with owners to facilitate a mutual
                            liquidity event
                            while ensuring minimal business impact
                        </p>
                    </div>
                    <div class="langa">
                        <img src="./Images/Group 3.png" className='react' alt="" />
                    </div>
                </div>

            </div>
        </Wrapper>
    )
}

export default Goal