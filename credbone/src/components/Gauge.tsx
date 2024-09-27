import React, { useId } from "react";

interface GaugeProps {
  value: number;
  max: number;
  size: number;
}

const Gauge: React.FC<GaugeProps> = ({ value, max, size }) => {
  // const radius = size / 2 - 15;
  // const circumference = 2 * Math.PI * radius;
  // const offset = circumference - (value / max) * circumference;

  const maskid = useId();

  return (
    <svg
      width="100%"
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      //transform="rotate(-225)"

      data-rotate="-225"
    >

<defs>
        <mask id={maskid}>
        <rect width="100%" height="100%" fill="white"></rect>
        <circle         cx="50%"
        cy="50%"
        r="6" fill="black"></circle>
      </mask>
    </defs>

      {/* <path
        
        data-opacity="0"
        fill="currentColor"
        d="M104.975,61h-5c0.008-.333.025-0.665,0.025-1s-0.017-.667-0.025-1h5c0.007,0.334.025,0.665,0.025,1S104.982,60.666,104.975,61ZM60,20c-0.335,0-.667.017-1,0.025v-5c0.334-.007.665-0.025,1-0.025s0.666,0.018,1,.025v5C60.667,20.017,60.335,20,60,20ZM48.685,21.634L47.39,16.8q0.958-.279,1.932-0.518l1.295,4.832Q49.641,21.352,48.685,21.634Zm-9.545,4.234-2.5-4.334c0.569-.346,1.148-0.677,1.733-1l2.5,4.33Q39.99,25.345,39.139,25.868ZM31.026,32.44L27.49,28.9q0.692-.723,1.414-1.414l3.536,3.536Q31.715,31.715,31.026,32.44Zm-6.161,8.43-4.33-2.5c0.321-.585.652-1.164,1-1.733l4.334,2.5Q25.346,39.991,24.865,40.869Zm-3.747,9.747-4.832-1.295q0.237-.975.518-1.932l4.83,1.294Q21.352,49.641,21.118,50.617ZM20,60c0,0.335.017,0.667,0.025,1h-5C15.018,60.666,15,60.335,15,60s0.018-.666.025-1h5C20.017,59.333,20,59.665,20,60Zm1.634,11.316L16.8,72.61q-0.279-.958-0.518-1.932l4.832-1.295Q21.352,70.359,21.634,71.316Zm4.234,9.546-4.334,2.5c-0.346-.569-0.677-1.148-1-1.733l4.33-2.5Q25.345,80.01,25.868,80.861Zm6.572,8.114L28.9,92.51q-0.723-.692-1.414-1.414l3.536-3.535Q31.715,88.285,32.44,88.975Zm8.43,6.161-2.5,4.33c-0.585-.321-1.164-0.652-1.733-1l2.5-4.334Q39.991,94.654,40.869,95.135Zm9.747,3.747-1.295,4.832q-0.975-.237-1.932-0.518l1.294-4.83Q49.641,98.648,50.617,98.882ZM60,100c0.335,0,.667-0.017,1-0.025v5c-0.334.007-.665,0.025-1,0.025s-0.666-.018-1-0.025v-5C59.333,99.983,59.665,100,60,100Zm11.316-1.634,1.294,4.83q-0.958.279-1.932,0.518l-1.295-4.832Q70.359,98.648,71.316,98.366Zm9.546-4.234,2.5,4.334c-0.569.346-1.148,0.677-1.733,1l-2.5-4.33Q80.01,94.655,80.861,94.132Zm8.114-6.572L92.51,91.1q-0.692.723-1.414,1.414L87.56,88.975Q88.285,88.285,88.975,87.56Zm6.161-8.43,4.33,2.5c-0.321.585-.652,1.164-1,1.733l-4.334-2.5Q94.654,80.009,95.135,79.131Zm3.747-9.747,4.832,1.295q-0.237.975-.518,1.932l-4.83-1.294Q98.648,70.359,98.882,69.383Z"
      /> */}

      
{/* <circle
        //      data-opacity="0"
        cx="50%"
        cy="50%"
        r="21"
        stroke="currentcolor"
        data-stroke="secondary"
        strokeWidth="30"
        fill="none"
        data-opacity="30"
        
        pathLength="133.333"
        strokeDasharray={`${value} 133.333`}
        // strokeDashoffset={offset}
        // transform={`rotate(-90 ${size / 2} ${size / 2})`}
        data-duration=".325"
        data-transition-prop="stroke-dasharray"
      /> */}

      <g
mask={`url(#${maskid})`}
        x="0"
        width="120"
        height="120"
        y="0"
        fill="currentColor"
        data-transition-prop="transform"
        
        data-duration=".325"
        transform-origin="center"
        transform={"rotate(" + (value || 0) * 2.7 + ")"}
      >
        <path d="M57,57l39,2v2L57,63V57Z" />
        {/* <rect width="30" height="2" x="75" y="59"></rect> */}
      </g>

      <circle
        cx="50%"
        cy="50%"
        r="6"
        strokeWidth="4"
        fill="none"
        stroke="currentColor"
      ></circle>

      <circle
        cx="50%"
        cy="50%"
        r="55"
        stroke="currentcolor"
        strokeWidth="10"
        fill="none"
        data-opacity="10"
        //strokeDasharray={`${value} 10 30 133.333` }
        strokeDasharray={` ${value - 3.5} 7 ${100 - value - 3.5} 133.333`}
        pathLength="133.333"
        strokeLinecap="round"
        // strokeDashoffset="0"
        data-duration=".725"
        data-transition-prop="stroke-dasharray"
      />


      

      <circle
        //      data-opacity="0"
        cx="50%"
        cy="50%"
        r="55"
        stroke="currentcolor"
        data-stroke="main"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        pathLength="133.333"
        strokeDasharray={`${value - 3.5} 133.333`}
        // strokeDashoffset={offset}
        // transform={`rotate(-90 ${size / 2} ${size / 2})`}
        data-duration=".725"
        data-transition-prop="stroke-dasharray"
      />
    </svg>
  );
};

export default Gauge;
