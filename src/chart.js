import { PieChart, Pie, Cell, Text } from "recharts";

const Chart = ( {data} ) => {

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        index,
        fill,
      }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.8; // Adjust position from center
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        const { name, value } = data[index]; 
        const maxValue = Math.max(...data.map((d) => d.value));
        const minCircleRadius = 10;
        const maxCircleRadius = 15;
        const circleRadius =
          minCircleRadius + (value / maxValue) * (maxCircleRadius - minCircleRadius);
          const nameOffsetX = 20; // Distance from the circle to the name
          const nameOffsetY = 40; // Distance from the circle to the name
          const nameX = cx + (radius + nameOffsetX) * Math.cos(-midAngle * RADIAN);
          const nameY = cy + (radius + nameOffsetY) * Math.sin(-midAngle * RADIAN);
        return (
          <>
            <circle
              cx={x} // x position of the circle
              cy={y} // y position of the circle
              r={circleRadius} // radius of the circle
              fill="#fff" // Use the segment color for the circle
              stroke={fill} // Use the segment color for the border
              strokeWidth={3} // Width of the border
            />
            <Text
              x={x}
              y={y}
              fill="black"
              textAnchor="middle"
              dominantBaseline="central"
              style={{ fontSize: "12px", color: "black" }} // Adjust font size and color here
            >
              { value }
            </Text>
            <Text
              x={nameX}
              y={nameY}
              fill="black"
              textAnchor="middle"
              dominantBaseline="central"
              style={{ fontSize: "12px", color: "black" }} // Adjust font size and color here
            >
              { name }
            </Text>
          </>
        );
      };
    const centerX = 200; // Center X-coordinate for the PieChart
    const centerY = 130; // Center Y-coordinate for the PieChart
    const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);
    return (
      <PieChart width={800} height={400}>
        <Pie
          data={data}
          cx={centerX}
          cy={centerY}
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          minAngle={50}
          label={renderCustomizedLabel}
          labelLine={false} // Disable the label line
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <text
          x={centerX}
          y={centerY}
          fill="black"
          textAnchor="middle"
          dominantBaseline="central"
          style={{ fontSize: "15px" }} // Adjust font size and weight here
        >
          {totalValue}
        </text>
        <text
          x={centerX}
          y= {centerY+15}
          fill="black"
          textAnchor="middle"
          dominantBaseline="central"
          style={{ fontSize: "10px" }} // Adjust font size and weight here
        >
          Total
        </text>
      </PieChart>
    );
  };

  export default Chart;
