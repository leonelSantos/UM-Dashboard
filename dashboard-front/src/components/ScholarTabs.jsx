import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { tokens } from "../Themes";
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import DatasetIcon from '@mui/icons-material/Dataset';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { Box, Typography, useTheme } from "@mui/material";
import Header from "./Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockGrantsData } from "../data/grantsData";
import { LinearProgress } from '@mui/material';
import CardGrid from './CardGrid';


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

const ScholarTabs = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const cardData = [
        { title: 'Dr. Barbara Marks Scholarship ', content: 'Content for Card 1', series: 75},
        { title: 'Education Alumni Graduate Scholarships', content: 'Content for Card 2', series: 25},
        { title: 'Michael B.salwen Endwd Gra-Student Scholarship', content: 'Content for Card 3', series: 55},
        { title: 'J. Scott Watt Endowed Scholarship', content: 'Content for Card 4', series: 30},
        { title: 'The Troob Family Endowed Student Support ', content: 'Content for Card 5', series: 27},
        { title: 'Hilarie Bass Scholarship Fund  - not endowed', content: 'Content for Card 3', series: 56},
        { title: 'Edward J. Pastroff Endowed Scholarship ', content: 'Content for Card 4', series: 80},
        { title: 'Nancy G. Pastroff Endowed Graduate Scholarship ', content: 'Content for Card 5', series: 93},
        // Add more card data
      ];

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
        <Box>
            <CardGrid cardData={cardData}/>
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

export default ScholarTabs;