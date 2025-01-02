import React from "react";

interface GaugeZoomProps {
  value: number;
  max: number;
  size: number;
  strokecolor?:string;
}

const GaugeZoom: React.FC<GaugeZoomProps> = ({ value, max, size, strokecolor, }) => {
  // const radius = size / 2 - 15;
  // const circumference = 2 * Math.PI * radius;
  // const offset = circumference - (value / max) * circumference;

  //const maskid = useId();


  const StrokeColor = strokecolor || "main-alpha-50";

  return (
    <svg
      data-position="absolute"
      preserveAspectRatio="none"
      height="200%"
      //  width="100%"
      viewBox="0 0 140 140"
      xmlns="http://www.w3.org/2000/svg"

      //   data-rotate="-225"
    >
      <g
        // data-opacity="10"
        fill="currentColor"
        transform-origin="center center"
        transform={"rotate(" + (-((value / max || 0) * 360) - 90) + ")"}
        data-duration=".725"
         data-transition-prop="transform"
      >
        

        <path data-opacity="60" d="M110,70.25v-0.5h10v0.5H110Zm-5.484-20.467,8.66-5,0.25,0.433-8.66,5ZM89.784,104.766l0.433-.25,5,8.66-0.433.25Zm0-69.532,5-8.66,0.433,0.25-5,8.66ZM69.75,110h0.5v10h-0.5V110Zm0-90h0.5V30h-0.5V20ZM44.784,113.176l5-8.66,0.433,0.25-5,8.66Zm0-86.352,0.433-.25,5,8.66-0.433.25Zm-18.21,67.96,8.66-5,0.25,0.433-8.66,5Zm0-49.567,0.25-.433,8.66,5-0.25.433ZM30,70.25H20v-0.5H30v0.5Zm83.426,24.534-0.25.433-8.66-5,0.25-.433Z"/>

        

  <path data-opacity="30"  d="M109.826,66.265l4.981-.436,0.044,0.5-4.981.436Zm-0.477-3.457,4.924-.868,0.087,0.492-4.924.868Zm-0.777-3.4,4.83-1.294,0.129,0.483L108.7,59.889Zm-1.07-3.322,4.7-1.71,0.171,0.47-4.7,1.71Zm-1.355-3.216,4.531-2.113,0.212,0.453-4.532,2.113Zm-3.524-6.016,4.095-2.868,0.287,0.41-4.1,2.868ZM100.481,44.1l3.83-3.214,0.322,0.383L100.8,44.48Zm-2.373-2.558L101.643,38,102,38.357l-3.536,3.535ZM95.52,39.2l3.214-3.83,0.383,0.321L95.9,39.519Zm-2.782-2.107,2.868-4.1,0.409,0.287-2.868,4.1Zm-6.06,69.268,0.453-.211,2.113,4.531-0.453.212Zm0-72.716,2.113-4.532,0.453,0.211-2.113,4.531Zm-3.232,74.031,0.47-.171,1.71,4.7-0.47.171Zm0-75.346,1.71-4.7,0.47,0.171-1.71,4.7ZM80.111,108.7l0.483-.13,1.294,4.83-0.483.129Zm0-77.4,1.294-4.83L81.888,26.6l-1.294,4.83ZM76.7,109.436l0.492-.087,0.868,4.924-0.492.087Zm0-78.872,0.868-4.924,0.492,0.087-0.868,4.924ZM73.237,109.87l0.5-.044,0.436,4.981-0.5.044Zm0-79.74,0.436-4.981,0.5,0.044-0.436,4.981Zm-7.408,84.677,0.436-4.981,0.5,0.044-0.436,4.981Zm0-89.614,0.5-.044,0.436,4.981-0.5.044Zm-3.889,89.08,0.868-4.924,0.492,0.087-0.868,4.924Zm0-88.546,0.492-.087L63.3,30.564l-0.492.087ZM58.112,113.4l1.294-4.83,0.483,0.13-1.294,4.829Zm0-86.8,0.483-.129,1.294,4.83-0.483.129Zm-3.737,85.6,1.71-4.7,0.47,0.171-1.71,4.7Zm0-84.4,0.47-.171,1.71,4.7-0.47.171Zm-3.619,82.879,2.113-4.531,0.453,0.211-2.113,4.532Zm0-81.356,0.453-.211,2.113,4.532-0.453.211Zm-6.771,77.4,2.868-4.095,0.409,0.286-2.868,4.1Zm0-73.436,0.41-.287,2.868,4.1-0.409.287ZM44.1,39.519l-3.214-3.83,0.383-.321L44.48,39.2Zm-2.558,2.374L38,38.357,38.357,38l3.535,3.536ZM39.2,44.48l-3.83-3.214,0.321-.383,3.83,3.214Zm-2.107,2.782-4.1-2.868,0.287-.41,4.1,2.868Zm-3.448,6.06-4.532-2.113,0.211-.453,4.531,2.113Zm-1.315,3.232-4.7-1.71,0.171-.47,4.7,1.71ZM31.3,59.889l-4.83-1.294,0.129-.483,4.83,1.294ZM30.564,63.3l-4.924-.868,0.087-.492,4.924,0.868ZM30.13,66.763l-4.981-.436,0.044-.5,4.981,0.436Zm0.044,6.972-4.981.436-0.044-.5,4.981-.436Zm0.477,3.457-4.924.868-0.087-.492,4.924-.868Zm0.777,3.4L26.6,81.888l-0.129-.483,4.83-1.294Zm1.07,3.322-4.7,1.71-0.171-.47,4.7-1.71Zm1.355,3.216-4.531,2.113-0.211-.453,4.532-2.113Zm3.524,6.017-4.1,2.868-0.287-.409,4.1-2.868ZM39.519,95.9l-3.83,3.214-0.321-.383L39.2,95.52Zm2.374,2.558L38.357,102,38,101.643l3.536-3.535ZM44.48,100.8l-3.214,3.831-0.383-.322,3.214-3.83Zm51.536,5.916-0.409.287-2.868-4.1,0.41-.286ZM95.9,100.481l3.214,3.83-0.383.322L95.52,100.8Zm2.558-2.373L102,101.643l-0.354.354-3.535-3.536ZM100.8,95.52l3.831,3.214-0.322.383-3.83-3.214Zm2.107-2.782,4.1,2.868-0.287.409-4.095-2.868Zm3.449-6.06,4.532,2.113-0.212.453-4.531-2.113Zm1.315-3.232,4.7,1.71-0.171.47-4.7-1.71Zm1.029-3.335,4.829,1.294-0.129.483-4.83-1.294Zm0.734-3.412,4.924,0.868-0.087.492-4.924-.868Zm0.434-3.463,4.981,0.436-0.044.5-4.981-.436Z"/>


        <circle
          //      data-opacity="0"
          cx="50%"
          cy="50%"
          r="45"
          stroke="currentcolor"
          data-stroke={StrokeColor}
          strokeWidth="10"
          fill="none"
          pathLength="100"
          strokeDasharray={`${(value / max) * 100} 100`}
          // strokeDashoffset={offset}
          // transform={`rotate(-90 ${size / 2} ${size / 2})`}
          data-duration=".325"
          
          data-delay="4"
          data-transition-prop="stroke-dasharray"
        />




      </g>



      

  <path


data-duration=".325"

transform-origin="center center"
transform={"rotate(" + (-((value / max || 0) * 360)) + ")"}
 data-transition-prop="transform"
data-opacity="10"

 d="M71.065,14.64a2.2,2.2,0,0,0,.707-0.945,3.65,3.65,0,0,0,.252-1.411,3.607,3.607,0,0,0-.255-1.41,2.2,2.2,0,0,0-.711-0.942A1.743,1.743,0,0,0,69.994,9.6a1.719,1.719,0,0,0-1.057.339,2.229,2.229,0,0,0-.71.942,3.58,3.58,0,0,0-.255,1.407,3.612,3.612,0,0,0,.255,1.407,2.21,2.21,0,0,0,.714.949A1.832,1.832,0,0,0,71.065,14.64Zm-1.9-.375a1.83,1.83,0,0,1-.546-0.8,3.343,3.343,0,0,1-.192-1.183,3.4,3.4,0,0,1,.189-1.183,1.781,1.781,0,0,1,.543-0.794,1.391,1.391,0,0,1,1.683,0,1.822,1.822,0,0,1,.543.791,3.339,3.339,0,0,1,.192,1.187,3.346,3.346,0,0,1-.192,1.183,1.845,1.845,0,0,1-.543.8A1.368,1.368,0,0,1,69.165,14.265Zm5,110.821V130.3H75.6v-0.4h-0.98v-4.816H74.164Zm-3.8.123a1.581,1.581,0,0,0-.612.563,1.5,1.5,0,0,0-.224.812,1.519,1.519,0,0,0,.287.91,1.437,1.437,0,0,0,.77.546l0.007-.126a1.42,1.42,0,0,0-.567.469,1.167,1.167,0,0,0-.2.679,1.272,1.272,0,0,0,.689,1.155,1.53,1.53,0,0,0,.725.168,1.5,1.5,0,0,0,.728-0.175,1.362,1.362,0,0,0,.511-0.472,1.236,1.236,0,0,0,.189-0.676,1.2,1.2,0,0,0-.207-0.679,1.3,1.3,0,0,0-.578-0.469l0.014,0.126a1.543,1.543,0,0,0,.84-2.268,1.58,1.58,0,0,0-.612-0.563A1.968,1.968,0,0,0,70.359,125.209Zm1.54,0.339a1.079,1.079,0,0,1,.441.413,1.3,1.3,0,0,1,0,1.239,1.072,1.072,0,0,1-.441.413,1.562,1.562,0,0,1-1.323,0,1.1,1.1,0,0,1-.445-0.413,1.164,1.164,0,0,1-.161-0.616,1.182,1.182,0,0,1,.161-0.623,1.1,1.1,0,0,1,.445-0.413A1.562,1.562,0,0,1,71.9,125.548Zm-0.168,2.737a0.912,0.912,0,0,1,.347.322,0.886,0.886,0,0,1,.126.476,0.853,0.853,0,0,1-.126.466,0.91,0.91,0,0,1-.347.318,1.029,1.029,0,0,1-.5.119,1,1,0,0,1-.49-0.119,0.918,0.918,0,0,1-.343-0.318,0.853,0.853,0,0,1-.126-0.466,0.886,0.886,0,0,1,.126-0.476,0.92,0.92,0,0,1,.343-0.322A1.09,1.09,0,0,1,71.731,128.285Zm-6.254-2.943a2.2,2.2,0,0,0-.707.945,3.648,3.648,0,0,0-.252,1.41,3.61,3.61,0,0,0,.255,1.411,2.2,2.2,0,0,0,.711.941,1.743,1.743,0,0,0,1.064.336,1.721,1.721,0,0,0,1.057-.339,2.229,2.229,0,0,0,.71-0.942,4,4,0,0,0,0-2.814,2.206,2.206,0,0,0-.714-0.948A1.829,1.829,0,0,0,65.477,125.342Zm1.9,0.374a1.838,1.838,0,0,1,.546.8,3.345,3.345,0,0,1,.192,1.183,3.4,3.4,0,0,1-.189,1.183,1.78,1.78,0,0,1-.543.8,1.393,1.393,0,0,1-1.683,0,1.823,1.823,0,0,1-.543-0.791,3.744,3.744,0,0,1,0-2.37,1.854,1.854,0,0,1,.543-0.8A1.368,1.368,0,0,1,67.377,125.716Zm57.04-29.083L119.9,94.026l0.227-.394L124.3,96.04l0.49-.849,0.345,0.2Zm-1.165-52.915a3.607,3.607,0,0,1-1.093.926,3.65,3.65,0,0,1-1.348.487,2.2,2.2,0,0,1-1.172-.14,1.831,1.831,0,0,1-1.062-1.84,2.212,2.212,0,0,1,.464-1.093,4,4,0,0,1,2.437-1.407,2.23,2.23,0,0,1,1.171.144,1.714,1.714,0,0,1,.822.746,1.745,1.745,0,0,1,.242,1.089A2.2,2.2,0,0,1,123.252,43.718Zm-0.15-1.962a1.3,1.3,0,0,0-.664-0.583,1.781,1.781,0,0,0-.959-0.073,3.4,3.4,0,0,0-1.119.428,3.351,3.351,0,0,0-.929.758,1.83,1.83,0,0,0-.418.872,1.368,1.368,0,0,0,.839,1.452,1.843,1.843,0,0,0,.962.071,3.74,3.74,0,0,0,2.052-1.185,1.82,1.82,0,0,0,.414-0.865A1.307,1.307,0,0,0,123.1,41.756Zm-3.944-3.429a1.773,1.773,0,0,1,.245.327,1.587,1.587,0,0,1,.015,1.6,1.793,1.793,0,0,1-1.487.855,1.592,1.592,0,0,1-.809-0.224,1.691,1.691,0,0,1-.608-0.627,1.654,1.654,0,0,1-.238-0.853,1.566,1.566,0,0,1,.233-0.814,1.807,1.807,0,0,1,.66-0.628,2.245,2.245,0,0,1,.554-0.231,2.536,2.536,0,0,1,.593-0.079,4.722,4.722,0,0,1,.659.036l2.341,0.289,0.27,0.467-2.723-.332A1.144,1.144,0,0,1,119.158,38.327Zm-0.582.029a1.16,1.16,0,0,0-.6-0.151,1.313,1.313,0,0,0-.64.187,1.274,1.274,0,0,0-.474.46,1.175,1.175,0,0,0,0,1.206,1.205,1.205,0,0,0,.451.459,1.158,1.158,0,0,0,.6.151,1.3,1.3,0,0,0,.634-0.184,1.31,1.31,0,0,0,.482-0.46,1.168,1.168,0,0,0,.171-0.592,1.2,1.2,0,0,0-.174-0.623A1.186,1.186,0,0,0,118.576,38.356Zm-1.637,61.312a2.207,2.207,0,0,1,1.178-.144,4,4,0,0,1,2.437,1.407,2.227,2.227,0,0,1,.46,1.086,1.724,1.724,0,0,1-.234,1.085,1.746,1.746,0,0,1-.823.754,2.2,2.2,0,0,1-1.171.144,3.582,3.582,0,0,1-1.349-.484,3.654,3.654,0,0,1-1.1-.923,2.211,2.211,0,0,1-.465-1.085A1.831,1.831,0,0,1,116.939,99.667Zm-0.206,2.7a3.745,3.745,0,0,0,2.052,1.185,1.826,1.826,0,0,0,.956-0.074,1.392,1.392,0,0,0,.842-1.458,1.779,1.779,0,0,0-.417-0.867,3.392,3.392,0,0,0-.93-0.756,3.351,3.351,0,0,0-1.121-.424,1.833,1.833,0,0,0-.964.073,1.367,1.367,0,0,0-.838,1.452A1.841,1.841,0,0,0,116.733,102.369Zm-15.589,13.284,0.394-.227,2.408,4.171,0.849-.49,0.2,0.345-1.243.718ZM102.4,22.036a3.648,3.648,0,0,1-.923,1.1,2.2,2.2,0,0,1-1.085.465,1.831,1.831,0,0,1-1.84-1.062,2.21,2.21,0,0,1-.144-1.178,4,4,0,0,1,1.407-2.437,2.226,2.226,0,0,1,1.086-.46,1.717,1.717,0,0,1,1.085.234,1.743,1.743,0,0,1,.754.823,2.2,2.2,0,0,1,.144,1.171A3.589,3.589,0,0,1,102.4,22.036Zm-0.035-2.3a1.392,1.392,0,0,0-1.458-.842,1.777,1.777,0,0,0-.867.417,3.4,3.4,0,0,0-.756.93,3.343,3.343,0,0,0-.425,1.121,1.829,1.829,0,0,0,.074.964,1.368,1.368,0,0,0,1.452.838,1.842,1.842,0,0,0,.869-0.42,3.748,3.748,0,0,0,1.185-2.052A1.827,1.827,0,0,0,102.36,19.732Zm-5.354-1.4a1.722,1.722,0,0,1,.53.516,1.5,1.5,0,0,1,.239.769,1.548,1.548,0,0,1-.227.835,1.6,1.6,0,0,1-1.434.817,1.826,1.826,0,0,1-.9-0.264,1.875,1.875,0,0,1-.584-0.515,1.67,1.67,0,0,1-.3-0.681,1.756,1.756,0,0,1,.031-0.774L94.772,19.1a1.419,1.419,0,0,0,.039.891,1.331,1.331,0,0,0,.6.668,1.441,1.441,0,0,0,.665.206,1.1,1.1,0,0,0,.611-0.148,1.312,1.312,0,0,0,.472-0.5,1.221,1.221,0,0,0,.186-0.665,1.083,1.083,0,0,0-.2-0.583,1.52,1.52,0,0,0-.5-0.445c-0.045-.026-0.1-0.053-0.155-0.081a1.67,1.67,0,0,0-.162-0.069l0.028-.2,2.181-.907-2.182-1.26,0.2-.345,2.649,1.53-0.175.3ZM95.619,119.138a2.2,2.2,0,0,1,1.093.465,4,4,0,0,1,1.407,2.437,2.226,2.226,0,0,1-.145,1.17,1.72,1.72,0,0,1-.746.823,1.744,1.744,0,0,1-1.09.241,2.21,2.21,0,0,1-1.086-.46,3.609,3.609,0,0,1-.927-1.094,3.65,3.65,0,0,1-.487-1.348,2.2,2.2,0,0,1,.14-1.171A1.83,1.83,0,0,1,95.619,119.138Zm-1.459,1.275a1.844,1.844,0,0,0-.071.962,3.739,3.739,0,0,0,1.185,2.052,1.82,1.82,0,0,0,.865.414A1.391,1.391,0,0,0,97.6,123a1.779,1.779,0,0,0,.072-0.959,3.4,3.4,0,0,0-.428-1.119,3.33,3.33,0,0,0-.758-0.928,1.821,1.821,0,0,0-.872-0.418A1.365,1.365,0,0,0,94.161,120.413ZM44.9,121.27q-0.614.2-1.02,0.333a3.157,3.157,0,0,0-.667.3,1.262,1.262,0,0,0-.422.444,0.985,0.985,0,0,0-.128.8,1.134,1.134,0,0,0,.559.634,1.234,1.234,0,0,0,.868.17,1.451,1.451,0,0,0,.79-0.466l0.316,0.28a1.839,1.839,0,0,1-.665.493,1.569,1.569,0,0,1-.75.116,1.813,1.813,0,0,1-.752-0.244,1.729,1.729,0,0,1-.6-0.554,1.354,1.354,0,0,1-.226-0.708,1.391,1.391,0,0,1,.2-0.748,1.458,1.458,0,0,1,.42-0.461,3.034,3.034,0,0,1,.649-0.341q0.387-.151.921-0.321l1.947-.613-2.3-1.33,0.2-.346,2.873,1.659-0.14.242ZM46.115,20.284a1.733,1.733,0,0,1-1.088.236,2.21,2.21,0,0,1-1.093-.464,4,4,0,0,1-1.407-2.437,2.228,2.228,0,0,1,.145-1.171,1.719,1.719,0,0,1,.746-0.822,1.743,1.743,0,0,1,1.089-.241,2.2,2.2,0,0,1,1.086.46,3.607,3.607,0,0,1,.926,1.094,3.651,3.651,0,0,1,.487,1.348,2.2,2.2,0,0,1-.14,1.172A1.73,1.73,0,0,1,46.115,20.284Zm0.441-2a3.741,3.741,0,0,0-1.185-2.052,1.821,1.821,0,0,0-.865-0.414,1.391,1.391,0,0,0-1.458.842,1.78,1.78,0,0,0-.073.959,3.4,3.4,0,0,0,.428,1.119,3.344,3.344,0,0,0,.758.928,1.83,1.83,0,0,0,.872.418,1.368,1.368,0,0,0,1.452-.838A1.846,1.846,0,0,0,46.556,18.283Zm-3.61,2.889a1.613,1.613,0,0,1-.233.822,1.826,1.826,0,0,1-.678.646,1.875,1.875,0,0,1-.738.248,1.669,1.669,0,0,1-.739-0.083,1.754,1.754,0,0,1-.655-0.414l0.26-.32a1.419,1.419,0,0,0,.791.412,1.331,1.331,0,0,0,.881-0.189,1.442,1.442,0,0,0,.511-0.473,1.1,1.1,0,0,0,.177-0.6,1.312,1.312,0,0,0-.193-0.656,1.222,1.222,0,0,0-.483-0.493,1.084,1.084,0,0,0-.6-0.121,1.523,1.523,0,0,0-.635.209q-0.067.039-.148,0.094a1.663,1.663,0,0,0-.141.106L40.16,20.23l0.3-2.342-2.182,1.26-0.2-.346,2.649-1.53,0.175,0.3-0.29,2.177a1.724,1.724,0,0,1,.712-0.2,1.5,1.5,0,0,1,.785.177,1.548,1.548,0,0,1,.609.614A1.6,1.6,0,0,1,42.946,21.172Zm-4.494.671a1.548,1.548,0,0,1,.609.614,1.6,1.6,0,0,1-.009,1.65,1.825,1.825,0,0,1-.678.646,1.874,1.874,0,0,1-.738.248,1.669,1.669,0,0,1-.739-0.083,1.755,1.755,0,0,1-.655-0.414l0.26-.32a1.42,1.42,0,0,0,.791.412,1.331,1.331,0,0,0,.881-0.189,1.442,1.442,0,0,0,.511-0.473,1.1,1.1,0,0,0,.177-0.6,1.312,1.312,0,0,0-.193-0.656,1.222,1.222,0,0,0-.483-0.493,1.083,1.083,0,0,0-.6-0.121,1.523,1.523,0,0,0-.635.209q-0.067.039-.148,0.094a1.645,1.645,0,0,0-.141.106L36.5,22.344,36.8,20l-2.182,1.26-0.2-.346,2.649-1.529,0.175,0.3-0.29,2.177a1.723,1.723,0,0,1,.712-0.2A1.5,1.5,0,0,1,38.452,21.843ZM23.041,102.737q-0.629-.138-1.05-0.222a3.162,3.162,0,0,0-.729-0.072,1.262,1.262,0,0,0-.587.173,0.985,0.985,0,0,0-.513.631,1.133,1.133,0,0,0,.167.829,1.234,1.234,0,0,0,.667.581,1.453,1.453,0,0,0,.917-0.008l0.134,0.4a1.837,1.837,0,0,1-.822.095,1.564,1.564,0,0,1-.708-0.275,1.812,1.812,0,0,1-.529-0.587,1.736,1.736,0,0,1-.244-0.781,1.36,1.36,0,0,1,.159-0.726,1.4,1.4,0,0,1,.549-0.547,1.459,1.459,0,0,1,.594-0.189,2.957,2.957,0,0,1,.733.029q0.411,0.061.958,0.183l1.993,0.441-1.33-2.3,0.346-.2,1.659,2.874-0.242.14Zm0.774-63.578a2.21,2.21,0,0,1-1.178.144A4,4,0,0,1,20.2,37.9a2.229,2.229,0,0,1-.46-1.086,1.72,1.72,0,0,1,.235-1.085,1.742,1.742,0,0,1,.823-0.753,2.2,2.2,0,0,1,1.171-.145,3.608,3.608,0,0,1,1.349.484,3.649,3.649,0,0,1,1.1.923,2.2,2.2,0,0,1,.465,1.085A1.832,1.832,0,0,1,23.815,39.159Zm0.206-2.7a3.742,3.742,0,0,0-2.052-1.185,1.822,1.822,0,0,0-.956.074,1.391,1.391,0,0,0-.842,1.458,1.781,1.781,0,0,0,.417.867,3.4,3.4,0,0,0,.93.755,3.341,3.341,0,0,0,1.121.425,1.829,1.829,0,0,0,.964-0.074,1.368,1.368,0,0,0,.838-1.452A1.845,1.845,0,0,0,24.021,36.457Zm-2.139,4.16a2.2,2.2,0,0,1,.465,1.085,1.832,1.832,0,0,1-1.062,1.84,2.21,2.21,0,0,1-1.178.144,4,4,0,0,1-2.437-1.407,2.23,2.23,0,0,1-.46-1.086,1.719,1.719,0,0,1,.235-1.085,1.743,1.743,0,0,1,.823-0.753,2.2,2.2,0,0,1,1.171-.145,3.607,3.607,0,0,1,1.349.484A3.65,3.65,0,0,1,21.882,40.617Zm-2.443-.962a1.822,1.822,0,0,0-.956.074,1.391,1.391,0,0,0-.842,1.458,1.78,1.78,0,0,0,.417.867,3.4,3.4,0,0,0,.93.755,3.344,3.344,0,0,0,1.121.425,1.83,1.83,0,0,0,.964-0.074,1.368,1.368,0,0,0,.838-1.452,1.845,1.845,0,0,0-.42-0.869A3.741,3.741,0,0,0,19.438,39.655Zm-1.842,4.9a1.5,1.5,0,0,1,.769-0.239,1.548,1.548,0,0,1,.835.227,1.6,1.6,0,0,1,.817,1.434,1.825,1.825,0,0,1-.264.9,1.873,1.873,0,0,1-.515.584,1.67,1.67,0,0,1-.681.3,1.757,1.757,0,0,1-.774-0.031l0.065-.407a1.42,1.42,0,0,0,.892-0.039,1.331,1.331,0,0,0,.668-0.6,1.441,1.441,0,0,0,.206-0.665,1.1,1.1,0,0,0-.148-0.611,1.312,1.312,0,0,0-.5-0.472,1.222,1.222,0,0,0-.665-0.186,1.084,1.084,0,0,0-.583.2,1.521,1.521,0,0,0-.445.5q-0.039.067-.081,0.155a1.638,1.638,0,0,0-.069.162l-0.2-.028-0.907-2.181-1.26,2.182-0.345-.2,1.529-2.649,0.3,0.175,0.837,2.03A1.725,1.725,0,0,1,17.6,44.553ZM14.931,66.06a1.734,1.734,0,0,1-.339,1.061,2.21,2.21,0,0,1-.949.714,3.612,3.612,0,0,1-1.407.255,3.58,3.58,0,0,1-1.407-.255,2.228,2.228,0,0,1-.941-0.711,1.719,1.719,0,0,1-.339-1.057A1.743,1.743,0,0,1,9.884,65a2.2,2.2,0,0,1,.942-0.71,3.607,3.607,0,0,1,1.41-.255,3.65,3.65,0,0,1,1.411.252,2.2,2.2,0,0,1,.945.707A1.73,1.73,0,0,1,14.931,66.06Zm-0.714-.84a1.845,1.845,0,0,0-.8-0.543,3.346,3.346,0,0,0-1.183-.192,3.339,3.339,0,0,0-1.187.192,1.822,1.822,0,0,0-.791.543,1.391,1.391,0,0,0,0,1.683,1.781,1.781,0,0,0,.794.543,3.4,3.4,0,0,0,1.183.189,3.343,3.343,0,0,0,1.183-.193,1.83,1.83,0,0,0,.8-0.546A1.368,1.368,0,0,0,14.217,65.22ZM9.632,72.031V68.9h0.385l4.83,2.4v0.49l-4.816-2.4v2.639h-0.4Zm0.595,1.018a1.393,1.393,0,0,1,.749-0.2,1.463,1.463,0,0,1,.609.133,3,3,0,0,1,.62.392q0.325,0.259.739,0.637l1.5,1.379v-2.66h0.4v3.318h-0.28l-1.6-1.463q-0.476-.434-0.8-0.718a3.137,3.137,0,0,0-.595-0.427,1.26,1.26,0,0,0-.6-0.144,0.985,0.985,0,0,0-.759.29,1.133,1.133,0,0,0-.27.8,1.235,1.235,0,0,0,.287.837,1.453,1.453,0,0,0,.8.451l-0.084.413a1.831,1.831,0,0,1-.759-0.329,1.565,1.565,0,0,1-.476-0.591A1.811,1.811,0,0,1,9.548,74.4a1.732,1.732,0,0,1,.178-0.8A1.358,1.358,0,0,1,10.227,73.05Zm5.552,21.388a3.606,3.606,0,0,1,1.094-.927,3.65,3.65,0,0,1,1.348-.487,2.2,2.2,0,0,1,1.172.14A1.831,1.831,0,0,1,20.455,95,2.21,2.21,0,0,1,19.99,96.1,4,4,0,0,1,17.553,97.5a2.228,2.228,0,0,1-1.171-.145,1.719,1.719,0,0,1-.823-0.746,1.742,1.742,0,0,1-.241-1.09A2.2,2.2,0,0,1,15.779,94.438ZM15.93,96.4a1.3,1.3,0,0,0,.664.583,1.781,1.781,0,0,0,.959.072,3.4,3.4,0,0,0,1.119-.428,3.344,3.344,0,0,0,.928-0.758A1.831,1.831,0,0,0,20.018,95a1.367,1.367,0,0,0-.838-1.452,1.846,1.846,0,0,0-.962-0.071,3.742,3.742,0,0,0-2.052,1.185,1.823,1.823,0,0,0-.414.865A1.3,1.3,0,0,0,15.93,96.4Zm4.236,0.828,0.334-.192,0.3,0.521,1.067-.616L22.074,97.3l-1.067.616,1.348,2.334-0.315.182-4.489-.537-0.2-.346,3.116-1.8Zm-2.02,2.339L21.769,100l-1.1-1.9ZM36.49,117.253a3.655,3.655,0,0,1,.923-1.1,2.213,2.213,0,0,1,1.085-.465,1.831,1.831,0,0,1,1.84,1.063,2.207,2.207,0,0,1,.144,1.178A3.61,3.61,0,0,1,40,119.279a3.572,3.572,0,0,1-.925,1.091,2.228,2.228,0,0,1-1.086.46A1.726,1.726,0,0,1,36.9,120.6a1.746,1.746,0,0,1-.753-0.823,2.2,2.2,0,0,1-.145-1.171A3.6,3.6,0,0,1,36.49,117.253Zm0.036,2.3a1.392,1.392,0,0,0,1.458.842,1.782,1.782,0,0,0,.867-0.417,3.4,3.4,0,0,0,.755-0.93,3.346,3.346,0,0,0,.425-1.121,1.829,1.829,0,0,0-.074-0.964,1.366,1.366,0,0,0-1.452-.838,1.852,1.852,0,0,0-.869.419,3.749,3.749,0,0,0-1.185,2.052A1.824,1.824,0,0,0,36.526,119.557Zm6.277-1.674-2.408,4.17,0.849,0.49-0.2.346-1.243-.718,2.608-4.516Zm54.914,0.61a1.626,1.626,0,0,1,.223-0.832,1.761,1.761,0,0,1,.66-0.635,1.9,1.9,0,0,1,.755-0.254,1.745,1.745,0,0,1,.747.082,1.67,1.67,0,0,1,.649.41l-0.248.313a1.382,1.382,0,0,0-.821-0.4,1.41,1.41,0,0,0-.882.195,1.249,1.249,0,0,0-.487.479,1.217,1.217,0,0,0-.152.625,1.379,1.379,0,0,0,.2.663,1.3,1.3,0,0,0,.476.489,1.237,1.237,0,0,0,.618.168,1.257,1.257,0,0,0,.637-0.178,1.359,1.359,0,0,0,.5-0.49,1.175,1.175,0,0,0,.184-0.571l0.36-.118,1.07,2.623-2.261,1.306-0.2-.346,1.973-1.139-0.71-1.743a1.291,1.291,0,0,1-.2.38,1.8,1.8,0,0,1-.535.466,1.661,1.661,0,0,1-.868.239,1.667,1.667,0,0,1-1.446-.859A1.728,1.728,0,0,1,97.716,118.493Zm22.892-19.168a2.992,2.992,0,0,1-.34-0.649q-0.153-.387-0.322-0.921l-0.613-1.947-1.33,2.3-0.346-.2,1.659-2.873,0.243,0.14,0.656,2.069q0.195,0.614.333,1.02a3.157,3.157,0,0,0,.3.667,1.262,1.262,0,0,0,.444.422,0.985,0.985,0,0,0,.8.128,1.134,1.134,0,0,0,.634-0.559,1.234,1.234,0,0,0,.17-0.868,1.451,1.451,0,0,0-.466-0.79l0.28-.316a1.839,1.839,0,0,1,.493.665,1.569,1.569,0,0,1,.116.75,1.8,1.8,0,0,1-.244.752,1.736,1.736,0,0,1-.553.6,1.36,1.36,0,0,1-.709.226,1.392,1.392,0,0,1-.748-0.2A1.458,1.458,0,0,1,120.608,99.325Zm4.63-32.234,1.883,1.421a4.548,4.548,0,0,0,.557.364,2.556,2.556,0,0,0,.553.224,2.246,2.246,0,0,0,.591.077,1.786,1.786,0,0,0,.886-0.217,1.6,1.6,0,0,0,.609-0.591,1.644,1.644,0,0,0,.22-0.85,1.7,1.7,0,0,0-.213-0.847,1.593,1.593,0,0,0-.585-0.6,1.79,1.79,0,0,0-1.715,0,1.579,1.579,0,0,0-.581.581,1.6,1.6,0,0,0-.21.812,1.745,1.745,0,0,0,.049.409,1.15,1.15,0,0,0,.172.378,1.052,1.052,0,0,0,.332.3l-0.035-.112-2.513-1.89V67.09Zm2.562-.2a1.165,1.165,0,0,1,.445-0.43,1.311,1.311,0,0,1,.647-0.157,1.288,1.288,0,0,1,.644.157,1.162,1.162,0,0,1,.441.43,1.266,1.266,0,0,1,0,1.236,1.2,1.2,0,0,1-.441.43,1.266,1.266,0,0,1-.644.161,1.311,1.311,0,0,1-.647-0.157,1.174,1.174,0,0,1-.445-0.427A1.279,1.279,0,0,1,127.8,66.894Zm-2.306,6.3a2.2,2.2,0,0,0,.945.707,3.652,3.652,0,0,0,1.41.252,3.61,3.61,0,0,0,1.411-.255,2.2,2.2,0,0,0,.941-0.71,1.743,1.743,0,0,0,.336-1.064,1.721,1.721,0,0,0-.339-1.057,2.223,2.223,0,0,0-.942-0.71,4,4,0,0,0-2.814,0,2.206,2.206,0,0,0-.948.714A1.829,1.829,0,0,0,125.494,73.194Zm0.374-1.9a1.838,1.838,0,0,1,.8-0.546,3.345,3.345,0,0,1,1.183-.192,3.4,3.4,0,0,1,1.183.189,1.78,1.78,0,0,1,.795.542,1.393,1.393,0,0,1,0,1.684,1.823,1.823,0,0,1-.791.542,3.744,3.744,0,0,1-2.37,0,1.854,1.854,0,0,1-.8-0.542A1.368,1.368,0,0,1,125.868,71.294Z"


   />

<rect width=".5" height="20" x="69.75" 
// data-fill="main"
 fill="tomato" ></rect>
<rect width=".5" height="15" y="30" x="69.75" data-opacity="10" ></rect>


    </svg>
  );
};

export default GaugeZoom;
