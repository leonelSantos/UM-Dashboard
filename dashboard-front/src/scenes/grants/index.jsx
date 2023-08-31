import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../Themes";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "../../components/LineChart";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockGrantsData } from "../../data/grantsData";
import GrantsTabs from "../../components/GrantsTabs";

const Grants = () => {
    return(
        <Box m="20px">
            <Box>
                <Header title="GRANTS" subtitle="Welcome to the Grants Page" />
            </Box>
            {/* Tabs */}
            <GrantsTabs/>
        </Box>         
    );
};

export default Grants;