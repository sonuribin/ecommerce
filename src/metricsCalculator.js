// metrics calculations
const calculateMetrics = (data) => {
    const totalRevenue = data.reduce((acc, row) => acc + row.revenue, 0);
    const averageRevenuePerOrder = totalRevenue / data.length;
    const categorySales = data.reduce((acc, row) => {
        acc[row.product_category] = (acc[row.product_category] || 0) + row.quantity_sold;
        return acc;
    }, {});
    const topSellingCategory = Object.keys(categorySales).reduce((a, b) => categorySales[a] > categorySales[b] ? a : b);

    return { totalRevenue, averageRevenuePerOrder, topSellingCategory, categorySales };
};

export { calculateMetrics };
