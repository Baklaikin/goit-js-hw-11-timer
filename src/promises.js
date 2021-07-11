import './promises-2';
import './promises-3';

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${ms}`);
            reject('Uppsss');
        }, `${ms}`);
    })
}
const logger = time => console.log(`Resolved after ${time}ms`);
delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);





