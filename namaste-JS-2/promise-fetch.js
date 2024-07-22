// fetch is basically an api which is given by browser to us to make external calls

const GITHUB_API = "https://api.github.com/users/akshaymarch7"

// we are fetching the user info from the api
// the fetch fn will return us a promise

const user = fetch(GITHUB_API);
console.log(user);

user.then(function(data){
    console.log(data);
})