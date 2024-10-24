import React, { useState } from "react";
import Button from "../components/button";
import { glyphs } from "./utils/glyphData";
import Tooltip from "../components/tooltip";
import StuckReporter from "../components/StuckReporter";

const previewText = "The quick brown fox jumps over the lazy dog";

const textSizeOptions = [
  { value: "small", display: "12" },
  { value: "medium", display: "16" },
  { value: "large", display: "18" },
  { value: "larger", display: "20" },
  { value: "x-large", display: "24" },
  { value: "xx-large", display: "32" },
  { value: "xxx-large", display: "48" },
];

const initialFontData = [
  // { name: 'Thin 100', weight: 100, previewText: previewText },
  { name: "Light 300", weight: 300, previewText: "🦊 " + previewText },
  { name: "Regular 400", weight: 400, previewText: previewText + " 🐶" },
  { name: "Medium 600", weight: 600, previewText: previewText },
  { name: "Bold 700", weight: 700, previewText: previewText },
  { name: "Bold 800", weight: 800, previewText: previewText },
];

const Typeface: React.FC = () => {
  const [textSizeIndex, setTextSizeIndex] = useState(4); // 'x-large' is the 5th item, index 4

  const increaseTextSize = () => {
    setTextSizeIndex((prevIndex) =>
      Math.min(prevIndex + 1, textSizeOptions.length - 1)
    );
  };

  const decreaseTextSize = () => {
    setTextSizeIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const currentTextSize = textSizeOptions[textSizeIndex];

  const updatedFontData = initialFontData.map((font) => ({
    ...font,
    textSize: currentTextSize.value,
  }));

  return (
    <group
      data-space="30"
      data-column-gap="15"
      data-align="start"
      data-type="column"
    >
      <group
        data-radius="15"
        data-background="main"
        data-color="main-text"
        data-break="break-word"
      >
        <group
          data-space="30"
          data-border="none"
          data-scroll=""
          data-direction="column"
          data-gap="20"
        >
          <text data-weight="700" data-text-size="xxx-large" data-wrap="wrap">
            Typeface
          </text>

          <text data-wrap="wrap" data-opacity="60" data-line="1.5">
            <text data-weight="700">Gilroy</text> Font Family was designed by
            Radomir Tinkov and published by Radomir Tinkov. Gilroy contains 20
            styles and family package options.
          </text>
        </group>
      </group>

      <group data-radius="15" data-elevation="1">
        <StuckReporter>
          {(isSticky) => (
              <group
              data-space={isSticky ? "15" : ""}
              data-index="3"
              data-sticky="top"
                 data-duration=".125"
            >
              <group
                data-backdrop={isSticky ? "10" : ""}
               data-space="15"
                data-elevation={isSticky ? "1" : ""}
                data-radius={isSticky ? "10" : ""}
             //   data-duration=".125"
                data-align="center"

              >
                <text data-space="10" data-weight="600">
                  Preview
                </text>
                <group
                  data-background="context"
                  data-border="outline"
                  data-contain=""
                  data-radius="5"
                  data-width="auto"
                  data-wrap="no"
                  data-length="40"
                  data-position="right"
                >
                  <Tooltip content="Decrease Text Size">
                    <Button
                      data-radius="none"
                      data-index="3"
                      large
                      icon="remove"
                      onClick={decreaseTextSize}
                    ></Button>
                  </Tooltip>
                  <group
                    data-length="40"
                    data-align="center"
                    data-justify="center"
                    data-ratio="1:1"
                    data-border=""
                  >
                    <text data-text-align="center">
                      {currentTextSize.display}
                    </text>
                  </group>
                  <Tooltip content="Increase Text Size">
                    <Button
                      data-radius="none"
                      data-index="3"
                      large
                      icon="add"
                      onClick={increaseTextSize}
                    ></Button>
                  </Tooltip>
                </group>
              </group>
            </group>
          )}
        </StuckReporter>
        <separator data-horizontal=""></separator>
        <group data-radius-bottom="15" data-contain="">
          {updatedFontData.map((font, index) => (
            <group
              key={index}
              data-space="30"
              data-gap="15"
              data-border=""
              data-background="main-background"
              data-interactive=""
            >
              <group data-opacity="40">{font.name}</group>
              <group
                data-contain=""
                data-wrap="wrap"
                data-cursor="auto"
                data-weight={font.weight}
                data-text-size={font.textSize}
              >
                <group
                  //  contentEditable={true}
                  contentEditable="plaintext-only"
                  data-break="break-word"
                  data-duration=".225"
                  suppressContentEditableWarning={true}
                >
                  {font.previewText}
                </group>
              </group>
            </group>
          ))}
        </group>
      </group>

      <group
        data-radius="15"
        data-elevation="1"
        //data-contain=""
      >
        <StuckReporter>
          {(isSticky) => (
            <group
              data-space={isSticky ? "15" : "10"}
              data-index="3"
              data-sticky="top"
                 data-duration=".125"
            >
              
              <group
                data-backdrop={isSticky ? "10" : ""}
                data-space={isSticky ? "10" : ""}
                data-elevation={isSticky ? "1" : ""}
                data-radius={isSticky ? "10" : ""}
              //  data-duration=".125"
              >
                <text data-space="10" data-weight="600">
                  Glyphs
                </text>
              </group>
            </group>
          )}
        </StuckReporter>
        <separator data-horizontal=""></separator>
        <group data-radius-bottom="15" data-contain="">
          <group
            data-type="grid"
            data-grid-template="50"
            data-text-size="larger"
            data-gap="1"
            data-contain=""
          >
            {glyphs.map((glyphs, index) => (
              <group
                key={index}
                data-border=""
                data-ratio="1:1"
                data-background={
                  glyphs.primary ? "main" : glyphs.secondary ? "secondary" : ""
                }
                data-color={
                  glyphs.primary
                    ? "main-text"
                    : glyphs.secondary
                    ? "secondary-text"
                    : ""
                }
                data-glyph-size={glyphs.large ? "double" : ""}
                data-text-size={glyphs.large ? "64" : ""}
                data-align="center"
                data-justify="center"
                data-interactive=""
                //data-radius="10"
              >
                <text>{glyphs.content}</text>
              </group>
            ))}
          </group>
        </group>
      </group>
    </group>
  );
};

export default Typeface;
