let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () =>{
    console.log("투명드래곤이 울부지저따 .");
});

function greet(name){
    return `안녕 ${name}님!`;
}
console.log(greet("정민"));  //콘솔을통해 호출함