import React from "react";
import { Layout } from "./Components/Layout";

import { MiddlePart } from "./Components/MiddlePart";
import { HomeTopSection } from "./Components/HomeTopSection";

import styled from "styled-components";
import Footer from "./Components/Footer";

const Styles = styled.div`
  width: 100vw;
  height: 160vh;
  background-image: url("/back.jpg");
  background-size: 100% 100%;

  @media (max-width: 576px) {
    height: 250vh;
  }
`;

export default function Home() {
  return (
    <Styles>
      <HomeTopSection />
          <MiddlePart />
          
    </Styles>
  );
}
