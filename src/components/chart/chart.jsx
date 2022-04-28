import "./chart.css"
import { LineChart, Line, XAxis,  CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function chart() {
    const data = [
        {
          name: 'Jan',
          "Active User": 4000,
          
        },
        {
          name: 'Feb',
          "Active User": 3000,
          
        },
        {
          name: 'Mar',
          "Active User": 2000,
          
        },
        {
          name: 'Apr',
          "Active User": 2780,
          
        },
        {
          name: 'May',
          "Active User": 1890,
          
        },
        {
          name: 'Jun',
          "Active User": 2390,
          
        },
        {
          name: 'Jul',
          "Active User": 4590,
          
        },
        {
            name: 'Aug',
            "Active User": 2390,
            
          },
          {
            name: 'Sep',
            "Active User": 4390,
            
          },
          {
            name: 'Oct',
            "Active User": 2400,
            
          },
          {
            name: 'Nov',
            "Active User": 5200,
            
          },
          {
            name: 'Dec',
            "Active User": 3245,
            
          },
      ];
      
  return (
    <div className="chart">
        <h3 className="chartTitle">Current Downloads</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="grey"/>
                <Line type="monotone" dataKey="Active User" stroke="#5550bd"/>
                <Tooltip/>
                <CartesianGrid strokeDasharray="5 5"/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
