import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/landing-illustration.svg";
import CustomersLogoStripImage from "../../images/banner_hackathon.jpg";
import { SectionHeading } from "components/misc/Headings.js";
import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Container = tw.div `relative`;
const TwoColumn = tw.div `flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div `relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div `relative mt-12 text-right`;

const Heading = tw.h1 `font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p `my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div `
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    :disabled {
      pointer-events: none;
    },
    :disabled:hover {
      background-color: #4299e1;
    },
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-blue-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-blue-700 transition duration-300 disabled:opacity-50`}
  }
`;

const IllustrationContainer = tw.div`text-right`;

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-sm absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;

const CodeTextarea = styled.textarea`
  background-color: #f8f9fa;
  border-color: #dadce0;
  border-radius: 4px;
  border-width: 1px;
  font-family: courier new, courier, monospace;
  font-size: 12px;
  max-width: 800px;
  overflow: auto;
  padding: 8px;
  resize: none;
`;

const HighlightedText = tw.span`text-blue-500`;

export default ({ roundedHeaderButton }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [websiteSnippet, setWebsite] = useState("");
  const toggleModal = () => setModalIsOpen(!modalIsOpen);
  const updateWebsite = (evt) => {
    const snippet = `
  <!--InClue start-->
    <link rel="stylesheet" href="//inclue.life/static/app/inclue.css" />
    <script type="text/javascript">
      (function () {
        var s = document.createElement("script"),
          e = !document.body ? document.querySelector("head") : document.body;
        s.src = "//inclue.life/static/app/app.js";
        s.async = true;
        s.onload = function () {
          inclue.init({
            domain: "${evt.target.value }",
            publicKey: "wdEds334wdRExxv54",
          });
        };
        e.appendChild(s);
      })();
    </script>
  <!--InClue end-->
  `;
    setWebsite(snippet);
  };

  return (
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading id="generate-code">
              Automated <span tw="text-blue-700">Web Accessibility</span>{" "}
              Solution for ADA &amp; WCAG Compliance
            </Heading>
            <Paragraph>
              Don't just do it to be compliant, do it because it's the right
              thing to do.
            </Paragraph>
            <SectionHeading tw="text-left ml-4 mb-2 text-xl">
              <p>Try it now!</p>
            </SectionHeading>
            <Actions>
              <input
                type="url"
                placeholder="Your website here"
                onChange={updateWebsite}
              />
              <button class=" " disabled={!websiteSnippet} onClick={toggleModal}>Generate Code</button>
              <StyledModal
                closeTimeoutMS={300}
                className="mainHeroModal"
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                shouldCloseOnOverlayClick={true}
              >
                <CloseModalButton onClick={toggleModal}>
                  <CloseIcon tw="w-6 h-6" />
                </CloseModalButton>
                <div tw="flex flex-col items-center">
                  <p tw="text-blue-700 mb-10 text-xl font-bold"> All The Code You Need </p>
                  <p tw="mb-5">Copy the code below and paste it in the HEAD tag of your page.</p>
                  <CodeTextarea rows="20" cols="80" readonly="readonly">
                    {websiteSnippet}
                  </CodeTextarea>

                  <div tw="mt-10 cursor-pointer">Having trouble? <HighlightedText> Contact Us. </HighlightedText></div>
                </div>
              </StyledModal>
            </Actions>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img
                tw="min-w-0 w-full max-w-lg xl:max-w-3xl p-3 top-0 right-0 "
                src={DesignIllustration}
                alt="Design Illustration"
              />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <SectionHeading tw="text-center text-xl">
          <p>Our Trusted Customers</p>
        </SectionHeading>
        <img
          tw="w-full max-w-screen-xl p-3 mx-auto"
          src={CustomersLogoStripImage}
          alt="customers logos"
        />
      </Container>
    </>
  );
};