import React, { Component } from 'react';
import Plot from 'react-plotly.js';
//import { tokens } from "../Themes";
//import { useTheme } from "@mui/material";
//const theme = useTheme();
//const colors = tokens(theme.palette.mode);

class Gauge extends Component {
    render() {
        
      const data = [
        {
          type: 'indicator',
          mode: 'number+gauge+delta',
          title: {text: "Donation Goals"},
          value: 150, // Your indicator value
          delta: { reference: 120, increasing: { color: "#a6c5e8" } },
          position: 'center',
          gauge: {
            axis: { range: [null, 200] },
            steps: [
              { range: [0, 150], color: 'lightgray' },
              { range: [150, 200], color: 'lightgray' }
            ],
            threshold: {
              line: { color: '#ef8839', width: 4 },
              thickness: 1.0,
              value: 200 // Your threshold value
            }
          },
        }
      ];
  
      const layout = {
        width: 425,
        height: 300,
        paper_bgcolor:"#1F2A40",
        font:{
            family: 'Source Sans 3, sans-serif',
            size: 12,
            color: "#e0e0e0"
          }, 
          margin: { t: 50, r: 50, l: 50, b: 50 },
      };
  
      return (
        <Plot
          data={data}
          layout={layout}
        />
      );
    }
  }
  
  export default Gauge;
  