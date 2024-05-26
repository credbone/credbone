import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import Checkbox, { CheckboxType } from "../components/inputs/checkbox";
import Tooltip from "../components/tooltip";
import Radio, { RadioType } from "../components/inputs/radio";
import OptionBar from "../components/inputs/optionBar";
import Button from "../components/button";
import Ripple from "../components/Ripple";

import sampleImage from "../styles/images/samples/res_15.jpg";

const CheckboxAndSwitchers: React.FC = () => {
  const { handleSubmit, reset, control } = useForm<FieldValues>({
    defaultValues: {
      1: true,
      4: true,
      7: true,
      6: true,
      8: "Option3",
      checkox_option_9: true,
      checkox_option_7: true,
      checkox_option_6: true,
      RadioDemo4: "yes",
      RadioDemo2: "table_View",
      RadioDemo6: "leaf",
    },
  });
  return (
    <view>
      <view
        data-vertical=""
        data-adaptive=""
        data-space="30"
        data-gap="15"
        data-align="start"
      >
        <view
          data-size="900"
          data-height="auto"
          data-max-height="fit"
          data-radius="10"
          data-elevation="1"
          data-scroll=""
        >
          <group>
            <group data-direction="column" data-space="30">
              <text
                data-weight="700"
                data-text-size="xxx-large"
                data-wrap="wrap"
                data-color="main"
              >
                Checkbox & Radio
              </text>
              <text
                data-wrap="wrap"
                data-length="300"
                data-line="1.5"
                data-light=""
              >
                Checkboxes let users select one or more items from a list, or
                turn an item on or off
              </text>
            </group>

            <group data-background="main" data-contain="" data-align="center">
              <picture data-position="absolute" data-name="color-demo">
                <img src={sampleImage} alt="" />
              </picture>

              <group data-length="fit" data-space="40" data-space-vertical="30">
                <group data-zoom="3" data-color="main-text">
                  <Checkbox name="1" control={control} />
                </group>
              </group>
            </group>
          </group>

          <group data-type="grid" data-grid-template="200" data-gap="1">
            <group data-direction="column" data-wrap="no" data-border="">
              <group
                data-border=""
                data-space="20"
                data-space-vertical="15"
                data-background="context"
              >
                <Checkbox
                  name="1"
                  label="Classic Checkbox"
                  checkbox
                  control={control}
                />
              </group>

              <group
                data-width="auto"
                data-border=""
                data-space="20"
                data-space-vertical="15"
                data-background="context"
              >
                <Tooltip content="No Label">
                  <group data-width="auto">
                    <Checkbox name="4" control={control} />
                  </group>
                </Tooltip>
              </group>

              <group
                data-width="auto"
                data-border=""
                data-space="20"
                data-space-vertical="15"
                data-background="context"
              >
                <Checkbox
                  name="2"
                  label="Disabled Classic Checkbox "
                  classic
                  control={control}
                  disabled
                />
              </group>
            </group>

            <group data-wrap="no" data-direction="column">
              <group
                data-border=""
                data-space="20"
                data-space-vertical="15"
                data-background="context"
              >
                <Checkbox
                  name="3"
                  simple
                  label="Toggle Switch"
                  control={control}
                />
              </group>
              <group
                data-width="auto"
                data-border=""
                data-space="20"
                data-space-vertical="15"
                data-background="context"
              >
                <Checkbox name="11" simple control={control} />
              </group>
              <group
                data-width="auto"
                data-border=""
                data-space="20"
                data-space-vertical="15"
                data-background="context"
              >
                <Checkbox
                  name="5"
                  label="Disabled Toggle Switch"
                  disabled
                  simple
                  control={control}
                />
              </group>
            </group>

            <group data-wrap="no" data-direction="column">
              <group
                data-border=""
                data-space="20"
                data-space-vertical="15"
                data-background="context"
              >
                <Checkbox
                  name="6"
                  minimal
                  label="Minimal Checkbox"
                  control={control}
                />
              </group>
              <group
                data-border=""
                data-space="20"
                data-space-vertical="15"
                data-background="context"
              >
                <Checkbox name="9" minimal control={control} />
              </group>

              <group
                data-border=""
                data-space="20"
                data-space-vertical="15"
                data-background="context"
              >
                <Checkbox
                  name="7"
                  minimal
                  label="Disabled Checkbox 7"
                  disabled
                  control={control}
                />
              </group>
            </group>

            <group data-wrap="no" data-direction="column">
              <group
                data-border=""
                data-space="20"
                data-space-vertical="15"
                data-background="context"
              >
                <Radio
                  name="8"
                  radioValue="Option1"
                  label="Radio Button"
                  control={control}
                />
              </group>

              <group
                data-border=""
                data-space="20"
                data-space-vertical="15"
                data-background="context"
              >
                <Radio
                  name="8"
                  radioValue="Option3"
                  label="Radio Button disabled"
                  control={control}
                  disabled
                />
              </group>
              <group
                data-border=""
                data-space="20"
                data-space-vertical="15"
                data-background="context"
              >
                <Radio
                  name="8"
                  radioValue="Option4"
                  allowUncheck
                  label="Radio Button allowed uncheck"
                  control={control}
                />
              </group>
            </group>
          </group>
        </view>
        <view
          data-size="large"
          data-scroll=""
          data-height="auto"
          data-max-height="fit"
          data-radius="10"
          data-elevation="1"
        >
          <group data-direction="column" data-space="30">
            <text
              data-weight="700"
              data-text-size="xxx-large"
              data-wrap="wrap"
              data-color="main"
            >
              Switch
            </text>
            <text
              data-wrap="wrap"
              data-max-length="200"
              data-line="1.5"
              data-light=""
            >
              Switches toggle the selection of an item on or off
            </text>
          </group>

          <group>
            <group data-contain="">
              <group
                data-gap="10"
                data-space="20"
                data-border=""
                data-background="main-background"
                data-weight="600"
              >
                <OptionBar autosize data-height="40" data-length="200">
                  <Radio
                    control={control}
                    radioType={RadioType.Button}
                    name="RadioDemo1"
                    radioValue="Dashboard"
                    label="Week"
                  />
                  <Radio
                    control={control}
                    radioType={RadioType.Button}
                    name="RadioDemo1"
                    radioValue="Listview"

                    label="Month"
                  />
                </OptionBar>
              </group>
              <group
                data-gap="10"
                data-space="20"
                data-border=""
                data-background="main-background"
              >
                <OptionBar compact dynamic  data-palette="secondary">
                  <group>
                    <Radio
                      control={control}
                      radioType={RadioType.Button}
                      allowUncheck
                      name="RadioDemo2"
                      radioValue="Thumbnail_View"
                      icon="window"
                      tooltip="Thumbnail View"
                    />
                    <Radio
                      control={control}
                      radioType={RadioType.Button}
                      name="RadioDemo2"
                      radioValue="Column_View"
                      icon="view_stream"
                      tooltip="Column View"
                    />
                    <Radio
                      control={control}
                      radioType={RadioType.Button}
                      name="RadioDemo2"
                      radioValue="table_View"
                      icon="table_rows"
                      tooltip="Table View"
                      label="Table View"
                    />
                  </group>
                </OptionBar>

              </group>

<group    data-gap="10"
                data-space="20"
                data-border=""
                data-background="main-background">
<OptionBar compact dynamic data-palette="lighter">

                  <group>
                    <Radio
                      control={control}
                      radioType={RadioType.Button}
                      allowUncheck
                      name="RadioDemo6"
                      radioValue="leaf"
                      label="Leaf"
                      icon="nest_eco_leaf"
             //         tooltip="Leaf"
                    />
                    <Radio
                      control={control}
                      radioType={RadioType.Button}
                      name="RadioDemo6"
                      radioValue="Sample_View"
                      label="Sample Label"
                //      tooltip="Column View"
                    />
                    <Radio
                      control={control}
                      radioType={RadioType.Button}
                      name="RadioDemo6"
                      radioValue="Table View"
                      icon="humidity_low"

                    />
                  </group>
                </OptionBar>
</group>

              <group
               
                data-space="20"
                data-border=""
                data-background="main-background"
                data-align="center"
                data-gap="20"
              >
                <OptionBar compact dynamic>
                  <Radio
                    control={control}
                    radioType={RadioType.Button}
                    name="RadioDemo3"
                    radioValue="Grid View"
                    icon="window"
                    label="Grid View"
                  />
                  <Radio
                    control={control}
                    radioType={RadioType.Button}
                    name="RadioDemo3"
                    radioValue="List View"
                    icon="table_rows"
                    label="List View"
                  />
                  <Radio
                    control={control}
                    radioType={RadioType.Button}
                    name="RadioDemo3"
                    radioValue="Dashboard"
                    icon="view_stream"
                    label="Dashboard"
                  />
                </OptionBar>

 
<group data-align="center" data-width="auto">



<OptionBar  animate data-length="100">
  <Radio
    control={control}
    radioType={RadioType.Button}
    name="RadioDemo4"
    radioValue="yes"
    label="Yes"
  />
  <Radio
    control={control}
    radioType={RadioType.Button}
    name="RadioDemo4"
    radioValue="no"
    label="No"
  />
</OptionBar>
<text data-opacity="30" data-space="10"> Animated Switcher </text>
</group>
              </group>
              <group
                data-gap="10"
                data-space="20"
                data-border=""
                data-background="main-background"
              >
                <OptionBar data-length="400" data-height="40" >
                  <Checkbox
                    control={control}
                    checkboxType={CheckboxType.Button}
                    name="checkox_option_1"
                    label="Mo"
                  />
                  <Checkbox
                    control={control}
                    checkboxType={CheckboxType.Button}
                    name="checkox_option_2"
                    label="Tu"
                  />
                  <Checkbox
                    control={control}
                    checkboxType={CheckboxType.Button}
                    name="checkox_option_3"
                    label="We"
                  />
                  <Checkbox
                    control={control}
                    checkboxType={CheckboxType.Button}
                    name="checkox_option_4"
                    label="Th"
                  />
                  <Checkbox
                    control={control}
                    checkboxType={CheckboxType.Button}
                    name="checkox_option_5"
                    label="Fr"
                  />
                  <Checkbox
                    control={control}
                    checkboxType={CheckboxType.Button}
                    name="checkox_option_6"
                    label="Sa"
                  />
                  <Checkbox
                    control={control}
                    checkboxType={CheckboxType.Button}
                    name="checkox_option_7"
                    label="Su"
                  />
                </OptionBar>
              </group>

              <group
                data-gap="10"
                data-space="20"
                data-border=""
                data-background="main-background"
              >
                <OptionBar
                  data-length="300"
                  data-height="40"
                  // data-palette="lighter"
                >
                  <Checkbox
               
                    control={control}
                    checkboxType={CheckboxType.Button}
                    name="checkox_option_9"
                    label="Chair"
                  />
                  <Checkbox
                 
                    control={control}
                    checkboxType={CheckboxType.Button}
                    name="checkox_option_10"
                    label="Shirt"
                  />
                  <Checkbox
                   
                    control={control}
                    checkboxType={CheckboxType.Button}
                    name="checkox_option_11"
                    label="Pet"
                  />
                </OptionBar>
              </group>
            </group>
          </group>
        </view>
      </view>

      <group data-space="20">
        <group data-type="grid" data-gap="10">
          <Button
            primary
            large
            text="Submit"
            onClick={handleSubmit((data: any) => console.log(data))}
          />
          <Button outline large text="Reset" onClick={() => reset()} />
        </group>
      </group>
    </view>
  );
};
export default CheckboxAndSwitchers;