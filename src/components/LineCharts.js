import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor } from '@patternfly/react-charts';
import { VictoryZoomContainer } from 'victory-zoom-container';

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      width: 0
    };
    this.handleResize = () => {
      if(this.containerRef.current && this.containerRef.current.clientWidth){
        this.setState({ width: this.containerRef.current.clientWidth });
      }
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { width } = this.state;
    
    return (
      <div ref={this.containerRef}>
        <div style={{ height: '200px',width:'350px' }}>
          <Chart
            ariaDesc="Average "
            ariaTitle="Line chart of covid-19 cases"
            containerComponent={<VictoryZoomContainer zoomDimension="x" />}
            legendData={[{ name: 'active' }, { name: 'recovered' }, { name: 'decreased' }]}
            legendPosition="bottom-left"
            height={275}
            maxDomain={{y: 10}}
            minDomain={{y: 0}}

            padding={{
                bottom: 80,
                left: 0,
                right: 0, // Adjusted to accommodate legend
                top: 20
            }}
            themeColor={ChartThemeColor.multiUnordered}
            width={width}
           >
            {/* <ChartAxis tickValues={[2, 3, 4]} /> */}
            <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />
            <ChartGroup>
              <ChartLine
                data={[
                  { name: 'active', y: 1 },
                  { name: 'active', y: 2 },
                  { name: 'active', y: 5 },
                  { name: 'active', y: 3 },
                  { name: 'active', y: 4 },
                  { name: 'active', y: 5 },
                  { name: 'active', y: 7 }
                ]}
              />
              <ChartLine
                data={[
                  { name: 'recovered', y: 3 },
                  { name: 'recovered', y: 4 },
                  { name: 'recovered', y: 9 },
                  { name: 'recovered', y: 5 },
                  { name: 'recovered', y: 6 },
                  { name: 'recovered', y: 6 },
                  { name: 'recovered', y: 8 }
                ]}
              />
              <ChartLine
                data={[
                  { name: 'decreased', y: 3 },
                  { name: 'decreased', y: 3 },
                  { name: 'decreased', y: 8 },
                  { name: 'decreased', y: 7 },
                  { name: 'decreased', y: 7 },
                  { name: 'decreased', y: 9 },
                  { name: 'decreased', y: 9 }
                ]}
              />
            </ChartGroup>
          </Chart>
        </div>
      </div>
    );
  }
}
export default LineChart;