import './style.scss';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = 'Some random text to test';
    element.style.backgroundColor = 'red';

    return element;
}

document.body.appendChild(component());

const user: string = 'John';
const score1: number = 50;
const score2: number = 42.5;
const sum = score1 + score2;
console.log(`user ${user}`);
console.log(`first score: ${score1}`);
console.log(`second score: ${score2}`);
console.log(`sum of the scores: ${sum}`);
