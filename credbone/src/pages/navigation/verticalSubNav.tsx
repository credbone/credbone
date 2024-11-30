import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Ripple from "../../components/Ripple";

import { navItems } from "./subroutesData";
import Popover from "../../components/popover";
import RichThemePicker from "../../template/richThemePicker";
import { useNavContext } from "../../components/NavProvider";

interface VerticalSubNavProps {
  isOpen: boolean; // Prop to accept the open/close state
  onClose: () => void;
  // navRef: React.RefObject<HTMLDivElement>;
}

const VerticalSubNav: React.FC<VerticalSubNavProps> = ({ isOpen, onClose }) => {

  const context = useNavContext();
  const { isNavOpen, setIsNavOpen } = context;


  const handleItemClick = () => {
    setIsNavOpen(false);
  };
  
  const location = useLocation();

  const navRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const [indicatorTop, setIndicatorTop] = useState(0);
  const [indicatorHeight, setIndicatorHeight] = useState(0);

  useEffect(() => {
    const updateIndicator = () => {
      const currentIndex = navItems.findIndex((item) =>
        location.pathname.endsWith(item.to)
      );
      const activeItem = navRefs.current[currentIndex];

      if (activeItem) {
        const rect = activeItem.getBoundingClientRect();
        const parentRect =
          activeItem.parentElement?.parentElement?.getBoundingClientRect();
        const parentScrollTop =
          activeItem.parentElement?.parentElement?.scrollTop || 0;

        const top = rect.top - (parentRect?.top || 0) + parentScrollTop;
        const height = rect.height ?? 0;

        setIndicatorTop(top);
        setIndicatorHeight(height);

        window.requestAnimationFrame(() => {
          activeItem.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        });
      }
    };

    if (document.fonts.ready) {
      document.fonts.ready.then(updateIndicator);
    } else {
      updateIndicator();
    }

    // Optional: Recalculate on window resize to handle responsive layouts
    window.addEventListener("resize", updateIndicator);

    const parentElement = navRefs.current[0]?.parentElement;
    let resizeObserver: ResizeObserver | null = null;

    if (parentElement) {
      resizeObserver = new ResizeObserver(() => updateIndicator());
      resizeObserver.observe(parentElement);
    }

    return () => {
      window.removeEventListener("resize", updateIndicator);
      if (resizeObserver && parentElement) {
        resizeObserver.unobserve(parentElement);
      }
    };
  }, [location.pathname]);

  // useEffect(() => {
  //   const updateIndicator = () => {
  //     const currentIndex = navItems.findIndex(item => location.pathname.endsWith(item.to));
  //     const activeItem = navRefs.current[currentIndex];

  //     if (activeItem) {
  //       const { left, width } = activeItem.getBoundingClientRect();
  //       const parentLeft = activeItem.parentElement?.getBoundingClientRect().left || 0;
  //       setIndicatorStyle({ left: left - parentLeft, width });

  //       // Scroll the active item into view
  //       window.requestAnimationFrame(() => {
  //         activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  //       });
  //     }
  //   };

  //   if (document.fonts.ready) {
  //     document.fonts.ready.then(updateIndicator);
  //   } else {
  //     updateIndicator();
  //   }

  //   // Optional: Recalculate on window resize to handle responsive layouts
  //   window.addEventListener('resize', updateIndicator);
  //   return () => window.removeEventListener('resize', updateIndicator);

  // }, [location.pathname]);

  return (
    <>
      {/* <group
        onClick={onClose}
        data-position="absolute"
        data-height="fit"
        data-name="vertical-subnav-dim"
        data-adaptive="mobile"
        data-visibility={isOpen ? "visible" : "hidden"}
        data-opacity={isOpen ? "100" : "0"}
        data-duration=".225"
      ></group> */}
      <group
        // ref={navRef}
        data-expanded={isOpen ? "open" : "close"}
        data-name="vertical-subnav"
        //    data-adaptive="desktop"
      //  data-length={isOpen ? "300" : "0"}
        data-height="fit"
        data-contain=""
        data-direction="column"
        data-wrap="no"
      >
        <group data-height="fit" data-scroll="" data-scrollbar="none">
          <group
            //data-timing="fancy"
            data-name="vertical-indicator"
            data-position="absolute"
            data-background="main"
            style={{
              transform: `translateY(${indicatorTop}px)`,
              height: `${indicatorHeight}px`,
            }}
          ></group>



          <group
            data-weight="600"
            data-wrap="no"
            data-gap="5"
            data-space="30"
            data-direction="column"
          >

<group data-background="red" data-adaptive="mobile" onClick={onClose} data-space="15">
            back
          </group>

            {navItems.map((item, index) => (
              <group key={index}>
                {item.separator === "true" && (
                  <separator data-horizontal="" data-interval="30"></separator>
                )}
                <NavLink
                  data-animation-name="appear-left"
                  data-fill-mode="backwards"
                  data-animation-duration={2 + index * 0.25}
                  data-touch-action="manipulation"
                  data-type="group"
                  to={`./${item.to}`}
                  ref={(el: HTMLAnchorElement | null) =>
                    (navRefs.current[index] = el)
                  }
                  //  data-width="auto"
                  data-name="nav-item"
                  data-contain=""
                  data-shrink="no"
                  data-interactive=""
                  data-radius="10"
                  onClick={() => {
                 //   onClose();
                    handleItemClick();
                  }}
                >
                  <Ripple>
                    <group
                      data-space="15"
                      data-wrap="no"
                      data-align="center"
                      data-gap="5"
                    >
                      <text data-ellipsis="">{item.label}</text>

                      {item.new === "true" && (
                        <group
                          data-background="red"
                          data-space="3"
                          data-width="auto"
                          data-radius="5"
                          data-position="right"
                        ></group>
                      )}
                    </group>
                  </Ripple>
                </NavLink>
              </group>
            ))}
          </group>

          <group
            data-position="bottom"
            // data-sticky="bottom"
          >
            <group data-space-horizontal="30">
              <separator data-horizontal=""></separator>
            </group>

            <group data-space="30" data-background="main-background">
              <Popover
                placement="top"
                content={
                  <group
                    data-animation-name="appear-bottom"
                    data-fill-mode="backwards"
                    data-animation-duration="1.25"
                    data-length="700"
                  >
                    <group
                      data-gap="5"
                      data-wrap="wrap"
                      data-direction="column"
                    >
                      <RichThemePicker />
                    </group>
                  </group>
                }
                data-space="5"
                data-radius="10"
                data-backdrop="10"
                data-width="auto"
              >
                <group
                  data-cursor="pointer"
                  data-radius="10"
                  data-align="center"
                  data-interactive=""
                  data-gap="10"
                  data-space="15"
                >
                  <text data-weight="700" data-ellipsis="">
                    Change Theme
                  </text>
                  {/* 
                  <group data-interact="" data-length="50"  data-display="none" data-position="right" data-radius="3"  data-contain="">

<group data-background="white" data-length="10" data-height="20"><group data-length="10" data-height="20"  data-justify="center" data-background="main-light" data-align="center"></group></group>
<group data-length="10" data-height="20"  data-justify="center" data-background="main" data-align="center"></group>
<group data-length="10" data-height="20"  data-justify="center" data-background="main-dark" data-align="center"></group>
<group data-length="10" data-height="20"  data-justify="center" data-background="secondary-dark" data-align="center"></group>
<group data-length="10" data-height="20"  data-justify="center" data-background="secondary" data-align="center"></group>

</group> */}
                </group>
              </Popover>
            </group>
          </group>
        </group>

        
        
      </group>
      
    </>
  );
};

export default VerticalSubNav;