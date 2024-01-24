import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
const data = [
  { name: "Group C", value: 20 },
  { name: "Group A", value: 40 },
  { name: "Group B", value: 39 },
  { name: "Group E", value: 50 },
  { name: "Group D", value: 30 },
];
const COLORS = ["#FFDDB6", "#E5A500", "#FFC879", "#5E4200", "#956F00"];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={30}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Chart;
