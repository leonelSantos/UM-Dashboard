import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { tokens } from "../Themes";
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import DatasetIcon from '@mui/icons-material/Dataset';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Header from "./Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "./LineChart";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockGrantsData } from "../data/grantsData";
import StatBox from "../components/StatBox";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import RedeemIcon from '@mui/icons-material/Redeem';
import Gauge from "../components/Gauge";
import { LinearProgress } from '@mui/material';
import GrantsBar from "../components/GrantsBar";
import Radial from './Radial';
import HalfRadial from './HalfRadial';

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

const GrantsTabs = () => {
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
        { 
            field: "id", 
            headerName: "ID", 
            flex: 1 , 
            align: 'center'
        },
        { 
            field: "donation_year", 
            headerName: "Year of Donation", 
            flex: 1, 
            align: 'center' 
        },
        {
            field: "pi_name",
            headerName: "PI Name",
            flex: 1,
            cellClassName: "name-column--cell",
            align: 'center'
        },
        {
            field: "department",
            headerName: "Department",
            flex: 1,
            cellClassName: "name-column--cell",
            align: 'center'
        },
        {
            field: "proposal",
            headerName: "Proposal",
            flex : 1,
            align: 'center'
        },
        {
            field: "sponsor",
            headerName: "Sponsor",
            flex: 1,
            cellClassName: "name-column--cell",
            align: 'center'
        },
        {
            field: "title",
            headerName: "Title",
            flex: 1,
            cellClassName: "name-column--cell",
            align: 'center'
        },
        {
            field: "project_type",
            headerName: "Project Type",
            flex: 1,
            cellClassName: "name-column--cell",
            align: 'center'
        },
        {
            field: "sponsor_type",
            headerName: "Sponsor Type",
            flex: 1,
            cellClassName: "name-column--cell",
            align: 'center'
        },
        {
            field: "status",
            headerName: "Status",
            flex: 1,
            align: 'center'
        },
        {
          field: "award_number",
          headerName: "Award Number",
          flex: 1,
          align: 'center'
        },
        {
            field: "donated_amount",
            headerName: "Amount Donated",
            align: 'center',
            flex: 1,
              renderCell: (params) => (
                  <Typography color={colors.greenAccent[500]}>
                  ${params.row.donated_amount}
                  </Typography>
              ),
        },
        {
          field: "amount_used",
          headerName: "Amount Used",
          align: 'center',
          flex: 1,
            renderCell: (params) => (
                <Typography color={colors.redAccent[500]}>
                ${params.row.amount_spent}
                </Typography>
            ),
        },
        {
          field: "deadline",
          headerName: "Deadline",
          flex: 1,
          align: 'center'
        },
        {
            field: "percentage_used",
            headerName: "Percentage Used",
            flex: 1,
            align: 'center',
            width: 150,
            renderCell: (params) => (
              <div style={{ width: '100%', display: 'flex', alignItems: 'center', fontSize: '14px'}}>
                <LinearProgress 
                variant="determinate" 
                value={params.value} 
                color="error"
                style={{
                    width: '80%',
                    marginRight: '8px',
                    backgroundColor: '#ccc', // Gray background color
                  }}
                />
                <span>{params.value}%</span>
              </div>
            ),
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
            {/*ROW 1*/}
            {/* Total Donated */}
            <Box
                gridColumn="span 5"
                backgroundColor={colors.greenAccent[800]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                >
                    <StatBox
                    title="$5,361,450.00"
                    subtitle="Total Donated 2023"
                    progress="0.75"
                    increase="54% Donation Goal"
                    icon={
                    <RedeemIcon
                        sx={{ color:  "#a6c5e8", fontSize: "26px" }}
                    />
                    }
                    />
            </Box>
            {/* Amount Available */}
            <Box
            gridColumn="span 5"
            backgroundColor={colors.greenAccent[800]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
            <StatBox
                title="$1,431,225.00"
                subtitle="Amount Still Available"
                progress="0.50"
                increase="21% Left"
                icon={
                <AccountBalanceWalletIcon
                    sx={{ color:  "#a6c5e8", fontSize: "26px" }}
                />
                }
            />
            </Box>
            {/* Total Donors */}
            <Box
            gridColumn="span 5"
            backgroundColor={colors.greenAccent[800]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
            <StatBox
                title="357"
                subtitle="Total Donors 2023"
                progress="0.30"
                increase="+5%"
                icon={
                <PersonAddIcon
                    sx={{ color: "#a6c5e8", fontSize: "26px" }}
                />
                }
            />
            </Box>
            {/* ROW 2 */}
            <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.greenAccent[800]}
            >
                {/* Line Graph */}
                <Box
                mt="10px"
                p="0 30px"
                display="flex "
                justifyContent="space-between"
                alignItems="center"
                >
                    {/* Line Graph Text*/}
                    <Box>
                        <Typography
                        variant="h3"
                        fontWeight="600"
                        color={colors.grey[100]}
                        >
                            Total Grants Received
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
                        <IconButton>
                            <DownloadOutlinedIcon
                            sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                            />
                        </IconButton>
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
                {/*<Gauge initialWidth={450} initialHeight={300} GaugeTitle={"Number of Grants"}/>*/}
                <HalfRadial/>
            </Box>

            {/* ROW 3 */}
            {/* Grants Bar Chart */}
            <Box
            gridColumn="span 15"
            gridRow="span 3"
            backgroundColor={colors.greenAccent[800]}>
            <Box
            mt="10px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center">
                <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
                >
                            Grants Over the Years
                </Typography>
            </Box>
                {/*<GroupedBar/>*/}
                <GrantsBar/>
            </Box>
        </Box>
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
            {/* Data Grid */}
            <Box 
                gridColumn="span 15"
                gridRow="span 2"
                >
                    <Header
                        title="Grants Data"
                        subtitle="List of Grants for Reference"
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
                            backgroundColor: colors.greenAccent[800],
                            borderBottom: "none",
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: colors.greenAccent[900],
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "none",
                            backgroundColor: colors.greenAccent[800],
                        },
                        "& .MuiCheckbox-root": {
                            color: `${colors.greenAccent[200]} !important`,
                        },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                            color: `${colors.grey[500]} !important`,
                        },
                        }}
                    >
                        <DataGrid 
                        checkboxSelection
                        rows={mockGrantsData}
                        columns={columns}
                        components={{ Toolbar: GridToolbar }}
                        />
                    </Box>
                </Box>
        </TabPanel>
    </Box>
  );
};

export default GrantsTabs;