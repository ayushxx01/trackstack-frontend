// StatusPie.jsx

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#2D1AA8",
  "#5B52D1",
  "#C9D8F0",
  "#F59E0B",
  "#10B981",
];

const StatusPie = ({ byStatus }) => {
  const data = Object.entries(byStatus).map(([name, value]) => ({
    name,
    value,
  }));

  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="rounded-2xl border border-gray-200 transition hover:bg-gray-100 p-6 shadow-sm">

       <h2 className='text-black font-bold text-lg'>Status breakdown</h2>

      {/* Chart */}
      <div className="relative mx-auto mt-10 h-[200px] w-[200px]">

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={50}
              outerRadius={100}
              paddingAngle={0}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center Card */}
      
      </div>

      {/* Stats */}
      <div className="mt-10 space-y-6">
        {data.map((item, index) => {
          const percentage =
            total > 0
              ? Math.round((item.value / total) * 100)
              : 0;

          return (
            <div
              key={item.name}
              className="flex items-center justify-between"
            >

              {/* Left */}
              <div className="flex items-center gap-4">
                <div
                  className="h-5 w-5 rounded-full"
                  style={{
                    backgroundColor:
                      COLORS[index % COLORS.length],
                  }}
                />

                <p className="text-2xl font-medium text-gray-900">
                  {item.name}
                </p>
              </div>

              {/* Right */}
              <p className="text-2xl font-bold text-gray-900">
                {item.value} ({percentage}%)
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatusPie;