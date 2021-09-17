import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStartedLight.js";
import Footer from "components/footers/MiniCenteredFooter.js";

import EasyInstallImg from "../images/setup.svg";
import { ReactComponent as OneIcon } from "../images/round.svg";
import { ReactComponent as TwoIcon } from "../images/2.svg";


const HighlightedText = tw.span`text-blue-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <FeatureStats />
      <Features
        heading={
          <>
            {" "}
            Amazing <HighlightedText> Features </HighlightedText>{" "}
          </>
        }
      />{" "}
      <MainFeature
        heading={
          <>
            {" "}
            How does it work?
            <HighlightedText> Automatically </HighlightedText>{" "}
          </>
        }
      />{" "}
      <MainFeature
        imageSrc={EasyInstallImg}
        subheading={<>Integrate With Any Website</>}
        textOnLeft={false}
        heading={
          <>
            {" "}
            Easily installed in <HighlightedText>2-minutes</HighlightedText> on any CMS or web hosting platform
          </>
        }
        description={<></>}
        features={[
          {
            Icon: OneIcon,
            title: "Copy your generated code",
            description: "",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
          },
          {
            Icon: TwoIcon,
            title: "Paste in your app's HEAD tag",
            description: "",
            iconContainerCss: tw`bg-red-300 text-red-800`
          },
        ]}
      />{" "}
      <Testimonial
        textOnLeft={true}
      />{" "}
      <Pricing
        heading={
          <>
            {" "}
            Ready to Become <HighlightedText> Accessible </HighlightedText> ? {" "}
          </>
        }
      />{" "}
      <FAQ
        heading={
          <>
            {" "}
            <HighlightedText> FAQ </HighlightedText>{" "}
          </>
        }
      />{" "}
      <GetStarted />
      <Footer />
    </AnimationRevealPage>
  );
};
