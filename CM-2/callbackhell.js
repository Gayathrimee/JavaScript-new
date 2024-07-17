// const get = require('./api.js');

// const  BASE_URL =  'https://code-malayalam.github.io/school-test-api/';

// function getTotalStudents(clsName, success, failure){
//     get(`${BASE_URL}/class/${clsName}.json`, (data) => {
//         console.log(data);

//         get(`${BASE_URL}/staff/${classTeacher}.json`, (data) => {
//             console.log(data);

//             const classes = data.classes;
//             let count = 0; 
//             let sum = 0;
//             let error = false;

//             for (let index = 0; index < classes.length; index ++){
//                 const element = classes[index];

//                 get(`${BASE_URL}/class/${element}.json`,() => {
//                     count ++;
//                     sum = sum + data.numberOfStudents;

//                     if (count ===classes.length && error === false){
//                         console.log(sum)
//                         success(sum);
//                     }

//                 }, (error) => {
//                     if(error === false){
//                         error = true;
//                         error(err)
//                     }
//                 })
//             }

//         },failure);

//     }, failure);
// }

// getTotalStudents('10c', (data) => {
//     }, (err) => {

//     })


    //  avoiding callback hell with promise

// const get = require('./api.js');
// const axios = require('axios.js')

// const  BASE_URL =  'https://code-malayalam.github.io/school-test-api/';

// function getTotalStudentsPr(clsName) {
//     axios(`${BASE_URL}/class/${clsName}.json`)
//     .then( (data)=> {
//         const classTeacher = data.classTeacher;
//         return axios(`${BASE_URL}/staff/${classTeacher}.josn`)
//     })

//     .then((data) => {
//         const classes = data.data.classes;
//         const promiseArr = classes.map((element) => {
//             return axios(`${BASE_URL}/class/${element}.json`)
//         });
//         return Promise.all;;(promiseArr)
//     })
//     .then((data) => {
//         return data.reduce((total,item) => {
//             return total + item.data.numberOfStudents
//         }, 0);
//     })
//     .then((data) => {
//         console.log(data);
//     })
// }

// function getTotalStudents(clsName, success, failure){
//     get(`${BASE_URL}/class/${clsName}.json`, (data) => {
//         console.log(data);

//         get(`${BASE_URL}/staff/${classTeacher}.json`, (data) => {
//             console.log(data);

//             const classes = data.classes;
//             let count = 0; 
//             let sum = 0;
//             let error = false;

//             for (let index = 0; index < classes.length; index ++){
//                 const element = classes[index];

//                 get(`${BASE_URL}/class/${element}.json`,() => {
//                     count ++;
//                     sum = sum + data.numberOfStudents;

//                     if (count ===classes.length && error === false){
//                         console.log(sum)
//                         success(sum);
//                     }

//                 }, (error) => {
//                     if(error === false){
//                         error = true;
//                         error(err)
//                     }
//                 })
//             }

//         },failure);

//     }, failure);
// }

// getTotalStudentsPr('10c')

// getTotalStudents('10c', (data) => {
//     }, (err) => {

//     })


    //  avoiding callback hell with async-await


    const get = require('./api.js');
    const axios = require('axios.js')
    
    const  BASE_URL =  'https://code-malayalam.github.io/school-test-api/';

    async function getTotalStudentsAs(clsName){
        const data = await axios(`${BASE_URL}/class/${clsName}.json`)
        const classTeacher = data.classTeacher;
        const data2 = await axios(`${BASE_URL}/class/${element}.json`)
        const classes = data.data.classes;

        const promiseArr = classes.map((element) => {
            return axios(`${BASE_URL}/class/${element}.json`)
        });
        const data3 = await Promise.all(promiseArr);
        const result = data3.reduce((total,item) => {
            return total + item.data.numberOfStudents;
        }, 0);  
        
        return result;
    }
    
    function getTotalStudentsPr(clsName) {
        axios(`${BASE_URL}/class/${clsName}.json`)
        .then( (data)=> {
            const classTeacher = data.classTeacher;
            return axios(`${BASE_URL}/staff/${classTeacher}.josn`)
        })
    
        .then((data) => {
            const classes = data.data.classes;
            const promiseArr = classes.map((element) => {
                return axios(`${BASE_URL}/class/${element}.json`)
            });
            return Promise.all(promiseArr)
        })
        .then((data) => {
            return data.reduce((total,item) => {
                return total + item.data.numberOfStudents
            }, 0);
        })
        .then((data) => {
            console.log(data);
        })
    }
    
    function getTotalStudents(clsName, success, failure){
        get(`${BASE_URL}/class/${clsName}.json`, (data) => {
            console.log(data);
    
            get(`${BASE_URL}/staff/${classTeacher}.json`, (data) => {
                console.log(data);
    
                const classes = data.classes;
                let count = 0; 
                let sum = 0;
                let error = false;
    
                for (let index = 0; index < classes.length; index ++){
                    const element = classes[index];
    
                    get(`${BASE_URL}/class/${element}.json`,() => {
                        count ++;
                        sum = sum + data.numberOfStudents;
    
                        if (count ===classes.length && error === false){
                            console.log(sum)
                            success(sum);
                        }
    
                    }, (error) => {
                        if(error === false){
                            error = true;
                            error(err)
                        }
                    })
                }
    
            },failure);
    
        }, failure);
    }
    
    getTotalStudentsPr('10c')