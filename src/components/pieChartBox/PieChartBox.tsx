import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";

type Props = {
  title: string;
  chartData: object[];
  chartColors: string[];
}

const PieChartBox = (props: Props) => {
  return (
    <div className="pieChartBox">
      <h1> {props.title} </h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
        <PieChart>
          <Tooltip
            contentStyle={{background: "white", borderRadius: "5px"}}
          />
        <Pie
          data={props.chartData}
          innerRadius={"70%"}
          outerRadius={"90%"}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {props.chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={props.chartColors[index % props.chartColors.length]} />
          ))}
        </Pie>
        
      </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {props.chartData.map((item, index) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{backgroundColor: props.chartColors[index]}} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
