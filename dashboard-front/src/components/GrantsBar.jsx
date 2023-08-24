import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { tokens } from "../Themes";
import { useTheme } from "@mui/material";

const data = [
    {
      name: '2018',
      KIN: 10000,
      EPS: 5000,
      TAL: 2000,
      Mid: 5666,
      Peak: 10000
    },
    {
      name: '2019',
      KIN: 20000,
      EPS: 7000,
      TAL: 3000,
      Mid: 10000,
      Peak: 20000
    },
    {
      name: '2020',
      KIN: 25000,
      EPS: 6000,
      TAL: 2800,
      Mid: 11266,
      Peak: 25000
    },
    {
      name: '2021',
      KIN: 30000,
      EPS: 9000,
      TAL: 2100,
      Mid: 13700,
      Peak: 30000
    },
    {
      name: '2022',
      KIN: 27000,
      EPS: 7000,
      TAL: 3100,
      Mid: 12366,
      Peak: 27000
    },
    {
      name: '2023',
      KIN: 31000,
      EPS: 5000,
      TAL: 3500,
      Mid: 13166,
      Peak: 31000
    },
  ];

  const GrantsBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 45,
            left: 20,
          }}
        >
          <CartesianGrid stroke={colors.grey[100]} />
          <XAxis dataKey="name" scale="band" stroke= {colors.grey[100]} />
          <YAxis stroke={colors.grey[100]}/>
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="Peak" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="KIN" barSize={20} fill="#ef8839" />
          <Bar dataKey="EPS" barSize={20} fill="#266938" />
          <Bar dataKey="TAL" barSize={20} fill="#a6c5e8" />
          <Line type="monotone" dataKey="Mid" stroke="#ff7300" />
          
        </ComposedChart>
      </ResponsiveContainer>
    );
  };

  export default GrantsBar;

  //<Scatter dataKey="cnt" fill="red" />