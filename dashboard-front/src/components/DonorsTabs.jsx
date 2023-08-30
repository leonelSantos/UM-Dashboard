import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { tokens } from "../Themes";
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import DatasetIcon from '@mui/icons-material/Dataset';
import PropTypes from 'prop-types';
//import SwipeableViews from 'react-swipeable-views-react-18-fix';
import AppBar from '@mui/material/AppBar';

import { Box, IconButton, Pagination, Typography, useTheme } from "@mui/material";
import Header from "./Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "./LineChart";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataDonors } from "../data/donorData";
import Gauge from "./Gauge";
import Sunburst from "./Sunburst";
import StackedBar from "./StackedBar";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
TabPanel.propTypes = {
children: PropTypes.node,
index: PropTypes.number.isRequired,
value: PropTypes.number.isRequired,
};

function a11yProps(index) {
return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
};
}

const DashTabs = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
    setValue(newValue);
    const handleChangeIndex = (index) => {
        setValue(index);
      };      
    };
    
    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "year", headerName: "Year of Donation" },
        {
        field: "name",
        headerName: "Donors",
        flex: 1,
        cellClassName: "name-column--cell",
        },
        {
        field: "amount",
        headerName: "Amount Donated",
        flex: 1,
            renderCell: (params) => (
                <Typography color={colors.greenAccent[500]}>
                {params.row.amount}
                </Typography>
            ),
        },
        {
        field: "gift_agreement",
        headerName: "Gift Agreement",
        flex: 1,
        },
        {
        field: "amount_spent",
        headerName: "Amount Spent",
        flex: 1,
            renderCell: (params) => (
                <Typography color={colors.greenAccent[500]}>
                {params.row.amount_spent}
                </Typography>
            ),
        },
        {
        field: "deadline",
        headerName: "Deadline",
        flex: 1,
        },
    ];
    
    return (
    <Box 
    gridColumn="span 16"
    gridRow="span 1" 
    sx={{ width: '100%', bgcolor: colors.greenAccent[200] }}
    >
        <AppBar position="static" sx={{ backgroundColor: colors.greenAccent[800] }}>
            <Tabs 
            value={value} 
            onChange={handleChange} 
            centered
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="full width tabs example"
            >
                <Tab icon={<QueryStatsIcon/>} iconPosition="start" label="Analysis" {...a11yProps(0)}/>
                <Tab icon={<DatasetIcon/>} iconPosition="start" label="Data" {...a11yProps(1)}/>
            </Tabs>
        </AppBar>

      
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Box
        display="grid"
        gridTemplateColumns="repeat(15, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        >
            {/* ROW 1 */}
            <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.greenAccent[800]}
            >
                {/* Line Graph */}
                <Box
                mt="25px"
                p="0 30px"
                display="flex "
                justifyContent="space-between"
                alignItems="center"
                >
                    {/* Line Graph Text*/}
                    <Box>
                        <Typography
                        variant="h5"
                        fontWeight="600"
                        color={colors.grey[100]}
                        >
                            Total Donations Received
                        </Typography>
                        
                        <Typography
                        variant="h3"
                        fontWeight="bold"
                        color={colors.greenAccent[500]}
                        >
                        $50,450,342.32
                        </Typography>
                    </Box>
                    {/* Line Graph Button*/}
                    <Box>
                        {/*<IconButton>*/}
                            <DownloadOutlinedIcon
                            sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                            />
                        {/*</IconButton>*/}
                    </Box>
                </Box>

                {/* Chart */}
                <Box height="250px" m="-20px 0 0 0">
                    <LineChart isDashboard={true} />
                </Box>
            </Box>

                {/* Gauge Chart */}
                <Box
                gridColumn="span 7"
                gridRow="span 2"
                backgroundColor={colors.greenAccent[800]}
                display={'flex'}
                justifyContent= {'center'}
                alignItems= {'center'}
                >
                    <Gauge initialWidth={450} initialHeight={300} GaugeTitle={"Donation Goals"}/>
                </Box>

                {/* Sunburst */}
                <Box
                gridColumn="span 6"
                gridRow="span 4"
                backgroundColor={colors.greenAccent[800]}
                display={'flex'}
                >
                    <Sunburst/>
                </Box>
                

                {/* Grouped Bar Chart */}
                <Box
                gridColumn="span 9"
                gridRow="span 4"
                backgroundColor={colors.greenAccent[800]}
                >
                    <Box
                    mt="10px"
                    p="0 10px"
                    display="flex "
                    justifyContent="space-between"
                    alignItems="center">
                        <Typography
                        variant="h3"
                        fontWeight="600"
                        color={colors.grey[100]}
                        >
                                Donations by Department
                        </Typography>
                </Box>
                    {/*<DonorsBar/>*/} 
                    <StackedBar/>
                </Box>
        </Box>
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          {/* Data Grid */}
          <Box 
          gridColumn="span 15"
          gridRow="span 2"
          m="0px"
          >
            <Header
            title="Donor Data"
            subtitle="List of Donors for Reference"
            />
            
            <Box
            height="75vh"
            sx={{
            "& .MuiDataGrid-root": {
                border: "none",
            },
            "& .MuiDataGrid-cell": {
                borderBottom: "none",
            },
            "& .name-column--cell": {
                color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[700],
                borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${colors.grey[100]} !important`,
            },
            }}
            >
                <DataGrid 
                checkboxSelection
                rows={mockDataDonors}
                columns={columns}
                components={{ Toolbar: GridToolbar }}
                />
            </Box>
            </Box>
        </TabPanel>
    </Box>
  );
};

export default DashTabs;