setName();
function setName() {
    name = 'William Perry';
    var name;
    console.log(name);
};

console.log('some text');
let avg = findAvg(2, 2);
console.log('some text', avg);
function findAvg(a, b) {
    console.log('some text');
    var answer = (a + b) / 2;
    return answer;
};

let fruits = ['peach', 'strawberry', 'pineapple', 'banana'];
let favFruit = fruits[2];
function printFruits() {
    let favFruit = fruits[2];
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
        // console.log(leastFav);
    };
    printFavFruit();
};

printFruits();
let leastFav = fruits[3];
helloThere();
function helloThere() {
    console.log("Hello")
};

let message = function redAlert() {
    alert("WARNING!!!");
};
message();