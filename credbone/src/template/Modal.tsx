import React from "react";
import sampleImage from "../styles/images/samples/res_50.jpg";

import { useModal } from "../components/Modal";
import Search from "../pages/search/search";
import TooltipPopover from "./TooltipPopover";
import StuckReporter from "../components/StuckReporter";
import ThemeToggle from "../components/themeToggle";


const Modal: React.FC = () => {
  const { openModal, closeModal } = useModal(); // Use the modal hook to control modal behavior

  const sampleContent = (
    <group
      data-space="30"
      data-max-length="400"
      data-max-height="fit"
      data-scroll=""
      data-gap="10"
      
    >
      <text data-line="20" data-color="main" data-text-size="medium"  data-wrap="wrap" data-weight="600" >
        This is a Modal Component
      </text>
      <text  data-line="20" data-wrap="wrap" >
      It
        uses context to manage multiple modals and ensures only the topmost
        modal can be interacted with when multiple are open.
      </text>
    </group>
  );


  const modalConfig = {
    "data-radius": "none",
    "data-margin": "0",
    "data-background": "none",
    "data-elevation": "none",
    "data-width": "fit",
    "data-scroll": "",
    "data-min-height":"fit",
    "data-contain": "scroll",
  };
  

  const  modalData = [
    { title: "Basic Modal", content: sampleContent, toolbar: false, header: true, },
    { title: " Modal with no Header", content: sampleContent, toolbar: true, header: false, },
    { title: "Info Modal", content: sampleContent, toolbar: true, header: true, },
 //   { title: "Modal With no header and Toolbar", content: ( <group data-max-length="400" data-max-height="fit" data-contain="">  </group> ), toolbar: false, header: false, },
   // { title: "Success Modal", content: ( <group data-length="500" data-max-height="fit" data-scroll=""> {demoModals} </group> ), toolbar: true, header: false, },
  ];

  const demoModals = (

    <group
    data-space="20"
    data-gap="15"
    data-weight="600"
    data-background="context"
  >
    {modalData.map(({ title, content, header, toolbar }, index) => (
      <group key={index} data-gap="15" data-name="separation">
        <separator data-horizontal=""></separator>
        <group>
          <group
            data-width="auto"
           
            data-interactive=""
            // data-interact="popover"
            data-space="15"
            data-radius="10"
            data-cursor="pointer"
            onClick={() =>
              openModal(
                `modal-map-${index}`,
                title,
                <group data-max-height="fit" data-contain="">
                  {content}
                </group>,
                header,
                toolbar
              )
            }
          >

            <text data-ellipsis="">Open {title}</text>

          </group>
        </group>
      </group>
    ))}
  </group>
  )



  return (
    <group
      data-space="30"
      data-gap="15"
      data-align="start"
      data-type="column"
      data-column-gap="15"
    >
      <group
        data-size="medium"
        data-height="auto"
        data-max-height="fit"
        data-radius="10"
        data-elevation="1"
        data-contain=""
      >
        <group
          data-background="main"
          data-contain=""
          // data-dark=""
          data-align="center"
        >
          <picture data-position="absolute" data-opacity="30">
            <img src={sampleImage} alt="" data-name="color-demo" />
          </picture>
          <group data-space="30" data-gap="30">
            <group data-color="main-text" data-direction="column" data-gap="10">
              <text
                data-weight="700"
                data-text-size="xxx-large"
                data-wrap="wrap"
                data-ellipsis=""
              >
                Modal
              </text>
              <text
                data-wrap="wrap"
                data-length="300"
                data-line="1.5"
                // data-light=""
              >
                Modals are pop-up windows that capture attention, appearing
                after a user action. They display important content or options,
                requiring interaction before closing, ensuring focus on key
                tasks.
              </text>
            </group>
          </group>
        </group>

        {demoModals}
      </group>
      <group
        data-size="medium"
        data-height="auto"
        data-max-height="fit"
        data-radius="10"
        data-elevation="1"
        data-contain=""
      >
        <group
          data-space="20"
          data-gap="15"
          data-weight="600"
          data-background="context"
        >
          <group data-gap="15" data-name="separation">
            <separator data-horizontal=""></separator>
            <group>
              <group
                data-width="auto"
                data-interactive=""
                data-space="15"
                data-radius="10"
                data-cursor="pointer"
                onClick={() =>
                  openModal(
                    "modal-1",
                    "Customized Popup",

                    <group data-min-height="fit">
                      <group
                        data-position="absolute"
                        data-height="fit"
                        data-background="main-background-top"
                        onClick={() => closeModal("modal-1")}
                      ></group>

                      <group
                        data-position="center"
                        data-max-length="500"
                        data-space="30"
                       // data-gap="30"
                      >
                        <group data-gap="20">
                          <text
                            data-weight="700"
                            data-text-size="x-large"
                            data-wrap="wrap"
                            data-ellipsis=""
                            data-animation-name="appear-bottom"
data-fill-mode="backwards"
data-animation-duration="2.25"
                          >
                            Custom Modal Window
                          </text>

                          <text 
                          
                          data-animation-name="appear-bottom"
data-fill-mode="backwards"
data-animation-duration="2"
                          
                          data-weight="600" data-wrap="wrap" data-line="20" data-max-length="400">
                            This demo showcases a highly customizable modal
                            window, configured through dynamic props and
                            attributes. It includes a custom close button,
                            highlighting the modal's flexibility and
                            adaptability for various use cases.
                          </text>
                        </group>
                        <StuckReporter>
                          {(isSticky) => (
                            <group
                              data-duration=".125"
                              data-space-horizontal={isSticky ? "30" : ""}
                              data-space-vertical="30"
                              data-sticky="top"

                            >
                              <group

data-animation-name="appear-bottom"
data-fill-mode="backwards"
data-animation-duration="1.75"

                                data-background="main"
                                data-color="main-text"
                                data-interactive=""
                                data-width="auto"
                                data-cursor="pointer"
                                data-space="15"
                                data-radius="10"
                                data-min-length="140"
                                data-align="center"
                                data-direction="column"
                                onClick={() => closeModal("modal-1")}
                              >
                                <text data-weight="700">Close</text>
                              </group>
                            </group>
                          )}
                        </StuckReporter>

                        <group
                          data-contain=""
                          data-radius="15"
                          data-elevation="2"

data-animation-name="appear-bottom"
data-fill-mode="backwards"
data-animation-duration="1.5"

                        >
                          {demoModals}
                        </group>
                        <group data-height="120"></group>
                      </group>
                    </group>,
                    false,
                    false,
                    modalConfig,
                    0
                  )
                }
              >
                <text>Open Customized Demo</text>
              </group>
            </group>
          </group>

          <group data-gap="15" data-name="separation">
            <separator data-horizontal=""></separator>
            <group>
              <group
                data-width="auto"
                data-interactive=""
                data-space="15"
                data-radius="10"
                data-cursor="pointer"
                onClick={() =>
                  openModal(
                    "modal-2",
                    "Customized Popup",
                    <group data-min-height="fit">
                    <group
                      data-position="absolute"
                      data-height="fit"
                      data-background="main-background-top"
                        onClick={() => closeModal("modal-2")}
                      ></group>
                      <group data-max-length="500" data-position="center">
                        <group data-height="120"></group>
                        <group data-space-horizontal="30">
                        <group data-gap="20">
                          <text
                            data-weight="700"
                            data-text-size="x-large"
                            data-wrap="wrap"
                            data-ellipsis=""
                          >
                            Custom Modal Window
                          </text>

                          <text  data-weight="600" data-wrap="wrap" data-line="20" data-max-length="400">
                            This demo showcases a highly customizable modal
                            window, configured through dynamic props and
                            attributes. It includes a custom close button,
                            highlighting the modal's flexibility and
                            adaptability for various use cases.
                          </text>
                        </group>
                        </group>

                        <group data-height="20"></group>

                        <StuckReporter>
                          {(isSticky) => (
                            <group
                              data-duration=".125"
                              data-space-horizontal={isSticky ? "50" : "30"}
                              data-space={isSticky ? "20" : ""}
                              data-sticky="top"
                            >
                              <group
                                data-background="main"
                                data-color="main-text"
                                data-interactive=""
                                data-width="auto"
                                data-cursor="pointer"
                                data-space="15"
                                data-radius="10"
                                onClick={() => closeModal("modal-2")}
                              >
                                <text data-weight="700">
                                  Custom Close Button
                                </text>
                              </group>
                            </group>
                          )}
                        </StuckReporter>
                        <TooltipPopover />
                      </group>
                    </group>,
                    false,
                    false,
                    modalConfig,
                    0
                  )
                }
              >
                <text>Open Customized Popup</text>
              </group>
            </group>
          </group>


          <group data-gap="15" data-name="separation">
            <separator data-horizontal=""></separator>
            <group>
              <group
                data-width="auto"
                data-interactive=""
                data-space="15"
                data-radius="10"
                data-cursor="pointer"
                onClick={() =>
                  openModal(
                    "modal-2",
                    "Customized Popup",
                    <group data-min-height="fit">
                    <group
                      data-position="absolute"
                      data-height="fit"
                      data-background="main-background-top"
                        onClick={() => closeModal("modal-2")}
                      ></group>
                      <group data-max-length="400" data-space="30" data-gap="30" data-position="center">

                        <group >
                        <group data-gap="20">
                          <text
                            data-weight="700"
                            data-text-size="x-large"
                            data-wrap="wrap"
                            data-ellipsis=""
                          >
                            Custom Apperance Settings
                          </text>

                          <text  data-weight="600" data-wrap="wrap" data-line="20" data-max-length="400">
                            This demo showcases a highly customizable modal
                            window, configured through dynamic props and
                            attributes.
                          </text>
                        </group>
                        </group>

<separator data-horizontal=""></separator>


<group>   <ThemeToggle/></group>
                      </group>
                    </group>,
                    false,
                    false,
                    modalConfig,
                    0
                  )
                }
              >
                <text>Open Custom Apperance Settings</text>
              </group>
            </group>
          </group>

          
          <group data-gap="15" data-name="separation">
            <separator data-horizontal=""></separator>
            <group>
              <group
                data-width="auto"
                data-interactive=""
                data-space="15"
                data-radius="10"
                data-cursor="pointer"
                onClick={() =>
                  openModal(
                    "modal-2",
                    "Customized Popup",
                    <group data-min-height="fit">
                    <group
                      data-position="absolute"
                      data-height="fit"
                      data-background="main-background-top"
                        onClick={() => closeModal("modal-2")}
                      ></group>
                      <group data-max-length="400"  data-position="center">




<Search/>
                      </group>
                    </group>,
                    false,
                    false,
                    modalConfig,
                    0
                  )
                }
              >
                <text>Open Custom Search</text>
              </group>
            </group>
          </group>


        </group>
      </group>
    </group>
  );
};
export default Modal;
