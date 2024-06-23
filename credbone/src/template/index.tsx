import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Colors from "./../template/Colors";
import Layout from "./../template/layout";

import Icons from "./../template/icons";
import "./../styles/demo.css";

import Buttons from "./buttons";
import Typeface from "./typeface";
import Landing from "./nav";
import Scroll from "../components/scroll";
import SubNavigation from "../components/subnav";
import CheckboxSwitchers from "./CheckboxSwitchers";
import InputsAndForms from "./InputsAndForms";

import Components from "./components";
import Popover from "../components/popover";
import RichThemePicker from "./richThemePicker";
import Ripple from "../components/Ripple";

import TooltipPopover from "./TooltipPopover";
import Cards from "./Cards";
import Miscellaneous from "./Miscellaneous";

const Template: React.FC = () => {
  return (
    <view data-scroll=""  data-border="no">
      <group data-scroll="">
        <group
          data-adaptive-order="2"
          data-sticky="adaptive-top-bottom"

          //  data-space="10"
        >
          <group
            // data-radius="10"
            data-index="3"
            data-scroll-mask="false"
            data-elevation="1"
            data-background="main-background"
            data-backdrop="10"
            data-contain=""
            data-shrink="no"
          >
            <Scroll wheelEnabled={true}>
              <SubNavigation />
            </Scroll>
          </group>
        </group>

        <group>
          <Routes>
            <Route path="/" element={<Navigate replace to="Components" />} />
            <Route path="Components" element={<Components />} />
            <Route path="Typeface" element={<Typeface />} />
            <Route path="Icons" element={<Icons />} />
            <Route path="Buttons" element={<Buttons />} />
            <Route path="CheckboxSwitchers" element={<CheckboxSwitchers />} />
            <Route path="Colors" element={<Colors />} />
            <Route path="Layout" element={<Layout />} />
            <Route path="Navigation" element={<Landing />} />
            <Route path="InputsAndForms" element={<InputsAndForms />} />
            <Route path="TooltipAndPopover" element={<TooltipPopover />} />
            <Route path="CardsAndList" element={<Cards />} />
            <Route path="Miscellaneous" element={<Miscellaneous />} />
          </Routes>
        </group>

        <group
          //    data-position="absolute"
          data-index="3"
          data-space-horizontal="30"
          data-bottom="30/90"
          data-width="auto"
          data-direction="column"
          data-sticky="bottom"
        >
          <Popover
            //hideOnScroll={false}
            content={<RichThemePicker />}
            // data-length="600"
            data-space="5"
            data-radius="10"
            data-backdrop="10"
            // data-elevation="2"
            data-width="auto"
          >
            <group>
              <Ripple>
                <group
                  data-contain=""
                  data-length="60"
                  data-height="60"
                  data-radius="30"
                  data-background="context"
                  data-cursor="pointer"
                  data-shrink="no"
                  data-elevation="6"
                  data-interactive=""
                >
                  <icon data-position="center">opacity</icon>
                </group>
              </Ripple>
            </group>
          </Popover>
        </group>
        <group data-height="100">

        </group>
      </group>
    </view>
  );
};

export default Template;
