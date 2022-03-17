
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
    cats.push("Ralph");
    cats;
}
function destructivelyPrependCat() {
    cats.unshift("Bob");
    cats;
}
function destructivelyRemoveLastCat() {
    cats.pop(-3);
    cats;
}
function destructivelyRemoveFirstCat() {
    cats.shift(1);
    cats;
}

function appendCat(name) {
    const cat = [...cats, name]
    return cat;
}

function prependCat(name) {
    const cat = [name, ...cats];
    return cat;
}

function removeLastCat() {
    const cat = [cats.slice()];
    return cats.slice(0, - 1);
}

function removeFirstCat() {
    const cat = [cats.slice()];
    return cats.slice(-2);
}
//Okay, we got our base M,O,G.
//We added Ralph at the end
//We added Bob
//We removed Ralph
//We removed Bob
//So we have back to our original M,O,G
//We need to add "Broom" to the end of the Array without destruction.
//In order to do that we need appendCats = "Brooms" then ...(spread) "cats"