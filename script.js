let sortDirection = false;
let personData = [
    {name:"Mohit", rr:0},
    {name:"Nikhilesh", rr:0},
    {name:"Shreyas", rr:0},
    {name:"Pathikrit", rr:0},
    {name:"Tanishk", rr:0},
    {name:"Bhuvnesh", rr:0},
];

window.onload=()=>{  
    loadLeaderboardData(personData);
}

function loadLeaderboardData(personData){
    const listBody=document.getElementById('flushData');
    let htmlInject = ' ';

    for(let person of personData){
        htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress min="0" max="1050" value="${person.rr}"></progress></li>`;
    }
    listBody.innerHTML=htmlInject;
    console.log(htmlInject);
}
function sortColumn(columnName) {
    const dataType = typeof personData[0][columnName];
    console.log(dataType)
    sortDirection = !sortDirection;

    switch(dataType){
        case 'number':
            sortNumberColumn(sortDirection,columnName);
            break;
    }
    console.log(personData);
    
}
function sortNumberColumn(sort,columnName){
    personData=personData.sort((p1,p2)=>{
        return sort ? p2[columnName] - p1[columnName] : p1[columnName]
        - p2[columnName]

    })
}

// function loadLeaderboardData(personData){
//     const listBody=document.getElementById('flushData');
//     let htmlInject = ' ';

//     for(let person of personData){
//         htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress min="0" max="1050" value="${person.rr}"></progress></li>`;
//     }
//     listBody.innerHTML=htmlInject;
//     console.log(htmlInject);
// }
sortColumn('rr')