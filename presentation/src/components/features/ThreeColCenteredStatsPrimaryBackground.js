import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import {
  Container as ContainerBase,
  ContentWithPaddingXl,
} from "components/misc/Layouts";
import { SectionDescription } from "components/misc/Typography";

const Container = tw(
  ContainerBase
)`my-8 lg:my-10 bg-blue-900 text-gray-100 -mx-8 px-8`;
const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl`;
const Subheading = tw(SubheadingBase)`text-gray-100 text-center`;
const Description = tw(
  SectionDescription
)`text-gray-400 text-center mx-auto max-w-screen-md`;

const StatsContainer = tw.div`mt-8 flex flex-row items-center justify-center flex-wrap max-w-screen-lg justify-between mx-auto`;
const Stat = tw.div`flex flex-col text-center p-4 tracking-wide`;
const StatKey = tw.div`text-xl font-medium`;
const StatValue = tw.div`text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black`;

export default ({
  subheading = "",
  heading = "One billion people, ~20% of the world’s population",
  description = "Making the web accessible is about leveling the playground for 20% of the world's population. Imagine what society gain if 1.5 Billion (!) people who are as smart, as talented, and as driven as anybody, get access to the world's largest resource pool - the Internet.",
  stats = [
    {
      key: "Disabled People",
      value: "1.5B",
    },
    {
      key: "Blindness And Visual Impairment",
      value: "253M",
    },
    {
      key: "Intellectual Disability",
      value: "200M",
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {" "}
          {subheading && <Subheading> {subheading} </Subheading>}{" "}
          <Heading> {heading} </Heading>{" "}
          {description && <Description> {description} </Description>}{" "}
        </HeadingContainer>{" "}
        <StatsContainer>
          {" "}
          {stats.map((stat, index) => (
            <Stat key={index}>
              <StatValue> {stat.value} </StatValue>{" "}
              <StatKey> {stat.key} </StatKey>{" "}
            </Stat>
          ))}{" "}
        </StatsContainer>{" "}
      </ContentWithPaddingXl>{" "}
    </Container>
  );
};
