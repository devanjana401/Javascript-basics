//fetch used to get values
async function getUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let users = await response.json();  //convert into json
        console.log("first 5 users");
        users.slice(0,5).forEach(usr => {
            console.log(`# ${usr.id} : ${usr.username}`);
            
        });
        
    } catch (error) {
        console.error("Error fetching datas:",error);
    }
}
getUsers();