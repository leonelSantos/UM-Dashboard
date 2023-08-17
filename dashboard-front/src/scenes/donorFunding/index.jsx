import { Box, useTheme } from "@mui/material";
import { tokens } from "../../Themes";
import Header from "../../components/Header";
import DashTabs from "../../components/DonorsTabs";

const DonorFunding = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box m="20px">
            <Box>
                <Header title="DONOR FUNDING" subtitle="Welcome to the Donor Funding Page" />
            </Box>
            {/* Tabs */}
            <DashTabs/>
        </Box>           
        
    );
};

export default DonorFunding;