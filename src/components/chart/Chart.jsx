import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./chart.scss";

const data = [
  { name: "December", Total: 9200 },
  { name: "January", Total: 3200 },
  { name: "February", Total: 5100 },
  { name: "March", Total: 8800 },
  { name: "April", Total: 4600 },
  { name: "May", Total: 9200 },
  { name: "June", Total: 5700 },
  // { name: "July", Total: 800 },
  // { name: "August", Total: 1600 },
  // { name: "September", Total: 900 },
  // { name: "October", Total: 1700 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#004370" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#cdc2af" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="#004370" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#ea6f18"
            fillOpacity={1}
            fill="url(#total"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
