import React, { useState } from "react";
import Button from "./../components/button";

import {
  SvgHamburger,
  SvgHamburgerToLeft,
  SvgHamburgerToRight,
  SvgLoader,
  SvgLoaderCircle,
  SvgMinus,
  SvgPlus,
} from "./../components/svg";
import Ripple from "../components/Ripple";
import Tooltip from "../components/tooltip";
import { IconHeart } from "../components/icon/credIcons";



const Buttons: React.FC = () => {
  const [customState, setcustomState] = useState(false);

  return (
    <group data-space="30" data-gap="30" data-align="start">
      <group data-direction="column" data-gap="10">
        <text
          data-weight="700"
          data-text-size="xxx-large"
          data-wrap="wrap"
          data-color="main"
          data-ellipsis=""
        >
          Buttons
        </text>
        <text data-wrap="wrap" data-length="300" data-line="1.5" data-light="">
          Buttons allow users to take actions, and make choices, with a single
          tap.
        </text>
      </group>





<Ripple>
<group data-wrap="no"  data-width="auto" data-ink-color="main-dark" data-align="center" data-cursor="pointer" data-contain="" data-background="main" data-color="main-text" data-interactive="" data-space="30" data-radius="15" data-gap="20">

<icon data-icon-size="x-large" data-icon-weight="700" data-cast-shadow="1">arrow_outward</icon>
</group>
</Ripple>






      <group
        data-gap="30"
        data-align="start"

      >


        <group
          data-height="auto"
data-width="auto"

        >

          <group data-contain="" data-gap="1"  data-width="auto" data-direction="column">
            <group data-width="auto" data-border="" data-space-vertical="30"> <Button data-space-horizontal="30" data-min-length="160" large primary text="Primary" /> </group>
            <group data-width="auto" data-border="" data-space-vertical="30"> <Button data-space-horizontal="30" data-min-length="160" large secondary text="Secondary" /> </group>
            <group data-width="auto" data-border="" data-space-vertical="30"> <Button data-space-horizontal="30" data-min-length="160" large accent text="Accent" /> </group>
            <group data-width="auto" data-border="" data-space-vertical="30"> <Button data-space-horizontal="30" data-min-length="160" large outline text="Outline" textFirst={false} /> </group>
            <group data-width="auto" data-border="" data-space-vertical="30"> <Button data-space-horizontal="30" data-min-length="160" large highlight text="Highlighted"></Button> </group>
            <group data-width="auto" data-border="" data-space-vertical="30"> <Button data-space-horizontal="30" data-min-length="160" large text="Simple Button" /> </group>
          </group>


        </group>
        <group
         data-width="auto"
          data-height="auto"
          data-max-height="fit"
          data-radius="15"
  
        > 
          <group data-contain="">
            <group
             data-direction="column"
              data-gap="1"
              data-contain=""
              data-border=""
            >
              <group data-align="center" data-justify="center"  data-border="" data-space="30" > <Button primary mini rounded icon="close" /> </group>
              <group data-align="center" data-justify="center"  data-border="" data-space="30" > <Button outline mini rounded icon="arrow_outward" /> </group>
              <group data-align="center" data-justify="center"  data-border="" data-space="30" > <Button primary mini rounded ><icon> <SvgLoader /> </icon></Button> </group>
              <group data-align="center" data-justify="center"  data-border="" data-space="30" > <Button secondary mini large icon="arrow_outward" /> </group>
              <group data-align="center" data-justify="center"  data-border="" data-space="30" > <Button outline mini large icon="arrow_downward" /> </group>
              <group data-align="center" data-justify="center"  data-border="" data-space="30" > <Button accent mini large icon="arrow_forward" /> </group>

            </group>
          </group>
        </group>

        <group
         data-width="auto"
          data-height="auto"
          data-max-height="fit"
          data-radius="15"
  
        > 
          <group data-contain="">
            <group
             data-direction="column"
              data-gap="1"
              data-contain=""
              data-border=""
            >


              <group data-align="center" data-gap="30" data-border="" data-space="30" data-wrap="no"> <Tooltip content="Hamburger to Close"><group data-width="auto"><Button mini primary large toggleClassName="open" > <icon> <SvgHamburger /> </icon> </Button></group></Tooltip><separator data-vertical="" data-height="fit"></separator> <group data-contain=""><text data-wrap="wrap" data-length="240" data-line="1.5" data-opacity="50">Feature allows you to pass and toggle custom class names via props</text></group> </group>
              <group data-align="center" data-gap="30" data-border="" data-space="30" data-wrap="no"> <Tooltip content="Hamburger to Left Arrow"><group data-width="auto"><Button mini large toggleClassName="open" toggleState={true}> <icon> <SvgHamburgerToLeft/> </icon> </Button> </group></Tooltip></group>
              <group data-align="center" data-gap="30" data-border="" data-space="30" data-wrap="no"> <Tooltip content="Hamburger to Right Arrow"><group data-width="auto"><Button mini large toggleClassName="open" toggleState={true}> <icon> <SvgHamburgerToRight/> </icon> </Button> </group></Tooltip></group>
              <group data-align="center" data-gap="30" data-border="" data-space="30" data-wrap="no"> <Tooltip content="Plus to Minus"><group data-width="auto"><Button mini large toggleClassName="open"> <icon> <SvgPlus /> </icon> </Button> </group></Tooltip></group>
              <group data-align="center" data-gap="30" data-border="" data-space="30" data-wrap="no"> <Tooltip content="Minus to Plus"><group data-width="auto"><Button mini large toggleClassName="open"> <icon> <SvgMinus /> </icon> </Button> </group></Tooltip></group>

              <group data-align="center" data-gap="30" data-border="" data-space="30" data-wrap="no"> 
                <Tooltip content="Bookmark">
                  <group data-width="auto">
                  <Button mini large   
                    onClick={() => setcustomState((prev) => !prev)}
               >
                
                 <icon>         
                  <group
              data-animation-duration="4.75"
              data-fill-mode="backwards"
              data-animation-name={customState ? "bounce" : ""}
              data-color={customState ? "peach-dark" : ""}
            >
              <IconHeart fill={customState} />
            </group> </icon> </Button>
                   </group>
                  </Tooltip>
                  </group>



         



            </group>
          </group>
        </group>


        <group
          data-height="auto"
data-width="auto"

        >

          <group data-contain="" data-gap="1"  data-width="auto" data-direction="column">
            <group data-width="auto" data-border="" data-space-vertical="30"> 
              
              <group data-wrap="no" data-contain="" data-radius="10" data-width="auto" data-background="main" data-color="main-text">
              <Button data-radius="0" data-space-horizontal="30" large primary text="Primary" /> 
              <separator data-vertical="" data-height="fit"></separator>
              <Button data-radius="0" mini large primary icon="apps" />
              </group>
               </group>


               <group data-width="auto" data-border="" data-space-vertical="30"> 
              
              <group data-wrap="no" data-contain="" data-radius="10" data-width="auto" data-background="main" data-color="main-text">
              <Button data-radius="0"  data-space-horizontal="30" primary large highlight text="Print" /> 
              <separator data-vertical="" data-height="fit"></separator>
              <Button data-radius="0" mini large primary icon="scan" />
              </group>
               </group>






               <group data-width="auto" data-border="" data-space-vertical="30"> 
              
              <group data-wrap="no" data-contain="" data-radius="10" data-width="auto" data-background="secondary" data-color="secondary-text" >

              
              <Button data-radius="0" data-index="1" data-space-horizontal="30" secondary  large  text="Browse..." /> 
              <separator data-vertical="" data-height="fit"></separator>
              <Button data-radius="0"  secondary mini large  icon="photo_camera" />
              </group>
               </group>

          </group>
          


        </group>





      </group>
    </group>
  );
};
export default Buttons;
