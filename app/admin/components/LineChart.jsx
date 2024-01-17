import { Chart } from 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';

export default function LineChart() {
  const chartRef = useRef(null);
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/admin/transaction/chart');
        const data = await response.json();
        setTransactionData(data);
      } catch (error) {
        console.error('Error fetching transaction data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartRef.current && transactionData.length > 0) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const labels = transactionData.map((transaction) => `Month ${transaction.month}`);
      const dataValues = transactionData.map((transaction) => transaction.total);

      const data = {
        labels: labels,
        datasets: [{
          label: 'Total Transactions',
          data: dataValues,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }]
      };

      const newChart = new Chart(context, {
        type: 'bar',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            }
          }
        }
      });

      chartRef.current.chart = newChart;
    }
  }, [transactionData]);

  return <div style={{ position: "relative", width: "70vw", height: "50vh" }}>
    <canvas ref={chartRef} />
  </div>;
}
