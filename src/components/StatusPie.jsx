import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

const COLORS = ['#f59e0b', '#3b82f6', '#ef4444', '#10b981', '#8b5cf6']

const StatusPie = ({ byStatus }) => {
  const data = Object.entries(byStatus).map(([name, value]) => ({ name, value }))

  return (
    <PieChart width={300} height={300}>
      <Pie data={data} dataKey='value' nameKey='name' cx='50%' cy='50%' outerRadius={80}>
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  )
}

export default StatusPie