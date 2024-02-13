import React from "react";
import Heading from "../Styled/Heading";
import Paragraph from "../Styled/Paragraph";
import styled from "styled-components";
import Accordion from "../Styled/Accordion";

const Wrapper = styled.section`
  padding:19%;
  padding-bottom: 143px;
  h2{
    text-align:center;
  }
`;

function Faqs() {
  return (
    <Wrapper>
      <Heading>Frequently Asked Questions</Heading>
      <div className="inner">
        <Accordion>
          <div label="How does AGP plan to finance an acquisition?">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              neque fugit saepe iure unde itaque quas odio! Cupiditate pariatur
              labore quasi atque quisquam blanditiis molestiae, ullam molestias,
              nulla, quo nisi.
            </Paragraph>
          </div>
          <div label="Will AGP need to raise equity or find investors to complete a transaction?">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. ullam
              molestias, nulla, quo nisi.
            </Paragraph>
          </div>
          <div label="How long does it take for AGP to close on an acquisition?">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. ullam
              molestias, nulla, quo nisi.
            </Paragraph>
          </div>
          <div label="Does AGP Have an operations plan for acquired businesses?">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. ullam
              molestias, nulla, quo nisi.
            </Paragraph>
          </div>
        </Accordion>
      </div>
    </Wrapper>
  );
}

export default Faqs;
