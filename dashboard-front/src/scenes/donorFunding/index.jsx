import { Box, IconButton, Pagination, Typography, useTheme } from "@mui/material";
import { tokens } from "../../Themes";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "../../components/LineChart";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataDonors } from "../../data/donorData";
import Gauge from "../../components/Gauge";
//import DonorsBar from "../../components/DonorsBar";
import Sunburst from "../../components/Sunburst";
import StackedBar from "../../components/StackedBar";

const DonorFunding = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
      
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
    return(
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DONOR FUNDING" subtitle="Welcome to the Donor Funding page" />
            </Box>

            {/* GRID & CHARTS */}
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
                backgroundColor={colors.primary[400]}
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
                backgroundColor={colors.primary[400]}
                display={'flex'}
                >
                    <Gauge/>
                </Box>

                {/* Sunburst */}
                <Box
                gridColumn="span 6"
                gridRow="span 4"
                backgroundColor={colors.primary[400]}
                display={'flex'}
                >
                    <Sunburst/>
                </Box>

                {/* Grouped Bar Chart */}
                <Box
                gridColumn="span 9"
                gridRow="span 4"
                backgroundColor={colors.primary[400]}
                >
                    <Box
                    mt="2px"
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

                <Box 
                gridColumn="span 15"
                gridRow="span 1"
                justifyContent="center" 
                alignItems= "center" 
                display="flex"
                sx={{margin: "40px 0px"}}>
                    <Pagination count={2} variant="outlined" color="secondary" size="large"/>
                </Box>

                {/* Data Grid */}
                <Box 
                gridColumn="span 15"
                gridRow="span 2"
                m="20px">
                    <Header
                        title="Donors"
                        subtitle="List of Donors for Reference"
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
                        <DataGrid checkboxSelection
                        rows={mockDataDonors}
                        columns={columns}
                        components={{ Toolbar: GridToolbar }}
                        />
                    </Box>
                </Box>
            </Box>           
        </Box>
    );
};

export default DonorFunding;