import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
  ResponsiveContainer,
} from "recharts";
import { USDollar } from "../utils";

const data = [
  { name: "Jan", value: 12000 },
  { name: "Feb", value: 21000 },
  { name: "Mar", value: 6000 },
  { name: "Apr", value: 28000 },
  { name: "May", value: 14000 },
  { name: "Jun", value: 45000 },
  { name: "Jul", value: 14000 },
  { name: "Aug", value: 22500 },
  { name: "Sep", value: 32000 },
  { name: "Oct", value: 9000 },
  { name: "Nov", value: 30000 },
  { name: "Dec", value: 26000 },
];

const RoundedBar = (props) => {
  const { x, y, width, height } = props;

  // Define the height of the rounded part
  const radius = 10;
  const path = `M${x},${y + radius} A${radius},${radius} 0 0 1 ${x + width},${
    y + radius
  } L${x + width},${y + height} L${x},${y + height} Z`;

  return <path d={path} fill={props.fill} />;
};
const ActiveBar = (props) => {
  const { x, y, width, height } = props;

  // Define the height of the rounded part
  const radius = 10;
  const path = `M${x},${y + radius} A${radius},${radius} 0 0 1 ${x + width},${
    y + radius
  } L${x + width},${y + height} L${x},${y + height} Z`;

  return <path d={path} fill={"url(#colorRevenue)"} />;
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return (
      <div className="bg-[#090C2C] dark:bg-black h-[26px] w-[100px] px-4 rounded-md relative flex justify-center items-center">
        <p className="text-xs text-white">{USDollar.format(value)}</p>
        <div id="triangle-down" className="fixed -bottom-1"></div>
      </div>
    );
  }

  // content: "";
  // position: absolute;
  // top: 100%;
  // left: 50%;
  // margin-left: -5px;
  // border-width: 5px;
  // border-style: solid;
  // border-color: black transparent transparent transparent;

  return null;
};

export const SalesTrendBarChart = () => {
  let [barGraphData, setBarGraphData] = React.useState({});
  return (
    <ResponsiveContainer width="95%" height="90%">
      <BarChart
        // width={700}
        // width={500}
        // height={300}
        data={data}
        // margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={"#34CAA5"} stopOpacity={0.8} />
            <stop
              offset="95%"
              stopColor={"rgb(52,202,165,0.2)"}
              stopOpacity={0.8}
            />
          </linearGradient>
        </defs>

        {/* <CartesianGrid vertical={false} stroke={"#333"} /> */}
        <CartesianGrid
          vertical={false}
          strokeDasharray="3 3"
          style={{ background: "black", color: "black" }}
        />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          // className="dark"
          style={{ fontSize: "10px" }}
        />

        <YAxis
          axisLine={false}
          tickLine={false}
          style={{ fontSize: "10px" }}
          ticks={[0, 5000, 10000, 20000, 30000, 40000, 50000]}
          domain={["dataMin", "dataMax"]}
          // tickCount={2} // Adjust this value to control the number of horizontal lines
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={false}
          // position={{ y: 0 }}
          position={{ x: barGraphData.x - 25, y: barGraphData.y - 48 }}
        />

        {/* <Legend /> */}

        <Bar
          dataKey="value"
          // className="relative"
          shape={<RoundedBar />}
          fill="rgb(52,202,165,0.2)"
          activeBar={<ActiveBar />}
          onMouseOver={(data) => {
            setBarGraphData(data);
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
