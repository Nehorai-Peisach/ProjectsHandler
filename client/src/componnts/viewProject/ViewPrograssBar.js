import Chart from 'react-apexcharts';
import dateFormat from 'dateformat';
import { useEffect, useState } from 'react';
import Loading from 'componnts/uiKit/Loading';
const day = 24 * 60 * 60 * 1000;

const ViewPrograssBar = (props) => {
  const [state, setState] = useState();

  useEffect(() => {
    const categories = [];
    const data = [];

    let tasksLeft = props.tasks.length;
    for (let i = 13; i > -1; i--) {
      const today = props.date - day * i;
      categories.push(dateFormat(today, 'dd/mm'));

      const todayDate = new Date(today);
      for (let j = 0; j < props.tasks.length; j++) {
        const task = props.tasks[j];
        if (task.doneDate) {
          const doneDate = new Date(task.doneDate);
          if (doneDate.getDate() === todayDate.getDate()) tasksLeft--;
        }
      }
      data.push(tasksLeft);
    }

    setState({
      options: {
        chart: {
          id: 'view-prograss-bar',
        },
        xaxis: {
          categories: categories,
        },
      },
      series: [
        {
          name: 'Tasks Left',
          data: data,
        },
      ],
    });
  }, []);

  return state ? (
    <div className="view_prograss_bar">
      <Chart options={state.options} series={state.series} type="bar" width="500" />
    </div>
  ) : (
    <Loading />
  );
};

export default ViewPrograssBar;
