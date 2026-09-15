const user = async () => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!res.ok) throw new Error ("Network response was not ok");
        const user = await res.json();
        user.forEach((u) => {
            console.log(u.name + " - " + u.email  )
        })
    }
    catch(error)
    {
 console.log("There was a problem with the fetch operation: " + error.message);
    }
};

user();