
const readline = require("readline-sync");
const C=2;
// Take the input
let R = Number(readline.question("Enter the length of the matrix:"));
 let matrix = [];
for (let i = 0; i < R; ++i) {
    let a=[];
    for(let j=0;j<C;j++)
    a.push(Number(readline.question()));
matrix.push(a);
}
let n=  Number(readline.question("Enter Number of people in queue:"));

let seats=[];   //  fill the output with -1 as empty seat initially
for(let i=0;i<matrix.length;i++){
    let r=matrix[i][1];
    let c=matrix[i][0];
    let a=[];
for (let j = 0; j < r; ++j) {
   let b=[]
    for(let z=0;z<c;z++)
    b.push(-1);
    a.push(b);

}
seats.push(a);
}

const length= matrix.length;
console.log(length);
let filled=0;   // number of seats filled so far
function fill_aisle(){
   
    let row=0;
    let temp=-1;
    while (filled<n && filled!=temp) {
        temp=filled;
        for(let i=0;i<length;i++){
            if(matrix[i][1]>row){
                if(i==0 && matrix[i][0]>1){
                    filled+=1;
                    let Col=matrix[i][0]-1;
                    seats[i][row][Col]=filled;
                    if(filled>=n) break;
                }
                else if(i==length-1 &&matrix[i][0]>1){
                    filled+=1;
                    let Col=0;
                    seats[i][row][Col]=filled;
                    if(filled>=n) break;
                }
            
            else {
                filled += 1;
               let Col = 0;
              
               seats[i][row][Col] = filled;
                if (filled >= n)
                    break;
            
        
    
            if (matrix[i][0] > 1){
            filled += 1;
            let Col = matrix[i][0] - 1;
            seats[i][row][Col]=filled;
            if (filled >= n)
            break;
            }
        }
        }
        }
            row++;
        
     
        
    }
}
function fill_window(){
    let row=0;
    let temp=0;
   console.log(filled);
    while (filled<n && temp!=filled) {
    temp=filled;
            if(matrix[0][1]>row){
                
                    filled+=1;
                    let windowseat=0;
                    seats[0][row][windowseat]=filled;
                    if(filled>=n) break;
                }
                
            
        
    
            if (matrix[length-1][1] > row){
            filled += 1
            let windowseat=matrix[length-1][0]-1;
            seats[length-1][row][windowseat]=filled;
            if (filled >= n)
            break;
            }
        row++;
        }
        
    
}

function fill_middle(){
    let row = 0;
   let temp = 0;
    while (filled < n && filled != temp){
        temp = filled
        for(let i=0;i<length;i++){
            if (matrix[i][1] > row){
                if (matrix[i][0] > 2){
                    if(filled==n) break;
                    for (let col=1;col<matrix[i][0]-1;col++){
                        filled += 1
                        seats[i][row][col] = filled;
                        if (filled >= n)
                            break;
                    }
                }
            }
        }
        row += 1;
        
    }
}

fill_aisle();  // fill aisle seats first
fill_window(); // fill window  seats
fill_middle();  // fill middle seats last
console.log(seats);

function print_output(){
    let maxrow=0;
    for(let i=0;i<matrix.length;i++)
    maxrow= Math.max(maxrow,matrix[i][1]);

 
    for(let j=0;j<matrix.length;j++){
    
        for(let row=0;row<matrix[j][1];row++){
            let s="";
            for(let col =0;col<matrix[j][0];col++){
             s+="|";
             if(seats[j][row][col]==-1)
             s+='_';
           else  s+= seats[j][row][col];
    
            }
            console.log(s);;
            

        }
        console.log('\n');


    }
    
}
print_output();   // output format each compartment with newline , underscore shows the seat is empty

