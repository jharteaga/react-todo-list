import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const ProductivityChart = ({ tasks }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const newData = {
      labels: ['Completed', 'Pending'],
      datasets: [
        {
          label: 'To-Do List',
          data: [
            tasks.filter((t) => t.completed).length,
            tasks.filter((t) => !t.completed).length,
          ],
          backgroundColor: ['#a8df65', '#e84a5f'],
          hoverBorderWidth: 3,
          hoverBorderColor: '#000',
        },
      ],
    };

    setData(newData);
  }, [tasks]);

  return (
    <div>
      <Doughnut data={data} width={800} height={400} />
    </div>
  );
};

export default ProductivityChart;
