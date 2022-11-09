function Grading(){
    let allMarks=[70,80,50,60,57,48,44,75];
    allMarks.shift();
    allMarks.shift();
    allMarks.pop();
    let totalMrks=0;
    for(let i=0;i<allMarks.length;i++){
     totalMrks=totalMrks+allMarks[i];
    }
    let Grade;
    let meanMark=totalMrks/5;
    if(meanMark>=70){
        Grade="A";
    }
    else if(meanMark>=60){
        Grade="B";
    }
    else if(meanMark>=50){
        Grade="C";
    }
    else if(meanMark>=40){
        Grade="D";
    }
    else if(meanMark<40){
        Grade="E";
    }
    else{
        "No Grade";
    }
    
    console.log("Hello you scored "+totalMrks+" marks and "+Grade+" grade in your last exam");
}
console.log(Grading())
