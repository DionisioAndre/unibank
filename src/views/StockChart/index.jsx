import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import io from 'socket.io-client';

const StockChart = () => {
    const [data, setData] = useState([]);
    const socket = io('http://localhost:8000');

    useEffect(() => {
        socket.on('stock_update', (newData) => {
            setData((prevData) => [...prevData, newData]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const chartData = {
        labels: data.map(d => d.timestamp), // Suponha que a nova data tem um timestamp
        datasets: [
            {
                label: 'Preço da Ação',
                data: data.map(d => d.price),
                borderColor: 'rgba(75,192,192,1)',
                fill: false,
            },
        ],
    };

    return <Line data={chartData} />;
};

export default StockChart;
