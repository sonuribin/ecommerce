
import fs from 'fs';
import csv from 'csv-parser';
import moment from 'moment';

const loadData = async (filePath) => {
    return new Promise((resolve, reject) => {
        const data = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                data.push(row);
            })
            .on('end', () => {
                resolve(data);
            })
            .on('error', (err) => {
                reject(err);
            });
    });
};

const cleanData = (data) => {
    data.forEach((row) => {
        row.order_date = moment(row.order_date, 'YYYY-MM-DD').toDate();
        row.quantity_sold = parseInt(row.quantity_sold);
        row.revenue = parseInt(row.revenue);
    });
};

export { loadData, cleanData };
