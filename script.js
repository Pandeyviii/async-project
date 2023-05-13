console.log("person 1: shows ticket");
console.log("person 2: shows ticket");

// const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("ticket");
//  },3000)
// })
// const getPopcorn=promiseWifeBringingTicks.then((t)=>{
//     console.log("wife: i have the tics");
//     console.log("husband: we should go in");
//     console.log("wife: no i am hungry");
//     return new Promise((resolve,reject)=>{
//         resolve(`${t} popcorn`)
//     })
// })
//  const getButter=getPopcorn.then((t)=>{
//     console.log("husband: i got the popcorn");
//     console.log("husband: we should go in");
//     console.log("wife: i need butter on my popcorn");
//     return new Promise((resolve,reject)=>{
//         resolve(`${t} butter`)
//     })
// }) 
// getButter.then((t)=>console.log(t));

//with the help of async wait
const preMovie= async()=> {
    const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("ticket");
         },3000)
         });
         const getPopcorn=new Promise((resolve,reject)=>resolve('popcorn'));
         const addButter=new Promise((resolve,reject)=>resolve('Butter'));
         let ticket=await promiseWifeBringingTicks;
         console.log(`wife: i have the tics ${ticket}`);
         console.log("husband: we should go in");
        console.log("wife: no i am hungry");
        let popcorn=await getPopcorn;
            console.log(`husband: i got the popcorn ${popcorn}`);
            console.log("husband: we should go in");
            console.log("wife: i need butter on my popcorn");
        let butter=await addButter;
        console.log(`husband: i got some butter ${butter}`);
        console.log("husband:anything else darling");


         return ticket;
}
preMovie().then((msg)=>console.log(`person 3: shows ${msg}`));
console.log("person 4: shows ticket");
console.log("person 5: shows ticket");