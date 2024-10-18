import React from "react";
import sampleImage from "../styles/images/samples/objects/object-1.png";
import Input, { Password } from "../components/inputs/input";
import Button from "../components/button";


const InputsAndForms: React.FC = () => {
  return (
    <group
      data-column-gap="15"
      data-type="column"
      data-align="start"
      data-space="30"
    >
      <group
        data-radius="15"
        data-contain=""
        data-background="context"
        data-shrink="no"
        data-elevation="1"
      >
        <group
          data-background="main"
          data-contain=""
          data-min-length="240"
          data-dark=""
        >
<group data-contain="" data-height="120" data-max-length="400" data-direction="column" data-justify="end">
            <picture data-min-length="300" data-contain="" data-ratio="1:1" data-shrink="no">
              <img src={sampleImage} alt="" />
            </picture>
          </group>
          <group
            //   data-radius="15"
            data-space="30"
            data-direction="column"
            data-align="start"
            data-gap="10"
            data-color="main-text"
          >
            <text data-weight="700" data-text-size="xx-large" data-wrap="wrap">
              Password Change
            </text>
            <text data-wrap="wrap" data-line="1.5">
              Your password is Case Sensitive. It should contain a minimum of 8
              characters and at least one each of Uppercase, Lowercase, and
              Special characters
            </text>
          </group>
        </group>

        <form data-type="group" data-space="30">
          <group data-hidden="">
            <Input
              type="text"
              size="large"
              // icon="key"
              placeholder="Usename"
              hidden={true}
              dataLength="autofit"
              name="username"
              autoComplete=""
            />
          </group>

          <group data-direction="column" data-gap="10">
            <Password
              size="large"
              icon="key"
              placeholder="Current Password"
              dataLength="autofit"
              name="password_1"
              //  autocomplete="current-password"
              autoComplete="off"
            />

            <separator data-horizontal="" data-interval="10"></separator>

            <Input
              type="password"
              size="large"
              // icon="key"
              placeholder="Create Password"
              dataLength="autofit"
              name="password_1"
              autoComplete="new-password"
            />
            <Input
              type="password"
              size="large"
              //    icon="key"
              placeholder="Repeat Password"
              dataLength="autofit"
              name="password_1"
              autoComplete="new-password"
            />
          </group>

          <space data-height="10"></space>
          <separator data-horizontal="" data-interval="10"></separator>
          <space data-height="10"></space>

          <group data-gap="10" data-type="grid">
            <Button large secondary fit>
              <text>Update Password</text>
            </Button>
            <Button large highlight data-shrink="no">
              <text>Cancel</text>
            </Button>
          </group>
        </form>
      </group>

      <group
        data-radius="15"
        data-contain=""
        data-background="context"
        data-shrink="no"
        data-elevation="1"
      >
        <group data-space="30">
          <group data-direction="column" data-align="start" data-gap="10">
            <text data-weight="700" data-text-size="large" data-wrap="wrap">
              Customer Feedback
            </text>
            <text data-wrap="wrap" data-line="1.5" data-opacity="40">
              Your password is Case Sensitive. It should contain a minimum of 8
              characters and at least one each of Uppercase, Lowercase, and
              Special characters
            </text>
          </group>
        </group>
        <group data-space-horizontal="30">
          <separator data-horizontal=""></separator>
        </group>
        <group data-space="30" data-gap="30"  flex-direction="column">
          <Input
            size="large"
            type="text"
            label="Name"
            placeholder="Enter Your Full Name"
            dataLength="fit"
          ></Input>

          <Input
            size="large"
            type="text"
            label="E-Mail"
            dataLength="fit"
            placeholder="Enter Your Email Address"
          ></Input>

<Input
            size="large"
            type="textarea"
            label="Message"
            dataLength="fit"
            placeholder="Write Your Message"
            data-height="100"
          ></Input>

<group data-type="group">
<Button wide large primary text="Submit Feedback"></Button>
</group>
        </group>
      </group>






    </group>
  );
};
export default InputsAndForms;
