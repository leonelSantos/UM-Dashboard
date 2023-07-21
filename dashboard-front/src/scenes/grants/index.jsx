import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../Themes";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "../../components/LineChart";
import SemiCircPie from "../../components/SemiCirclePie";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockGrantsData } from "../../data/grantsData";

const Grants = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
      
    const columns = [
        { field: "id", headerName: "ID", flex: 0 },
        { field: "donation_year", headerName: "Year of Donation" },
        {
            field: "pi_name",
            headerName: "PI Name",
            flex: 0,
            cellClassName: "name-column--cell",
        },
        {
            field: "pi_name",
            headerName: "PI Name",
            flex: 0,
            cellClassName: "name-column--cell",
        },
        {
            field: "department",
            headerName: "Department",
            flex: 0,
            cellClassName: "name-column--cell",
        },
        {
            field: "proposal",
            headerName: "Proposal",
            flex : 0,
        },
        {
            field: "sponsor",
            headerName: "Sponsor",
            flex: 0,
            cellClassName: "name-column--cell",
        },
        {
            field: "title",
            headerName: "Title",
            flex: 0,
            cellClassName: "name-column--cell",
        },
        {
            field: "project_type",
            headerName: "Project Type",
            flex: 0,
            cellClassName: "name-column--cell",
        },
        {
            field: "sponsor_type",
            headerName: "Sponsor Type",
            flex: 0,
            cellClassName: "name-column--cell",
        },
        {
            field: "status",
            headerName: "Status",
            flex: 0,
        },
        {
          field: "award_number",
          headerName: "Award Number",
          flex: 0,
        },
        {
            field: "donated_amount",
            headerName: "Amount Donated",
            flex: 0,
              renderCell: (params) => (
                  <Typography color={colors.greenAccent[500]}>
                  ${params.row.donated_amount}
                  </Typography>
              ),
        },
        {
          field: "amount_used",
          headerName: "Amount Used",
          flex: 0,
            renderCell: (params) => (
                <Typography color={colors.greenAccent[500]}>
                ${params.row.amount_spent}
                </Typography>
            ),
        },
        {
          field: "deadline",
          headerName: "Deadline",
          flex: 0,
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
                        <DataGrid checkboxSelection
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