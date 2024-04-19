
// generating chart
import { ChartJSNodeCanvas } from 'chartjs-node-canvas';
const createChart = async (categoryLabels, categoryValues) => {
    const canvasRenderService = new ChartJSNodeCanvas({ width: 800, height: 600 });
    const categoryChart = {
        type: 'bar',
        data: {
            labels: categoryLabels,
            datasets: [{
                label: 'Quantity Sold',
                data: categoryValues,
                backgroundColor: 'skyblue',
            }],
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    },
                }],
            },
        },
    };

    return await canvasRenderService.renderToBuffer(categoryChart);
};

export { createChart };
