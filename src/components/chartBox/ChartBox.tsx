import { Link } from "react-router-dom";
import "./chartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: number;
    percentage: number;
    chartData: object[];
    period: string;
}


const ChartBox = (props: Props) => {

  return (
    <div className="chartBox">
      <div className="box-info">
        <div className="title">
          <img src={props.icon} alt="" />
          <span> {props.title} </span>
        </div>
      <h1> {props.number} </h1>
      <Link style={{color: props.color}} to="/">View all</Link>
      </div>
      <div className="chart-info">
        <div className="chart">
          <ResponsiveContainer width="99%" height="99%">
            <LineChart data={props.chartData}>
                <Tooltip 
                    contentStyle={{background: "transparent", border: "none"}}
                    labelStyle={{display: "none"}}
                    position={{x: 10, y: 70}}
                />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text">
          <div className="percentage" style={{color: props.percentage > 0 ? "limegreen" : "tomato"}}> {props.percentage}% </div>
          <div className="duration"> this {props.period}</div>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
