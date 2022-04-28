import React from 'react'
import "./topbar.css"
import {NotificationsNone} from "@material-ui/icons";
import {People} from '@material-ui/icons';
import {Home} from '@material-ui/icons';


export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className="logo">Dashboard</span>
            </div>
            <div className='topRight'>
                <div className='topbarIconContainer'>
                
                 <NotificationsNone/>
                 <People/>
                 <Home/>
                 
                </div>
                <img src="https://static.remove.bg/remove-bg-web/5cc729f2c60683544f035949b665ce17223fd2ec/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" alt="" className="topAvatar" />
                
                
                
            </div>
        </div>
    </div>
  )
}
