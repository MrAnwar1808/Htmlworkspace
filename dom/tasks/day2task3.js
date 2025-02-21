
 const animals = ["Ant","Cat","Dog","Goat","Tiger"]

// const animallist = document.getElementById("animal-list")
// animals.forEach(animal =>{
//     const listitem = document.createElement('li')
//     listitem.textContent =animal
//     animallist.appendChild(listitem)
// })



const animallist = document.getElementById("animal-list");


animals.forEach(animal => {
    const listitem = document.createElement('li');
    listitem.textContent = animal;
    animallist.appendChild(listitem);   // Adding animal using appendChild
});


const newItemBefore = document.createElement('li');
newItemBefore.textContent = "Lion (Added using before)";
const addedItem = animallist.querySelector('li');
addedItem.before(newItemBefore);   //Adding lion using before append
// const firstItem = animallist.querySelector('li');
// firstItem.before(newItemBefore);                            //Adding lion using before append


const newItemAfter = document.createElement('li');
newItemAfter.textContent = "Elephant (Added using after)";
//const lastItem = animallist.querySelector('li')
const lastItem = animallist.querySelector('li:last-child');
lastItem.after(newItemAfter);                                 //Adding elephant using after append















// // Insert an element before a specific child using `insertBefore()`
// const insertBeforeItem = document.createElement('li');
// insertBeforeItem.textContent = "Rabbit";
// const goatItem = [...animallist.children].find(item => item.textContent === "Goat");
// animallist.insertBefore(insertBeforeItem, goatItem);

// // Replace an item using `replaceChild()`
// const replaceItem = document.createElement('li');
// replaceItem.textContent = "Cheetah";
// const dogItem = [...animallist.children].find(item => item.textContent === "Dog");
// animallist.replaceChild(replaceItem, dogItem);
