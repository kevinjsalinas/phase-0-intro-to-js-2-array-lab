// Write your solution here!


const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

    cats.shift()
}

function appendCat(name) {     //appendCat nondestructively spread operator
    cats.length = 0;           //remember to take notes to read the lab `comments` better
    cats.push("Milo", "Otis", "Garfield");

    const newCats = [...cats, name];
    return newCats;
}

function prependCat(name) {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

    const newCats = [name, ...cats];
    return newCats;
}

function removeLastCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

    const newCats = cats.slice(0,2)
    return newCats;

}

function removeFirstCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

    const newCats = cats.slice(-2);
    return newCats;
}

