
// /*  Note: Without a compare function, sort() converts values to strings, so [30, 4, 200] becomes [200, 30, 4].
// This bug appears in real interviews */ 

 const values = [30, 4, 200];

 values.sort((a,b) => b - a);
 const st = values.toString();
 console.log(st)

    //const stt = String(values);
    // console.log(stt)