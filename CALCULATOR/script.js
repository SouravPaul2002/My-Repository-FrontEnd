let string = "";
let num = document.querySelectorAll(".number");
Array.from(num).forEach((num)=>{
    num.addEventListener('click', (a)=>{
        console.log(a.target);
        string = string + a.target.innerHTML;
        document.querySelector("input").value = string;
    })
})