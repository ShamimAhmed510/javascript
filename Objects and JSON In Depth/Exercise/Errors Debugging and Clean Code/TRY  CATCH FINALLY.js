function parseUser(json){
    try{
   const user = JSON.parse(json);
   return user.name;
    }
    catch(err){
        console.log("Error parsing JSON:", err.message);
    }
    finally
    {
        console.log("Execution completed.");
    }
}
parseUser("{bROKEN USER"); // Valid JSON