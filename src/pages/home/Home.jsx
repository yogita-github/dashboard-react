import Chart from "../../components/chart/chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import WidgetSm from "../../components/widgetSm/widgetSm"
import WidgetLg from "../../components/widgetLg/widgetLg"

export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo/>
        <Chart/>
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
          
        </div>

    </div>
  )
}
