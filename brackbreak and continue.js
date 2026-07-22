let i =0;

for(let i=0; i<10; i++){
    
    if(i==5){
        continue; // skip the rest of the code in this iteration and continue with the next iteration
    }
    if(i==8){
        break; // exit the loop completely
    }

    console.log(` I ->  ${i} `);
    
}
