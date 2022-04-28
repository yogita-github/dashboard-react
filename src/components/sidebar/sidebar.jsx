import "./sidebar.css"
import { LineStyle,Timeline,TrendingUp } from "@material-ui/icons";
import { Apps,Shop,AccountBalance } from "@material-ui/icons";
import { Person,FilePresent,Mail } from "@material-ui/icons";


export default function sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcons"/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcons"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcons"/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">General</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <Apps className="sidebarIcons"/>
                        App
                    </li>
                    <li className="sidebarListItem">
                        <Shop className="sidebarIcons"/>
                        E-Commerce
                    </li>
                    <li className="sidebarListItem">
                        <AccountBalance className="sidebarIcons"/>
                        Banking
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Management</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Person className="sidebarIcons"/>
                        User
                    </li>
                    
                    <li className="sidebarListItem">
                        <Mail className="sidebarIcons"/>
                        Mail
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}
