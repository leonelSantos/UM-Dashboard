import Plot from 'react-plotly.js';
import { tokens } from "../Themes";
import { useTheme } from "@mui/material";


const Gauge = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
        paper_bgcolor: colors.primary[400],
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
  
  export default Gauge;