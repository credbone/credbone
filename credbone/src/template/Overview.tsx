import React, { useState } from "react";




import sectionImage_1 from "../styles/images/samples/wide_res_67.jpg";
import sectionImage_2 from "../styles/images/samples/wide_res_66.jpg";
import sectionImage_3 from "../styles/images/samples/wide_res_61.jpg";
import sectionImage_4 from "../styles/images/samples/wide_res_63.jpg";

import Ripple from "../components/Ripple";
import { Link } from "react-router-dom";

const groupedLinksArray = [
  {
    title: "Visual\nComponents",
    image:sectionImage_1,
    description:
      "Focuses on elements that enhance the visual appeal and provide context.",
    items: [
      { title: "Icons\n& Shapes", description: "Beautifully crafted and carefully designed icons.", to: "/Components/Icons", },
      { title: "Colors\n& Shades", description: "Color system can assist in crafting a color palette...", to: "/Components/Colors", },
      { title: "Cards\n& Lists", description: "Organized containers for content display.", to: "/Components/CardsAndList", },
      
    ],
  },
  {
    title: "Interactive\nElements",
    image:sectionImage_2,
    description:
      "Interactive components that facilitate user actions and engagement.",
    items: [
      { title: "Checkbox\n& Switches", description: "Customizable toggle elements for user selection.", to: "/Components/CheckboxSwitchers", },
      { title: "Buttons", description: "Allow users to take actions, and make choices, with a single tap.", to: "/Components/Buttons", },
      { title: "Input\n& Forms", description: "Deals with input fields and form-related user interface elements.", to: "/Components/InputsAndForms", },
      { title: "Tooltip\n& Popover", description: "Provide additional information and context on hover or focus.", to: "/Components/TooltipAndPopover", },
      { title: "Modals\n& Alerts", description: "Customizable modal component supporting various sizes, triggers, and animations.", to: "/Components/Modal", },
    ],
  },
  {
    title: "Structure\n& Navigation",
    image:sectionImage_3,
    description:
      "Components for organizing and navigating the interface effectively.",
    items: [
      { title: "Navigation\n& Tabs", description: "Elements to navigate between different views or sections within an app.", to: "/Components/Navigation", },
      { title: "Layout\n& Switches", description: "Concerns the arrangement and organization of elements in a design, often utilizing grids.", to: "/Components/Layout", },

    ],
  },

  {
    title: "Miscellaneous\n& Demos",
    image:sectionImage_4,
    description:
      "Examples designed to showcase flexibility and additional interface functionalities.",
    items: [

      { title: "Dashboard", description: "Demo features a simple dashboard interface designed for monitoring hardware.", to: "/Components/Dashboard", },
      { title: "Demos\n& Samples", description: "Sample dashboards for quick insights.", to: "/Components/QuickDemos", },
      { title: "Miscellaneous", description: "Encompasses a variety of small, diverse UI components.", to: "/Components/Miscellaneous", },
    ],
  },

];

const Overview: React.FC = () => {
  return (
    <group data-space="30" data-gap="30" data-wrap="no" data-direction="column">
      <group data-direction="column" data-wrap="no">
        <group data-direction="column" data-gap="10">
          <text
            data-weight="700"
            data-text-size="xxx-large"
            data-wrap="wrap"
            data-ellipsis=""
            data-opacity="10"
          >
            Overview
          </text>
          <text
            data-wrap="wrap"
            data-max-length="400"
            data-line="1.5"
            data-light=""
          >
            Components are interactive elements used to build a user interface.
            They can be grouped into categories according to their function:
            Action, Containment, Communication, Navigation, Selection, and Text
            Input.
          </text>
        </group>
      </group>

      <group data-gap="30">
        {groupedLinksArray.map((group, index) => (
          <group key={index} data-direction="column" data-gap="20">



        {index !== 0 &&  <><separator data-horizontal="" data-interval="30"></separator><group data-height="20"></group></>}

              <group data-direction="column" data-align="start">
                <picture
                  data-radius="20"
                  data-contain=""
                  data-brightness="adaptive"
                  data-background="grey-light"
                  data-position="absolute"
                >
                  <img src={group.image} alt={group.description} />
                </picture>

                <group data-space="30" data-gap="10">
                {/* <group
                      data-space="20"
                    
                      data-width="auto"
                      data-direction="column"
                      data-radius="15"

                    >
                      <text
                        data-weight="700"
                        data-text-size="64"
                        data-color="white"
                        data-position="center"
                      >
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </text>
                    </group> */}

                    <group
                      data-space="30"
                      data-width="auto"
                      data-align="center"
                      data-justify="center"
                      data-radius="15"
                      data-backdrop="20"
                      data-color="white"
                      data-gap="30"
                    >
                     
                      <text
                        data-text-size="x-large"
                        data-weight="700"
                        data-wrap="preline"
                        data-ellipsis=""
                      >
                        {group.title}
                      </text>
                    </group>

                  <group
                    data-space="30"
                    data-width="auto"
                    data-direction="column"
                    data-radius="15"
                    data-background="main"
                    data-color="main-text"
                  >
                    <text
                      data-wrap="wrap"
                      data-max-length="200"
                      data-line="1.5"
                      data-weight="600"
                    >
                      {group.description}
                    </text>
                  </group>
                </group>
              </group>


            <group
              data-gap="20"
              data-type="grid"
              data-grid-template="240"
              data-weight="600"
            >
              {group.items.map((item, index) => (
                <Link
                  data-drag="none"
                  data-type="group"
                  to={item.to}
                  key={index}
                  data-interactive=""
                  data-over-color="none"
                >
                  <Ripple>
                    <group
                      data-radius="20"
                     data-react="background"
                      //data-width="auto"

                      data-contain=""
                      //  data-min-height="200"
                      //  data-radius="20"

                      data-direction="column"
                      data-wrap="no"
                      data-background="highlight"
                    >
                      <group
                        data-index="1"
                        data-direction="column"
                        data-gap="15"
                        data-space="30"
                        data-height="fit"
                        data-wrap="no"
                      >
                        <text
                          // data-text-size=""
                          //   data-height="50"
                          data-contain=""
                          //data-weight="100"
                          data-opacity="20"
                        >
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </text>

                        <text
                          data-text-size="medium"
                          data-weight="700"
                          data-wrap="preline"
                          data-ellipsis=""
                        >
                          {item.title}
                        </text>
                      </group>
                    </group>
                  </Ripple>

                  <group data-space="20" data-react="color">

                    <text
                      data-ellipsis=""
                      data-wrap="wrap"
                      data-line="1.5"
                      data-max-length="300"
                      data-opacity="60"
                    >
                      {item.description}
                    </text>
                  </group>
                </Link>
              ))}
            </group>
          </group>
        ))}
      </group>
    </group>
  );
};

export default Overview;