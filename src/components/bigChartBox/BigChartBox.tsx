import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
  import "./bigChartBox.scss";
  
  const data = [
    {
      name: "Sun",
      cars: 4000,
      bike: 2400,
      bus: 2400,
    },
    {
      name: "Mon",
      cars: 3000,
      bike: 1398,
      bus: 2210,
    },
    {
      name: "Tue",
      cars: 2000,
      bike: 9800,
      bus: 2290,
    },
    {
      name: "Wed",
      cars: 2780,
      bike: 3908,
      bus: 2000,
    },
    {
      name: "Thu",
      cars: 1890,
      bike: 4800,
      bus: 2181,
    },
    {
      name: "Fri",
      cars: 2390,
      bike: 3800,
      bus: 2500,
    },
    {
      name: "Sat",
      cars: 3490,
      bike: 4300,
      bus: 2100,
    },
  ];
  
  const BigChartBox = () => {
    return (
      <div className="bigChartBox">
        <h1>Revenue Analytics</h1>
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Cars"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="Bike"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="Bus"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default BigChartBox;