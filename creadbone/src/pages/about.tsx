import React from "react";
import { Logo } from "../resources/logo";

function About() {
  return (
    <view data-space="50" data-scroll=""  data-border="no">
      <group  data-gap="30" data-direction="column">
        <group data-max-length="200">
          <Logo />
        </group>

        <text data-wrap="wrap" data-text-size="medium" data-length="610" data-line="1.5" data-light="">
        Experimental App, featuring a curated collection of UI components and patterns as React components.
         Each element is crafted to enhance your applications with both beauty and functionality,
          ensuring seamless integration and easy customization. Dive in, explore, 
          and elevate your design capabilities effortlessly using our intuitive interface.
        </text>
      </group>
    </view>
  );
}

export default About;