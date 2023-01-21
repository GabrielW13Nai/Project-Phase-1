
const baseAPI = 'http://localhost:3000/worker'

function openForm(){
    document.getElementById('registration').style.display='block';
    document.getElementById('reg').style.display='block';

}
function btnHide(){
    document.getElementById('registration').style.display='none';
    document.getElementById('reg').style.display='none';
}


function logInformation(info){
    console.log(info)
}

let frm = document.getElementById('registration');
document.addEventListener('DOMContentLoaded',()=>{
    frm.addEventListener('submit',e => {
        e.preventDefault();})
    })

function worker(info){
    let obj= {
        names:e.target.names.value,
        identity:e.target.identity.value,
        gender:e.target.genders.value,
        worktype:e.target.worktype.value,
        age:e.target.age.value,
        imageURL:e.target.imgadded.value
    }
    appendRecords(data)
}
        
    
 

// function getRecords(){
//     fetch('http://localhost:3000/worker')
//     .then(resp =>resp.json())
//     .then(records => console.log(records))
// }
// getRecords();




function submit(){
    document.getElementById('registered').addEventListener('click',e=>{
        e.preventDefault();
    })
}


function appendRecords(data){
    fetch('http://localhost:3000/worker',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data=>worker(data));
}
        
