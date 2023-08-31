import Chart from "react-apexcharts";

const Radial = ({series, label}) => {

    const settings = {
        series: [series],
        options: {
        chart: {
          height: 350,
          type: 'radialBar',
          toolbar: {
            show: false
          }
        },
        plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 225,
               hollow: {
                margin: 0,
                size: '70%',
                background: '#fff',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                  enabled: true,
                  top: 3,
                  left: 0,
                  blur: 4,
                  opacity: 0.24
                }
              },
              track: {
                background: '#4cf701',
                strokeWidth: '67%',
                margin: 0, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.7
                }
              },
          
              dataLabels: {
                show: true,
                name: {
                  offsetY: -10,
                  show: true,
                  color: '#888',
                  fontSize: '17px'
                },
                value: {
                  formatter: function(val) {
                    return val + "%";
                  },
                  color: '#111',
                  fontSize: '36px',
                  show: true,
                }
              }
            }
          },
          fill: {
            type: 'gradient',
            colors: ['#eb9160'],
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: ['#e15441'],
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 200]
            }
          },
          stroke: {
            lineCap: 'round'
          },
          labels: [label],
        },
      };
    
    return(
        <Chart
        options = {settings.options}
        series = {settings.series}
        type = "radialBar"
        height = {350}
        />
    );
};

export default Radial;