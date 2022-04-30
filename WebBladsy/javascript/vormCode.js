const nameEl = document.getElementById("NaamEnVan");
const aanbevelingEl = document.getElementById("aanbeveling");

function submitBtn(){
    let name = nameEl.value;
    aanbevelingEl.value = "";
    nameEl.value = "";
    alert("Dankie, " + name + " dat jy die vorm in gevul het");

}
 
// let user = {
//     name: "Keanu Kapank",
//     age: "17",
//     run: function(){
//         console.log(user.name + " is busy running ...")
//     }
// }

// console.log(user.name);
// console.log(user.age);
// user.run();

