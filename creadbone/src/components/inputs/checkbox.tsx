import classNames from "classnames";
import { forwardRef, PropsWithChildren, ReactElement } from "react";

import Input, { InputProps, InputType } from "./input";
import Ripple from "../Ripple";
import { SvgCheckbox } from "../svg";

export const enum CheckboxType {
  Button,
}

export type CheckboxProps = InputProps & {
  classic?: boolean;
  noInk?: boolean;
  checkbox?: boolean;
  icon?: string;
  simple?: boolean;
  checkboxType?: CheckboxType;
  checkboxProps?: any;
};

export const CheckboxInner: React.FC<CheckboxProps> = forwardRef<
  ReactElement,
  PropsWithChildren<CheckboxProps>
>(
  (
    {
      children,
      classic,
      noInk,
      checkbox,
      icon,
      minimal,
      simple,
      label,
      className,
      value,
      isDirty,
      isTouched,
      invalid,
      error,
      checkboxType,
      checkboxProps,
      ...inputProps
    },
    ref
  ) => {
    let type: any;
    let input;
    input = (
      <input
        type="checkbox"
        ref={ref as any}
        checked={!!value}
        {...inputProps}
      />
    );

    const isButton = checkboxType === CheckboxType.Button;

    if (minimal || simple || classic) {
      if (classic) {
        type = { classic: "" };
      } else {
        type = { checkbox: "" };
        if (minimal) {
          type.minimal = "";
        }
        if (simple) {
          type.simple = "";
        }
      }
    } else if (!isButton) {
      type = { classic: "" };
    }

    let content = (
      <label
        {...type}
        {...checkboxProps}
        className={classNames(className, {
          error: invalid,
          touched: isTouched,
          dirty: isDirty,
        })}
      >
        {input}

        {isButton ? (
          <wrap>
            {icon && <icon>{icon}</icon>}
            {label && <text>{label}</text>}
          </wrap>
        ) : (
          <>
            <box>
              <check>{!minimal && !simple && !noInk && (
                <>
                <SvgCheckbox></SvgCheckbox>
                </>
              )} </check>

              {!minimal && !simple && !noInk && (
                <Ripple>
                  <ink></ink>
                </Ripple>
              )}
            </box>
            {label && <text>{label}</text>}
          </>
        )}
      </label>
    );

    return content;
  }
);

const Checkbox: React.FC<CheckboxProps> = forwardRef<
  ReactElement,
  PropsWithChildren<CheckboxProps>
>((props, ref) => {
  return <Input ref={ref} {...props} type={InputType.Checkbox} />;
});

export default Checkbox;
