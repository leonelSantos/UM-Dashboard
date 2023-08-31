import { Box, useTheme } from "@mui/material";
import { tokens } from "../../Themes";
import Header from "../../components/Header";
import ScholarTabs from "../../components/ScholarTabs";

const Scholarships = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box m="20px">
            <Box>
                <Header title="SCHOLARSHIPS" subtitle="Welcome to the Scholarships Page" />
            </Box>
            {/* Tabs */}
            <ScholarTabs/>
        </Box>           
        
    );
};

export default Scholarships;