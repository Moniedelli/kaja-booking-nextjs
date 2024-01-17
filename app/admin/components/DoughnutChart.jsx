// Komponen React (DoughnutChart)
import { Chart } from 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';

export default function DoughnutChart() {
  const chartRef = useRef(null);
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/admin/transaction/doughnut');
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

      const statusLabels = ['Done', 'Pending', 'Canceled', 'Paid'];
      const dataValues = statusLabels.map((status) => {
        const statusData = transactionData.find((transaction) => transaction.status === status);
        return statusData ? statusData.total : 0;
      });

      const data = {
        labels: statusLabels,
        datasets: [{
          label: 'Total Transactions',
          data: dataValues,
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1,
        }]
      };

      const newChart = new Chart(context, {
        type: 'doughnut',
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
