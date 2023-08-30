import React, { useRef, useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { tokens } from "../Themes";
import { useTheme } from "@mui/material";
import { Box } from '@mui/material';



const Gauge = ({ initialWidth, initialHeight, GaugeTitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const boxRef = useRef(null);
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

  const data = [
    {
          type: 'indicator',
          mode: 'number+gauge+delta',
          title: {text: GaugeTitle},
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
        width: chartWidth,
        height: chartHeight,
        autosize: true,
        paper_bgcolor: colors.greenAccent[800],
        font:{
            family: 'Source Sans 3, sans-serif',
            size: 12,
            color: colors.primary[100]
          }, 
        margin: { t: 70, r: 50, l: 50, b: 50 },
      };
  
      return (
        <Box ref={boxRef} width="100%" height="100%">
          <Plot
            data={data}
            layout={layout}
            useResizeHandler={true}
            //style={{width: '100%', height: '100%'}}
          />
        </Box>
      );
    };
  
  export default Gauge;