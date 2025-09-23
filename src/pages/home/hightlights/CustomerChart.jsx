import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

function CustomerChart() {
    const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    ];

    const RADIAN = Math.PI / 180;
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
        const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${((percent ?? 1) * 100).toFixed(0)}%`}
            </text>
        );
    };
    
    return (
        <div>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label={renderCustomizedLabel}
                        labelLine={false}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CustomerChart