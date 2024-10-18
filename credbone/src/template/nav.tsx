import React, { useState } from "react";

import Ripple from "../components/Ripple";

import Scroll from "../components/scroll";
import Button from "../components/button";
import { SvgHamburger } from "../components/svg";
import Tabstrip from "../components/tabstrip";
import Tab from "../components/tabstrip/tab";
import { IconSearch, IconStar } from "../components/icon/credIcons";
import sampleImage from "../styles/images/samples/objects/object-3.png";
import sampleImage2 from "../styles/images/samples/objects/object-1.png";
import SideNav from "./sideNav";

// Demo Data

const tabsData = [
  { kay: "1", title: "Home", index: 1 },
  { kay: "2", title: "Orders", index: 2 },
  { kay: "3", title: "Account", index: 3 },
];

// Demo Data

const navData = [
  { key: 1, badge: true, icon: "shopping_basket", title: "Cart" },
  { key: 2, badge: "", icon: "local_cafe", title: "Beverage" },
  { key: 3, badge: "", icon: "laundry", title: "Laundry Service" },
  { key: 4, badge: "", icon: "local_pizza", title: "Pizza Orders" },
  { key: 6, badge: "", icon: "cloud", title: "Cloud Storage" },
  { key: 12, badge: "", icon: "spa", title: "Spa Services" },
  { key: 14, badge: "", icon: "local_mall", title: "Mall Directory" },
  { key: 16, badge: "", icon: "school", title: "Courses" },
];

const Landing: React.FC = () => {
  const [selectedItemKey, setSelectedItemKey] = useState<number | null>(2);
  const [selectedItem2Key, setSelectedItem2Key] = useState<number | null>(3);
  const [selectedItem3Key, setSelectedItem3Key] = useState<number | null>(3);

  const handleItemClick = (key: number) => {
    setSelectedItemKey(key);
  };
  const handleItem2Click = (key: number) => {
    setSelectedItem2Key(key);
  };
  const handleItem3Click = (key: number) => {
    setSelectedItem3Key(key);
  };

  return (
    <>
      <group data-align="start">
        <group
          //  data-max-length="600"
          data-space="30"
          data-gap="30"
          data-direction="column"
          data-shrink="0"
          data-contain=""
          data-wrap="no"
          data-fit="1"
          data-align="start"
        >
          <group data-direction="column" data-gap="10">
            <text data-weight="700" data-text-size="xxx-large" data-ellipsis="">
              Navigation
            </text>

            <text
              data-wrap="wrap"
              data-length="300"
              data-line="1.5"
              data-opacity="60"
            >
              Navigation bars allow movement between primary destinations in an
              app.
            </text>
          </group>

          <group
            data-elevation="1"
            data-contain=""
            data-radius="15"
            data-background="context"
            //    data-max-length="600"
          >
            <group
              data-background="peach-blush"
              data-contain=""
              // data-dark=""
              data-align="center"
            >
              <group
                data-contain=""
                data-position="absolute"
                data-max-length="400"
                data-direction="column"
                data-justify="end"
              >
                <picture
                  data-min-length="300"
                  data-contain=""
                  data-ratio="1:1"
                  data-shrink="no"
                >
                  <img src={sampleImage} alt="" />
                </picture>
              </group>

              <group data-direction="column" data-gap="10" data-space="30">
                <text
                  data-weight="700"
                  data-text-size="x-large"
                  data-ellipsis=""
                >
                  Tiles
                </text>

                <text data-wrap="wrap" data-line="20" data-max-length="600" data-weight="600">
                A sleek, tile-based navigation system that offers quick access and smooth transitions between sections. Simple, intuitive, and responsive for an efficient user experience.
                </text>
              </group>
            </group>

            <group
              data-type="grid"
              data-weight="600"
              data-grid-template="120"
              data-gap="5"
              data-space="20"
            >
              {navData.map((item) => (
                <Ripple key={item.key}>
                  <group
                    key={item.key}
                    onClick={() => handleItemClick(item.key)}
                    data-background={item.key === selectedItemKey ? "main" : ""}
                    data-color={item.key === selectedItemKey ? "main-text" : ""}
                    data-ink-color={
                      item.key === selectedItemKey ? "main-dark" : ""
                    }
                    data-contain=""
                    data-radius="10"
                    data-interactive=""
                    data-cursor="pointer"
                  >
                    <group
                      data-direction="column"
                      data-align="center"
                      data-space="10"
                      data-gap="5"
                    >
                      {item.badge ? (
                        <group
                          data-background={
                            item.key === selectedItemKey ? "main-text" : "red"
                          }
                          data-space="5"
                          data-position="absolute"
                          data-width="auto"
                          data-radius="5"
                          data-right="10"
                          data-top="10"
                        ></group>
                      ) : null}

                      <icon>{item.icon}</icon>
                      <text data-ellipsis="">{item.title}</text>
                    </group>
                  </group>
                </Ripple>
              ))}
            </group>
          </group>

          <separator data-horizontal="" data-interval="10"></separator>

          <group>
            <group>
              <group data-gap="5">
                {navData.map((item2) => (
                  <Ripple key={item2.key}>
                    <group
                      key={item2.key}
                      onClick={() => handleItem2Click(item2.key)}
                      data-background={
                        item2.key === selectedItem2Key ? "main" : ""
                      }
                      data-color={
                        item2.key === selectedItem2Key ? "main-text" : ""
                      }
                      data-ink-color={
                        item2.key === selectedItem2Key ? "main-dark" : ""
                      }
                      data-contain=""
                      data-interactive=""
                      data-border="outline"
                      data-radius="30"
                      data-width="auto"
                      data-wrap="no"
                      data-cursor="pointer"
                      data-align="center"
                      data-space="5"
                      data-space-horizontal="10"
                     // data-gap="5"
                    >
                      <icon
                      data-margin-horizontal="5"
                        data-fill={item2.key === selectedItem2Key ? "fill" : ""}
                      >
                        {item2.icon}
                      </icon>
                      <text data-weight="600">{item2.title}</text>

                      {item2.badge ? (
                        <>
                          <group data-space="5">
                       
                          </group>
                          <group
                            data-ratio="1:1"
                            data-justify="center"
                            data-align="center"
                            data-length="25"
                            data-background={
                              item2.key === selectedItem2Key
                                ? "main-text"
                                : "red"
                            }
                            data-color={
                              item2.key === selectedItem2Key ? "main" : "white"
                            }
                            data-radius="20"
                          >
                            <text data-weight="700">2</text>
                          </group>
                        </>
                      ) : null}
                    </group>
                  </Ripple>
                ))}
              </group>
            </group>
          </group>
          <separator data-horizontal="" data-interval="10"></separator>

          <group
            data-space="20"
            data-gap="20"
            data-elevation="1"
            data-radius="15"
            data-background="main"
            data-wrap="no"
            data-direction="column"
            data-align="start"
            //   data-width="auto"
            data-contain=""
          >

<group
                data-contain=""
                data-position="absolute"
                data-max-length="400"
                data-direction="column"
                data-justify="end"
                data-right="0"
                data-name="color-demo"
              >
                <picture
                  data-min-length="300"
                  data-contain=""
                  data-ratio="1:1"
                  data-shrink="no"
                >
                  <img src={sampleImage2} alt="" />
                </picture>
              </group>

            <group
              data-direction="column"
              data-width="auto"
              data-color="main-text"
              data-gap="10"
            >
              <text data-weight="700" data-text-size="x-large" data-wrap="wrap">
                Horizontal Navigation
              </text>
              <text
                data-wrap="wrap"
                data-length="200"
                data-line="1.5"
                data-opacity="70"
              >
                Left Aligned Navigation with Fixed Home Button
              </text>
            </group>
            <group
              //  data-width="auto"
              data-radius="5"
              data-contain=""
              data-background="main-background"
              data-wrap="no"
              data-weight="600"
            >
              <Scroll wheelEnabled={true}>
                <group data-wrap="no" data-space="5">
                  {navData.map((item3) => (
                    <group
                      key={item3.key}
                      onClick={() => handleItem3Click(item3.key)}
                      data-height="40"
                      data-contain=""
                      data-shrink="no"
                      data-name="autoseparation"
                      data-wrap="no"
                      data-align="center"
                      data-width="auto"
                    >
                      <separator data-vertical="" data-height="20"></separator>
                      <Ripple>
                        <group
                          data-background={
                            item3.key === selectedItem3Key ? "main" : ""
                          }
                          data-color={
                            item3.key === selectedItem3Key ? "main-text" : ""
                          }
                          data-ink-color={
                            item3.key === selectedItem3Key ? "main-dark" : ""
                          }
                          data-height="fit"
                          data-width="auto"
                          data-interactive=""
                          data-cursor="pointer"
                          data-align="center"
                          data-space-horizontal="10"
                          data-gap="10"
                          data-wrap="no"
                          data-radius="5"
                          data-contain=""
                        >
                          {/* <icon data-fill={item3.key === selectedItem3Key ? 'fill' : ''}>{item3.icon}</icon> */}
                          <text>{item3.title}</text>
                          {item3.badge ? (
                            <group
                              data-ratio="1:1"
                              data-justify="center"
                              data-align="center"
                              data-length="25"
                              data-background={
                                item3.key === selectedItem3Key
                                  ? "main-text"
                                  : "red"
                              }
                              data-color={
                                item3.key === selectedItem3Key
                                  ? "main"
                                  : "white"
                              }
                              data-radius="20"
                            >
                              <text data-weight="700">3</text>
                            </group>
                          ) : null}
                        </group>
                      </Ripple>
                    </group>
                  ))}
                </group>
              </Scroll>
            </group>
          </group>

          <group
            //    data-space="20"
            //  data-elevation="1"
            //  data-radius="15"
            //    data-background="main-background"
            data-width="auto"
            //     data-dark=""
            data-gap="20"
          >
            <group data-direction="column" data-width="auto" data-gap="10">
              <text data-weight="700" data-text-size="x-large" data-wrap="wrap">
                Horizontal Navigation
              </text>
              <text
                data-wrap="wrap"
                data-length="200"
                data-line="1.5"
                data-light=""
              >
                Right Aligned Navigation with Fixed Menu Button
              </text>
            </group>
            <group
              data-background="context"
              data-radius="5"
              data-contain=""
              data-border="outline"
            >
              <group data-position="right">
                <nav data-type="group" data-wrap="no" data-justify="end">
                  <group data-width="auto" data-contain="">
                    <Scroll>
                      <group data-wrap="no">
                        <group data-wrap="no" data-width="auto">
                          <separator
                            data-vertical=""
                            data-height="fit"
                          ></separator>
                          <Ripple>
                            <group
                              data-cursor="pointer"
                              data-space="10"
                              data-space-horizontal="15"
                              data-gap="10"
                              data-wrap="no"
                              data-align="center"
                              data-interactive=""
                            >
                              <icon data-fill="">shopping_basket</icon>
                              <text data-adaptive="desktop">Cart</text>
                              <dot></dot>
                              <group
                                data-length="25"
                                data-ratio="1:1"
                                data-radius="20"
                                data-color="secondary-text"
                                data-justify="center"
                                data-align="center"
                                data-background="secondary"
                              >
                                <text data-weight="700">5</text>
                              </group>
                            </group>
                          </Ripple>
                        </group>
                        <group data-wrap="no" data-width="auto">
                          <separator
                            data-vertical=""
                            data-height="fit"
                          ></separator>
                          <Ripple>
                            <group
                              data-cursor="pointer"
                              data-space="10"
                              data-space-horizontal="15"
                              data-gap="10"
                              data-wrap="no"
                              data-align="center"
                              data-interactive=""
                            >
                              <icon data-fill="fill">person</icon>
                              <text data-adaptive="desktop">
                                Welcome Username
                              </text>
                            </group>
                          </Ripple>
                        </group>
                      </group>
                    </Scroll>
                  </group>

                  <group data-wrap="no" data-length="50">
                    <separator data-vertical="" data-height="fit"></separator>
                    <Button className="primary extra" toggleClassName="open">
                      <icon>
                        <SvgHamburger />
                      </icon>
                    </Button>
                  </group>
                </nav>
              </group>
            </group>
          </group>
          <separator data-horizontal="" data-interval="10"></separator>

          <group>
            <Tabstrip
              // separator={false}
              bottom
              // classic={false}
              // invert={false}
              // modern={true}
              selectedIndex={1}
              tabStripProps={{ "data-contain": "visible" }}
              tabStripContentProps={{
                "data-space": "30",
                "data-background": "context",
                "data-elevation": "1",
                "data-radius-top": "10",
              }}
            >
              {tabsData.map((tab) => (
                <Tab key={tab.index} title={tab.title}>
                  <group data-wrap="no" data-gap="30" data-align="center">
                    <group data-width="auto">
                      <text data-text-size="48" data-weight="700">
                        {tab.index}
                      </text>
                    </group>
                    <group
                      data-direction="column"
                      data-width="auto"
                      data-contain=""
                    >
                      <text
                        data-weight="700"
                        data-text-size="x-large"
                        data-ellipsis=""
                      >
                        {tab.title}
                      </text>
                      <text data-ellipsis="" data-line="1.5" data-light="">
                        Bottom Aligned Navigation
                      </text>
                    </group>
                  </group>
                </Tab>
              ))}
            </Tabstrip>
          </group>
        </group>

        {/* <group data-name="side_nav-space" data-length="80"></group> */}
      </group>

      {/* <SideNav /> */}
    </>
  );
};
export default Landing;
