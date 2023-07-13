import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../Themes";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "../../components/LineChart";
import SemiCircPie from "../../components/SemiCirclePie";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";

const DonorFunding = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registrarId", headerName: "Registrar ID" },
        {
          field: "name",
          headerName: "Name",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "age",
          headerName: "Age",
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "phone",
          headerName: "Phone Number",
          flex: 1,
        },
        {
          field: "email",
          headerName: "Email",
          flex: 1,
        },
        {
          field: "address",
          headerName: "Address",
          flex: 1,
        },
        {
          field: "city",
          headerName: "City",
          flex: 1,
        },
        {
          field: "zipCode",
          headerName: "Zip Code",
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

                {/* Semi Circle Pie Chart */}
                <Box
                gridColumn="span 7"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                >
                    <SemiCircPie/>
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
                        <DataGrid
                        rows={mockDataContacts}
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