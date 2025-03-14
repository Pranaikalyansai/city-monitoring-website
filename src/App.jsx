import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
const Card = ({ children }) => <div className="bg-white p-4 shadow-md rounded-md">{children}</div>;
const CardContent = ({ children }) => <div>{children}</div>;

const dummyData = [
  { time: "08:00", traffic: 70, pollution: 40, vehicles: 200 },
  { time: "10:00", traffic: 90, pollution: 60, vehicles: 400 },
  { time: "12:00", traffic: 50, pollution: 35, vehicles: 150 },
  { time: "14:00", traffic: 65, pollution: 50, vehicles: 300 },
  { time: "16:00", traffic: 80, pollution: 70, vehicles: 500 },
  { time: "18:00", traffic: 95, pollution: 85, vehicles: 700 },
];

function TrafficMonitoring() {
  return (
    <div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2">
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">Traffic & Pollution Monitoring</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dummyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="traffic" stroke="#8884d8" name="Traffic Congestion" />
              <Line type="monotone" dataKey="pollution" stroke="#82ca9d" name="Pollution Level" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">Vehicle Count</h2>
          <ul className="space-y-2">
            {dummyData.map((data, index) => (
              <li key={index} className="flex justify-between bg-gray-100 p-2 rounded-md">
                <span>{data.time}</span>
                <span className="font-bold">{data.vehicles} vehicles</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TrafficMonitoring/>
    </>
  )
}

export default App
