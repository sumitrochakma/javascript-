

// function calculation(){
//     let x = 500
//     let y = 300
//     let z = x+y
//     let rusult = z
//     console.log(rusult);
    

// }

// calculation()





// for (let i = 0; i < teams.length; i++) {

//     console.log(teams[i]);
    
// }

// teams.map((item)=>{

//     console.log(item);
    
// })



let mamberlist = ["kamal","jamal","hasan","nahid","nitun","mitun"]


function grattings(mambers){
    let utterance = new SpeechSynthesisUtterance(`welcome ${mambers}`);
    speechSynthesis.speak(utterance);
}

for (let i = 0; i < mamberlist.length; i++) {
    grattings(mamberlist[i]);
    
}


