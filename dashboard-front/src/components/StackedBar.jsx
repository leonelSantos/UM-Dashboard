import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { tokens } from "../Themes";
import { useTheme } from "@mui/material";

const data = [
    {
        name: '2018',
        KIN: 10000,
        KIN_Used: 5000,
        EPS: 5000,
        EPS_Used: 2000,
        TAL: 2000,
        TAL_Used: 1500
      },
      {
        name: '2019',
        KIN: 20000,
        KIN_Used: 15000,
        EPS: 7000,
        EPS_Used: 3000,
        TAL: 3000,
        TAL_Used: 1900
      },
      {
        name: '2020',
        KIN: 25000,
        KIN_Used: 20000,
        EPS: 6000,
        EPS_Used: 5000,
        TAL: 2800,
        TAL_Used: 2000
      },
      {
        name: '2021',
        KIN: 30000,
        KIN_Used: 27000,
        EPS: 9000,
        EPS_Used: 7000,
        TAL: 2100,
        TAL_Used: 1900
      },
      {
        name: '2022',
        KIN: 27000,
        KIN_Used: 20000,
        EPS: 7000,
        EPS_Used: 5000,
        TAL: 3100,
        TAL_Used: 2100
      },
      {
        name: '2023',
        KIN: 31000,
        KIN_Used: 27000,
        EPS: 5000,
        EPS_Used: 2000,
        TAL: 3500,
        TAL_Used: 1850
      },
];

const StackedBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 40,
          }}
        >
            <defs>
                <pattern id="stripe" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <rect width="2" height="4" fill="red" />
                </pattern>
            </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke={colors.primary[100]}/>
          <YAxis stroke={colors.primary[100]}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="KIN" stackId="a" fill="#ef8839" />
          <Bar dataKey="KIN_Used" stackId="a" fill="url(#stripe)" />
          <Bar dataKey="EPS" stackId="b" fill="#266938" />
          <Bar dataKey="EPS_Used" stackId="b" fill="url(#stripe)" />
          <Bar dataKey="TAL" stackId="c" fill="#a6c5e8" />
          <Bar dataKey="TAL_Used" stackId="c" fill="url(#stripe)" />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  export default StackedBar;
