import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "./subroutesData";
import Tooltip from "../../components/tooltip";
import {ChevronLeft, ChevronRight } from "lucide-react";
import Ripple from "../../components/Ripple";

const BottomNav: React.FC = () => {
  const location = useLocation();
  const currentIndex = navItems.findIndex((item) =>
    location.pathname.includes(item.to)
  );

  const prevItem = currentIndex > 0 ? navItems[currentIndex - 1] : null;
  const nextItem = currentIndex < navItems.length - 1 ? navItems[currentIndex + 1] : null;

  const isLastItem = currentIndex === navItems.length - 1;

  return (


<group data-space="30" data-gap="30">
<separator data-horizontal=""></separator>

<group data-wrap="no" data-gap="10" data-space-vertical="30">
  {prevItem && (
<Ripple>
<Link
        data-ink-color="neutral"
        data-contain=""
      data-interactive=""
      data-over-color="neutral"
      data-type="group"
      data-width="auto"
      data-border="inset"
      data-space="20"
      data-radius="15"
      data-gap="20"
      data-drag="none"
      data-wrap="no"
      to={`/${prevItem.to}`}
    >


      <group
        data-width="auto"
        data-height="fit"
        data-align="center"
        data-justify="center"
        data-radius="30"
       
      >
        <ChevronLeft  />
      </group>


      {isLastItem && (
               <group data-direction="column" data-width="auto" data-contain="">
               <text data-opacity="30">Prevous</text>
               <text data-weight="700" data-ellipsis="" >
                 {prevItem.label}
               </text>
             </group>
  )}



    </Link>
</Ripple>
  )}

  {nextItem && (
    <Ripple>
      <Link
        data-ink-color="neutral"
        data-contain=""
        data-background="adaptive-gray"
        data-interactive=""
        data-over-color="neutral"
        data-type="group"
        data-width="auto"
        data-length="forcefit"
        //   data-border=""
        data-space="20"
        data-radius="15"
        data-gap="20"
        data-drag="none"
        data-wrap="no"
        to={`/${nextItem.to}`}
      >
        <group data-direction="column" data-width="auto" data-contain="">
          <text data-opacity="30">Up Next</text>
          <text data-weight="700" data-ellipsis="" >
            {nextItem.label}
          </text>
        </group>

        <group
        data-width="auto"
        data-position="right"
            data-height="fit"
            data-align="center"
            data-justify="center"
            data-interact=""
          >
            <ChevronRight />
          </group>
      </Link>
    </Ripple>
  )}
</group>
</group>

  );
};

export default BottomNav;