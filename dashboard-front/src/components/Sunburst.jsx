import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import { tokens } from "../Themes";
import { useTheme } from "@mui/material";




const Sunburst = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
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
        width: 600,
        height: 600,
        paper_bgcolor:colors.primary[400],
        sunburstcolorway:[
          "#ef8839","#266938","#a6c5e8"
        ],
        font:{
            family: 'Source Sans 3, sans-serif',
            size: 12,
            color: colors.primary[100]
          }, 
          margin: { t: 50, r: 50, l: 50, b: 50 },
      };
  
      return (
        <Plot
          data={data}
          layout={layout}
        />
      );
    };
  
  export default Sunburst;
  