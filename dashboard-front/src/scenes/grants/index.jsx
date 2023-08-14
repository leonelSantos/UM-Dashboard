import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../Themes";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "../../components/LineChart";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockGrantsData } from "../../data/grantsData";
import StatBox from "../../components/StatBox";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import RedeemIcon from '@mui/icons-material/Redeem';
import Gauge from "../../components/Gauge";
//import GroupedBar from "../../components/GroupedBar";
import { LinearProgress } from '@mui/material';
import GrantsBar from "../../components/GrantsBar";

const Grants = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
      
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
    return(
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Grants" subtitle="Welcome to the Grants page" />
            </Box>

            {/* GRID & CHARTS */}
            <Box
            display="grid"
            gridTemplateColumns="repeat(15, 1fr)"
            gridAutoRows="140px"
            gap="20px"
            >
                {/*Row 1*/}
                <Box
                gridColumn="span 5"
                backgroundColor={colors.primary[400]}
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
                <Box
                gridColumn="span 5"
                backgroundColor={colors.primary[400]}
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
                <Box
                gridColumn="span 5"
                backgroundColor={colors.primary[400]}
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
                gridColumn="span 9"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
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
                gridColumn="span 6"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}>
                    <Gauge/>
                </Box>
        
                {/*Donors Bar Chart */}
                <Box
                gridColumn="span 15"
                gridRow="span 3"
                backgroundColor={colors.primary[400]}>
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

                {/* Data Grid */}
                <Box 
                gridColumn="span 15"
                gridRow="span 2"
                m="20px">
                    <Header
                        title="Grants"
                        subtitle="List of Grants for Reference"
                    />
                    <Box
                        m="40px 0 0 0"
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
            </Box>           
        </Box>
    );
};

export default Grants;