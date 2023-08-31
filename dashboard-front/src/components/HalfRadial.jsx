import Chart from "react-apexcharts";
import { tokens } from "../Themes";
import { useTheme } from "@mui/material";



const HalfRadial = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const settings = {
        series: [76],
            options: {
              chart: {
                type: 'radialBar',
                offsetY: -20,
                sparkline: {
                  enabled: true
                }
              },
              plotOptions: {
                radialBar: {
                  startAngle: -90,
                  endAngle: 90,
                  track: {
                    background: "#e7e7e7",
                    strokeWidth: '97%',
                    margin: 5, // margin is in pixels
                    dropShadow: {
                      enabled: true,
                      top: 2,
                      left: 0,
                      color: '#999',
                      opacity: 1,
                      blur: 2
                    }
                  },
                  dataLabels: {
                    name: {
                      show: true,
                      fontSize: '25px',
                      color: '#f9983e'
                    },
                    value: {
                      offsetY: -50,
                      fontSize: '45px',
                      color: colors.primary[100]
                    }
                  }
                }
              },
              grid: {
                padding: {
                  top: -30
                }
              },
              fill: {
                type: 'gradient',
                colors: ['#f9983e'],
                gradient: {
                  shade: 'light',
                  shadeIntensity: 0.4,
                  inverseColors: false,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 50, 53, 91]
                },
              },
              labels: ['Donor Goals'],
            responsive: [
                {
                  breakpoint: 500,
                  chart: {
                    height: 350,
                    width: "50%"
                  }
                }
              ]
            }
          };
    
    return(
        <Chart
        options = {settings.options}
        series = {settings.series}
        type = "radialBar"
        height={550}
        width={"150%"}
        />
    );
};

export default HalfRadial;