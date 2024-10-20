import React, { useState } from "react";
import Ripple from "../components/Ripple";
import { useSnackbar } from "../components/snackbar/SnackbarContainer";

const Calculator: React.FC = () => {

  const { addSnackbar } = useSnackbar();


  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  const calculateResult = () => {
    try {
      const evalResult = eval(input); // Use eval cautiously!
      setResult(evalResult);
    } catch (error) {
      setResult(null);
      //alert("Invalid Expression");
      addSnackbar("Invalid Expression", 3000, "custom-source", true);

      
    }
  };

  // Button mapping with labels and their corresponding actions
  const buttons: Array<{ label: string; action: () => void; type: string, background: string, color: string}> = [

    { color:"", background:"highlight",  label: "C", action: handleClear, type: "wide" },
    { color:"", background:"",  label: "÷", action: () => handleButtonClick("/"), type: "" },
    { color:"", background:"",  label: "×", action: () => handleButtonClick("*"), type: "" },
    { color:"", background:"",  label: "7", action: () => handleButtonClick("7"), type: "" },
    { color:"", background:"",  label: "8", action: () => handleButtonClick("8"), type: "" },
    { color:"", background:"",  label: "9", action: () => handleButtonClick("9"), type: "" },
    { color:"", background:"",  label: "-", action: () => handleButtonClick("-"), type: "" },
    { color:"", background:"",  label: "4", action: () => handleButtonClick("4"), type: "" },
    { color:"", background:"",  label: "5", action: () => handleButtonClick("5"), type: "" },
    { color:"", background:"",  label: "6", action: () => handleButtonClick("6"), type: "" },
    { color:"", background:"",  label: "+", action: () => handleButtonClick("+"), type: "" },
    { color:"", background:"",  label: "1", action: () => handleButtonClick("1"), type: "" },
    { color:"", background:"",  label: "2", action: () => handleButtonClick("2"), type: "" },
    { color:"", background:"",  label: "3", action: () => handleButtonClick("3"), type: "" },
    { color:"peach-light", background:"deep-orange-light", label: "=", action: calculateResult, type: "tall" },
    { color:"", background:"", label: "0", action: () => handleButtonClick("0"), type: "wide" },
    { color:"", background:"", label: ".", action: () => handleButtonClick("."), type: "" },
   
  ];

  return (
    <group data-direction="column" data-border=""          data-contain=""
    data-radius="10">
      <group data-direction="column" data-space-horizontal="20" data-height="100" data-text-align="right"  data-justify="center" data-radius="10">
        <input
          type="text"
          data-length="fit"
          value={input}
          readOnly
          data-text-align="right"
          placeholder="0"
          data-name="input-reset"
          data-text-size={result !== null ? "large" : "xx-large"}
         data-weight="300"
          data-duration=".225"
        />
        {result !== null && <text data-ellipsis="" data-weight="300" data-text-size="xx-large">{result}</text>}
      </group>
      <group
        data-type="grid"
        data-gap="1"
        data-grid-template="4"

      >
        {buttons.map((button) => (
          <group
            key={button.label}
            onClick={button.action}
            data-ratio={button.type ? "" : "1:1"}
            data-row-end={button.type === "tall" ? "2" : ""}
            data-column-end={button.type === "wide" ? "2" : ""}
            data-background={button.background}
            data-color={button.color}
          >
            <Ripple>
              <group
                data-border=""
                data-direction="column"
                data-weight="600"

              //  data-space="15"
                data-jusitify="center"
                data-text-size="large"
                data-align="center"
                data-interactive=""
                data-cursor="pointer"
              >
                <text data-position="center">{button.label}</text>
              </group>
            </Ripple>
          </group>
        ))}
      </group>
    </group>
  );
};

export default Calculator;
