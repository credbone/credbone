import React, { useState, useEffect } from "react";

interface LineChartProps {
  value: number;
  max: number;
  
}

const LineChart: React.FC<LineChartProps> = ({ value, max }) => {
  const [data, setData] = useState<number[]>([value]);

  useEffect(() => {
    // Update the data array whenever 'value' changes
    setData((prevData) => {
      const newData = [...prevData, value];
      return newData.length > 10 ? newData.slice(1) : newData;
    });
  }, [value]);

  const getCoordinates = (width: number, height: number) => {
    const stepX = width / Math.max(1, data.length - 1); // Avoid division by zero
    return data.map((val, i) => ({
      x: i * stepX,
      y: totalHeight - (val / max) * totalHeight,
    }));
  };

  const height = 50;
  const extraSpace = 100;
  const totalHeight = height + extraSpace;

  const coordinates = getCoordinates(100, height);

  // Function to generate a smooth curve using Bezier curves
  const smoothPath = coordinates
    .map((coord, i, arr) => {
      if (i === 0) return `M ${coord.x},${coord.y}`; // Start point
      if (i === 1) {
        // Handle the case for the second point to avoid NaN
        return `L ${coord.x},${coord.y}`; // Straight line to the second point
      }
      const prev = arr[i - 1];
      const controlX = (prev.x + coord.x) / 2; // Control point between the two points for smoothness
      return `C ${controlX},${prev.y} ${controlX},${coord.y} ${coord.x},${coord.y}`;
    })
    .join(" ");

  const fillPath = `${smoothPath} L ${coordinates[coordinates.length - 1].x},${totalHeight} L ${
    coordinates[0].x
  },${totalHeight} Z`;

  return (
    <svg
      viewBox={`0 0 100 ${totalHeight}`}
      preserveAspectRatio="none"
      width="100%"
      height="100%"
            xmlns="http://www.w3.org/2000/svg"
    >


      

{/* <defs>

<mask id="mask1"   >
     
        <rect   width="100%"
      height="100%"     fill="#000" />

        <path d={fillPath} fill="#fff"></path>
        </mask>
</defs> */}


    

      {/* Fill area below the line */}
      <path
       //data-duration=".325" 
       d={fillPath} data-fill="main" />


      {/* <foreignObject  
     
     mask="url(#mask1)"
      
      width="100%"
      height="100%">



      </foreignObject> */}


    </svg>
  );
};

export default LineChart;
