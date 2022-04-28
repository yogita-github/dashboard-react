import "./featuredInfo.css"
import { ArrowDownward,ArrowUpward } from "@material-ui/icons"

export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Total Active Users</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">18,765</span>
                <span className="featuredMoneyRate">2.6%<ArrowUpward /></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Total Installed</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">4,876</span>
                <span className="featuredMoneyRate">+0.2%<ArrowUpward /></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Total Downloads</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">678</span>
                <span className="featuredMoneyRate">-0.1%<ArrowDownward /></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>


    </div>
  )
}
