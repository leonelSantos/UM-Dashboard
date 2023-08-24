import React, { useRef, useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { tokens } from "../Themes";
import { useTheme } from "@mui/material";
import { Box } from '@mui/material';

const Sunburst = ({ initialWidth, initialHeight }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

 /* const boxRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(initialWidth);
  const [chartHeight, setChartHeight] = useState(initialHeight);

  useEffect(() => {
    const handleResize = () => {
      if (boxRef.current) {
        const newWidth = boxRef.current.clientWidth;
        const newHeight = boxRef.current.clientHeight;
        setChartWidth(newWidth);
        setChartHeight(newHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  */
  
  const data = [
        {
          type: "sunburst",
          labels: ["SEHD", "KIN", "EPS", "TAL", "KIN Spent", "KIN Left", "EPS Spent", "EPS Left", "TAL Spent", "TAL Left", ],
          parents: ["", "SEHD", "SEHD", "SEHD","KIN", "KIN", "EPS", "EPS", "TAL", "TAL", ],
          values:  [3, 20000, 5000, 9000, 10000, 10000, 2000, 3000, 2000, 7000],
          outsidetextfont: {size: 20, color: colors.primary[100]},
          insidetextfont: {size: 13, color: colors.primary[100]},
          leaf: {opacity: 0.4},
          marker: {line: {width: 2}},
          branchvalues: 'relative'
        }
      ];

      const layout = {
        //responsive: true,
        //useResizeHandler: true,
        //width: 600,
        //height: 500,
        //width: chartWidth,
        //height: chartHeight,
        autosize: true,
        paper_bgcolor:colors.primary[400],
        sunburstcolorway:[
          "#ef8839","#266938","#a6c5e8"
        ],
        font:{
            family: 'Source Sans 3, sans-serif',
            size: 12,
            color: colors.primary[100]
          }, 
          margin: { t: 10, r: 10, l: 10, b: 10 },
      };
  
      return (
        //<Box ref={boxRef} width="100%" height="100%">
          <Plot
            data={data}
            layout={layout}
            useResizeHandler={true}
            style={{width: '100%', height: '100%'}}
          />
        //</Box>
      );
    };
  
  export default Sunburst;
  