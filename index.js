
import fs from 'fs';
import { loadData, cleanData } from './src/dataLoader.js';
import { calculateMetrics } from './src/metricsCalculator.js';
import { createChart } from './src/visualization.js';

const filePath = './data/ecom.csv';

const main = async () => {
    try {
        // Load data.
        let data = await loadData(filePath);
        
        // Clean data..
        cleanData(data);
        
        // Calculate metrics...
        const { totalRevenue, averageRevenuePerOrder, topSellingCategory, categorySales } = calculateMetrics(data);

        // Create visualization....
        const categoryLabels = Object.keys(categorySales);
        const categoryValues = Object.values(categorySales);
        const categoryChartImage = await createChart(categoryLabels, categoryValues);

        // Save visualization.....
        fs.writeFileSync('product_category_distribution.png', categoryChartImage);

        // Print key metrics......
        console.log('Total Revenue:', totalRevenue);
        console.log('Average Revenue per Order:', averageRevenuePerOrder);
        console.log('Top Selling Product Category:', topSellingCategory);
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

main();
