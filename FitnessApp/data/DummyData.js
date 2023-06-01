import Exercise from "../models/Exercise";
import Workout from "../models/Workout";


const e1 =  new Exercise('1', 'Barbell Bench Press', 4, 6, 8, require('../assets/Orange.png'), require('../assets/BenchPress.png'))
const e2 =  new Exercise('2', 'Incline Dumbbell Press', 3, 8, 12, require('../assets/Green.png'), null)
const e3 =  new Exercise('3', 'Cable Flys', 4, 10, 12, require('../assets/Blue.png'), null)
const e4 =  new Exercise('4', 'Front Raise', 2, 10, 12, require('../assets/Pink.png'), null)
const e5 =  new Exercise('5', 'Lateral Raise', 3, 10, 15, require('../assets/Orange.png'), null)
const e6 =  new Exercise('6', 'Tricep Cable Pushdown', 4, 10, 12, require('../assets/Green.png'), null)

const pushWorkoutExercises = new Array();
pushWorkoutExercises.push(e1);
pushWorkoutExercises.push(e2);
pushWorkoutExercises.push(e3);
pushWorkoutExercises.push(e4);
pushWorkoutExercises.push(e5);
pushWorkoutExercises.push(e6);





const e7 =  new Exercise('7', 'Weighted Pullups', 4, 6, 8, require('../assets/Orange.png'),null)
const e8 =  new Exercise('8', 'T-bar Row', 4, 8, 12, require('../assets/Green.png'), null)
const e9 =  new Exercise('9', 'Straight Arm Pulldown', 3, 8, 12, require('../assets/Blue.png'), null)
const e10 =  new Exercise('10', 'Facepulls', 3, 10, 12, require('../assets/Pink.png'), null)
const e11 =  new Exercise('11', 'Dumbbell Bicep Curl', 4, 8, 12, require('../assets/Orange.png'), null)


const pullWorkoutExercises = new Array();
pullWorkoutExercises.push(e7);
pullWorkoutExercises.push(e8);
pullWorkoutExercises.push(e9);
pullWorkoutExercises.push(e10);
pullWorkoutExercises.push(e11);


const e12 =  new Exercise('12', 'Leg Press', 4, 8, 12, require('../assets/Green.png'), null)
const e13 =  new Exercise('13', 'Romanian Deadlift', 3, 8, 12, require('../assets/Orange.png'), require('../assets/BenchPress.png'))
const e14 =  new Exercise('14', 'Leg Extension', 3, 10, 14, require('../assets/Green.png'), null)
const e15 =  new Exercise('15', 'Hamstring Curl', 3, 10, 12, require('../assets/Blue.png'), null)
const e16 =  new Exercise('16', 'Hip Abducctors', 2, 8, 12, require('../assets/Pink.png'), null)
const e17 =  new Exercise('17', 'Hip Adductors', 2, 8, 12, require('../assets/Orange.png'), null)
const e18 =  new Exercise('18', 'Standing Calf Raises', 3, 10, 15, require('../assets/Green.png'), null)
const e19 =  new Exercise('19', 'Seated Calf Raise', 3, 10, 15, require('../assets/Orange.png'), require('../assets/BenchPress.png'))


const legWorkoutExercises = new Array();
legWorkoutExercises.push(e12);
legWorkoutExercises.push(e13);
legWorkoutExercises.push(e14);
legWorkoutExercises.push(e15);
legWorkoutExercises.push(e16);
legWorkoutExercises.push(e17);
legWorkoutExercises.push(e18);
legWorkoutExercises.push(e19);



export const EXERCISES = [
    e1,
    e2,
    e3,
    e4,
    e5,
    e6
];


const w1 = new Workout("w1", "Push", pushWorkoutExercises, "20", "6", "60", "90");
const w2 = new Workout("w2", "Pull", pullWorkoutExercises, "18", "5", "60", "70");
const w3 = new Workout("w3", "Legs", legWorkoutExercises, "23", "8", "90", "120");
const w0 = new Workout("w0", "Rest", null, null, null, null, null);

export let ppl = [
    w2, w1, w2, w3, w1, w2, w3
];



