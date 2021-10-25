const http = require('http');

const PORT = 3000;

const cars = [
    {
        id: 0,
        make: 'Ford',
        model: 'Fiesta',
        year: '2018'
    },
    {
        id: 1,
        make: 'Ford',
        model: 'Focus',
        year: '2019'
    },
    {
        id: 2,
        make: 'Ford',
        model: 'Mustang',
        year: '2021'
    },
    {
        id: 3,
        make: 'BMW',
        model: 'X5',
        year: '2022'
    },
    {
        id: 4,
        make: 'Audi',
        model: 'A4',
        year: '2022'
    }
];

const server = http.createServer((req, res) => {
    const urlParts = req.url.split('/');
    if (urlParts[1] === 'cars') {
        if (urlParts.length === 2) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(cars));
        } else if (urlParts.length === 3) {
            const carId = parseInt(urlParts[2]);
            const car = cars.find(car => car.id === carId);
            if (car) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(car));
            } else {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Car not found');
            }
        }
    } else  { 
        res.statusCode = 404;
        res.end('Not found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});