import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../Themes";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box 
    mb="30px"
    >
      <Typography
        variant="h2"
        align="center"
        color={colors.primary[300]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography 
      variant="h5" 
      color={colors.greenAccent[500]}
      align="center"
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;