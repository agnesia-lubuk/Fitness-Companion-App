/*jshint esversion: 6 */

const express = require('express');
const bodyParser = require('body-parser');

// load cors
const cors = require('cors');

const app = express();


// url whitelist
const whitelist = ['http://localhost:8080'];

// kode konfigurasi ketika menggunakan cors
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not Allowed bt Cors'));
        }
    }
};

const port = 3000;
app.listen(port, () => console.log(`Apps running at http://localhost:${port}`));
app.use(bodyParser.json());

let heroesList = [{
        "heroId": 1,
        "title": "Thor Ability",
        "src": "https://manofmany.com/wp-content/uploads/2020/03/Chris-Hemsworths-FItness-App-Centre-7.jpg",
        "detail": "Thor often performs the action at night. Because of that, Thor must have additional strength at night. Perform the workouts over a seven days period.",
        "training": [{
                "exerciseName": "Incline Barbell Bench Press",
                "warmUp": "2 x 10-15",
                "workingSet": "3 x 4-8",
                "restPeriod": "5 min"
            },
            {
                "exerciseName": "Barbell Bench Press",
                "warmUp": "2 x 10-15",
                "workingSet": "3 x 4-8",
                "restPeriod": "4 min"
            },
            {
                "exerciseName": "Bent Over Barbell Row",
                "warmUp": "5 x 10-15",
                "workingSet": "1 x 4-8",
                "restPeriod": "10 min"
            }
        ]
    },
    {
        "heroId": 2,
        "title": "Thor Punch",
        "src": "https://manofmany.com/wp-content/uploads/2019/02/Chris-Hemsworth-Thor-Workout-2.jpg",
        "detail": "The enemy of Thor often has a good body endurance. To damage the opponents defense, the Thor must launch a powerful punch to the opponent. Perform the workouts over a three days period.",
        "training": [{
                "exerciseName": "Incline Barbell Bench Press",
                "warmUp": "2 x 10-15",
                "workingSet": "3 x 4-8",
                "restPeriod": "5 min"
            },
            {
                "exerciseName": "Barbell Bench Press",
                "warmUp": "2 x 10-15",
                "workingSet": "3 x 4-8",
                "restPeriod": "4 min"
            },
            {
                "exerciseName": "Bent Over Barbell Row",
                "warmUp": "5 x 10-15",
                "workingSet": "1 x 4-8",
                "restPeriod": "10 min"
            }
        ]
    },
    {
        "heroId": 3,
        "title": "Steel Muscle",
        "src": "https://manofmany.com/wp-content/uploads/2019/02/Chris-Hemsworth-Thor-Workout.jpg",
        "detail": "Get ready to ramp up the intensity and really blow out the muscle.",
        "training": [{
                "exerciseName": "Incline Barbell Bench Press",
                "warmUp": "2 x 10-15",
                "workingSet": "3 x 4-8",
                "restPeriod": "5 min"
            },
            {
                "exerciseName": "Barbell Bench Press",
                "warmUp": "2 x 10-15",
                "workingSet": "3 x 4-8",
                "restPeriod": "4 min"
            },
            {
                "exerciseName": "Bent Over Barbell Row",
                "warmUp": "5 x 10-15",
                "workingSet": "1 x 4-8",
                "restPeriod": "10 min"
            }
        ]
    }
];

let personalList = [{
        "personalId": 1,
        "name": "Incline Barbell Bench Press"
    },
    {
        "personalId": 2,
        "name": "Barbell Bench Press"
    },
    {
        "personalId": 3,
        "name": "Bent Over Barbell Row"
    }
];

// tanpa cors == bisa di akses oleh web lain
app.get('/', (req, res) => res.send('Hello World!'));

// menggunakan cors == hanya diakses oleh url pada var whitelist
app.get("/heroes", cors(corsOptions), (req, res) => {
    res.json(heroesList);
});

app.get("/personals", cors(corsOptions), (req, res) => {
    res.json(personalList);
});