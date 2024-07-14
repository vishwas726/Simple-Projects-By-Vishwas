
let add = document.querySelector("#add")
let list = document.querySelector("#list")
add.addEventListener("click", function () {
    let task = document.querySelector("#task")
    if (task.value.trim() !== "") {
    let item = document.createElement("li")
    item.innerText = task.value;
    item.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    let btn = document.createElement("button")
    btn.innerText = "Delete";
    btn.classList.add("btn", "btn-danger");
    item.append(btn)


    list.append(item)

    task.value = "";

    }else{

        let al=document.querySelector("#al")
        al.style.display="block";

        setTimeout(function() {
            al.style.display = "none";
        }, 2000);
    }
})

list.addEventListener("click", function (e) {

    

    if (e.target.nodeName == "BUTTON") {


        let l = e.target.parentElement;
        l.remove();
        

    }


})




