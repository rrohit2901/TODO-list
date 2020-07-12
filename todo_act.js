class Task{
    constructor(name, deadline, status){
        this.name = name;
        this.status = status;
        this.deadline = deadline;
        this.id = count;
    }
    set_name(name){
        this.name = name;
    }
    set_deadline(deadline){
        this.deadline = deadline;
    }
}

let all = [];
let complete = [];
let incomplete = [];
let count = 0;
function taskCreation(cre_frm){
    let name = cre_frm.querySelector("#Tname").value;
    let deadline = cre_frm.querySelector("#Dead").value;
    let task = new Task(name, deadline, 0);
    return task;
}

function myfunc1(){
    let obj = taskCreation(cre_frm);
    all.push(obj);
    if(obj.status === 1){
        complete.push(obj);
    }
    else{
        incomplete.push(obj);
    }
}

function myfunc3(id){
    let l = document.querySelector("#list");
    id = parseInt(id);
    let i=0;
    for(i=0;i<all.length;i++){
        if(all[i].id==id){
            all.splice(i,1);
            break;
        }
    }
    for(i=0;i<complete.length;i++){
        if(complete[i].id==id){
            complete.splice(i,1);
            break;
        }
    }
    for(i=0;i<incomplete.length;i++){
        if(incomplete[i].id==id){
            incomplete.splice(i,1);
            break;
        }
    }
    refresh_list(val, l);
}

function myfunc4(id){
    let l = document.querySelector("#list");
    id = parseInt(id);
    let i = 0;
    let temp;
    for(i=0;i<all.length;i++){
        if(all[i].id == id){
            all[i].status = 1;
            temp = all[i];
            break;
        }
    }
    complete.push(temp);
    for(i=0;i<incomplete.length;i++){
        if(incomplete[i].id == id){
            incomplete.splice(i,1);
            break;
        }
    }
    refresh_list(val, l);
}

function refresh_list(val = 1, l){
    if(val == 1){
        l.innerHTML = "";
        let i;
        for(i=0;i<all.length;i++){
            let node = document.createElement("div");
            let name1 = document.createTextNode(all[i].name);
            let deadline = document.createTextNode("Deadline : ");
            let date = document.createElement("span");
            date.innerHTML = all[i].deadline;
            let btn1 = document.createElement("BUTTON");
            let btn2 = document.createElement("BUTTON");
            btn1.innerHTML = "Mark as Done";
            btn2.innerHTML = "Delete";
            btn1.setAttribute("id", "done");
            btn2.setAttribute("id","del");
            temp = (all[i].id).toString();
            btn1.setAttribute("value", temp);
            btn1.setAttribute("onclick", "myfunc4(this.value)");
            btn2.setAttribute("value", temp);
            btn2.setAttribute("onclick", "myfunc3(this.value)");
            node.setAttribute("class", "tasks");
            if(all[i].status==0){
                node.style.backgroundColor = "#ed5f5f";
            }
            else{
                node.style.backgroundColor = "#bbed8a";
            }
            node.appendChild(name1);
            node.appendChild(document.createElement("br"));
            node.appendChild(deadline);
            node.appendChild(date);
            node.appendChild(document.createElement("br"));
            node.appendChild(btn1);
            node.appendChild(btn2);
            l.appendChild(node);
        }
        if(all.length == 0){
            l.appendChild(document.createTextNode("No items to show"));
        }
    }
    else if(val==2){
        l.innerHTML = "";
        let i;
        for(i=0;i<complete.length;i++){
            let node = document.createElement("div");
            let name1 = document.createTextNode(complete[i].name);
            let deadline = document.createTextNode("Deadline : ");
            let date = document.createElement("span");
            date.innerHTML = complete[i].deadline;
            let btn1 = document.createElement("BUTTON");
            let btn2 = document.createElement("BUTTON");
            btn1.innerHTML = "Mark as Done";
            btn2.innerHTML = "Delete";
            btn1.setAttribute("id", "done");
            btn2.setAttribute("id","del");
            temp = (complete[i].id).toString()
            btn1.setAttribute("value", temp);
            btn1.setAttribute("onclick", "myfunc4(this.value)");
            btn2.setAttribute("value", temp);
            btn2.setAttribute("onclick", "myfunc3(this.value)");
            node.setAttribute("class", "tasks");
            if(complete[i].status==0){
                node.style.backgroundColor = "#ed5f5f";
            }
            else{
                node.style.backgroundColor = "#bbed8a";
            }
            node.appendChild(name1);
            node.appendChild(document.createElement("br"));
            node.appendChild(deadline);
            node.appendChild(date);
            node.appendChild(document.createElement("br"));
            node.appendChild(btn1);
            node.appendChild(btn2);
            l.appendChild(node);
        }
        if(complete.length == 0){
            l.appendChild(document.createTextNode("No items to show"));
        }
    }
    else{
        l.innerHTML = "";
        let i;
        for(i=0;i<incomplete.length;i++){
            let node = document.createElement("div");
            let name1 = document.createTextNode(incomplete[i].name);
            let deadline = document.createTextNode("Deadline : ");
            let date = document.createElement("span");
            date.innerHTML = all[i].deadline;
            let btn1 = document.createElement("BUTTON");
            let btn2 = document.createElement("BUTTON");
            btn1.innerHTML = "Mark as Done";
            btn2.innerHTML = "Delete";
            btn1.setAttribute("id", "done");
            btn2.setAttribute("id","del");
            temp = (incomplete[i].id).toString()
            btn1.setAttribute("value", temp);
            btn1.setAttribute("onclick", "myfunc4(this.value)");
            btn2.setAttribute("value", temp);
            btn2.setAttribute("onclick", "myfunc3(this.value)");
            node.setAttribute("class", "tasks");
            if(incomplete[i].status==0){
                node.style.backgroundColor = "#ed5f5f";
            }
            else{
                node.style.backgroundColor = "#bbed8a";
            }
            node.appendChild(name1);
            node.appendChild(document.createElement("br"));
            node.appendChild(deadline);
            node.appendChild(date);
            node.appendChild(document.createElement("br"));
            node.appendChild(btn1);
            node.appendChild(btn2);
            l.appendChild(node);
        }
        if(incomplete.length == 0){
            l.appendChild(document.createTextNode("No items to show"));
        }
    }
}

function myfunc2(value){
    val = parseInt(value);
    refresh_list(val, list_node);
}

let cre_frm = document.querySelector(".frm_1");
let sub_but = document.querySelector("#submit");
let list_node = document.querySelector("#list");
let val = 1;

sub_but.addEventListener("click", function(event){
    event.preventDefault();
    myfunc1();
    refresh_list(val, list_node);
    count = count+1;
});

