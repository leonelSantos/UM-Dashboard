import Plot from 'react-plotly.js';
import { tokens } from "../Themes";
import { useTheme } from "@mui/material";

const NestedPie = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
      <Plot
        data={[
          {
            type: 'pie',
            labels: ['KIN', 'EPS', 'TAL'],
            values: [1, 2, 3],
            hole: 0.7
          }, 
          {
            type: 'pie',
            labels: ['KIN', 'EPS', 'TAL'],
            values: [1, 2, 3],
            domain: {
              x: [0.2, 0.8],
              y: [0.2, 0.8]
            },
          },
         
        ]}
        layout={{
          width: 750, 
          height: 600, 
          title: 'Nested Pie',
          font:{
            family: 'Source Sans 3, sans-serif',
            size: 12,
            color: colors.grey[100]
          }, 
          paper_bgcolor: colors.primary[400]} }
      />
    );
  };

export default NestedPie; 