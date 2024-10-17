import React from 'react';
import React, { useEffect, useRef } from "react";
import { Chart } from 'chart.js';
import { LineController, LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale } from 'chart.js';

// Registra los elementos y escalas necesarios
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip);

const CryptoChart = ({ data, labels }) => {
    const chartRef = useRef();

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const chartInstance = new Chart(chartRef.current, {
                type: "line",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: "Precio de la criptomoneda",
                            data: data,
                            backgroundColor: "rgba(75, 192, 192, 0.2)",
                            borderColor: "rgba(75, 192, 192, 1)",
                            borderWidth: 2,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });

            return () => {
                chartInstance.destroy();
            };
        }
    }, [chartRef, data, labels]);

    return (
        <div>
            <canvas ref={chartRef} />
        </div>
    );
};

export default CryptoChart;

