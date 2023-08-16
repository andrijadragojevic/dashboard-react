import BarChartBox from "../../components/barChartBox/BarChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import TopDeals from "../../components/topDeals/TopDeals";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser, pieChartBoxLeads } from "../../data";
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <div className="box box1"><TopDeals /></div>
      <div className="box box2"><ChartBox {...chartBoxUser} /></div>
      <div className="box box3"><ChartBox {...chartBoxProduct} /></div>
      <div className="box box4"><PieChartBox {...pieChartBoxLeads} /></div>
      <div className="box box5"><ChartBox {...chartBoxRevenue} /></div>
      <div className="box box6"><ChartBox {...chartBoxConversion} /></div>
      <div className="box box7">Box 7</div>
      <div className="box box8"><BarChartBox {...barChartBoxVisit} /></div>
      <div className="box box9"><BarChartBox {...barChartBoxRevenue} /></div>
    </div>
  )
}

export default Home; 