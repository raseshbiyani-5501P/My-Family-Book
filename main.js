var albums =[
    "Dad_character.png",
    "Mom character.jpg",
    "Sister character.jpg",
    "My character.jpg"
]
var i=0;
function next(){
    document.getElementById("albums").src=albums[i]
    i=i+1;
}