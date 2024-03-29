import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../Themes";
import { useTheme } from "@mui/material";
import { mockPieData as data } from "../data/mockData";

const SemiCircPie = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsivePie
        data={data}
        theme={{
            tooltip: {
                container: {
                  color: colors.primary[500],
                },
              },
            legends: {
                text: {
                  fill: colors.grey[100],
                },
              },
        }}
        margin={{ top: 20, right: 80, bottom: 80, left: 80 }}
        startAngle={-90}
        endAngle={90}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: "accent" }}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'colors',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={colors.grey[100]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor= {colors.grey[100]}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor= {{
            from: 'colors',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'TAL'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'EPS'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'KIN'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 30,
                itemDirection: 'left-to-right',
                itemOpacity: 0.75,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: "hover",
                        style: {
                            itemBackground: "rgba(0, 0, 0, .03)",
                            itemOpacity: 1,
                        }
                    }
                ]
            }
        ]}
    />
  );
};

export default SemiCircPie;