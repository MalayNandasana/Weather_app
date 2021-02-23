// 1st appaysnchronous example............
// setTimeout ( ()=> {
//     console.log("0 second timer")
// }, 0)

// setTimeout ( ()=> {
//     console.log("abc second timer")
// }, 0)


// console.log('starting')

// setTimeout ( ()=> {
//     console.log("2 second timer")
// }, 2000)

// console.log('stopping')

//2nd app..............
// const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=30118fad36167660c959c8425109d8f7&query=37.8267,-122.4233'

// request({url:url},(error,response)=>{
//     const data=JSON.parse(response.body)
//     console.log(data.current)
// })

//3rd app...........
//const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=30118fad36167660c959c8425109d8f7&query=37.8267,-122.4233'

// request({url:url,json:true},(error,response)=>{
//     // console.log(data.current)
//     //console.log(response.body.current)
//    const temp= response.body.current.temperature
//    const feellike=response.body.current.feelslike
//    console.log("it is currently " + temp + " degree out. it feels like " + feellike + " degree out.")
//    //console.log("it is currently " + response.body.current.temperature + " degree out. it feels like " + response.body.current.feelslike + " degree out.")
// })

//4th app.................
//covert temperature to fernite
const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=30118fad36167660c959c8425109d8f7&query=37.8267,-122.4233&units=f'

request({url:url,json:true},(error,response)=>{
    // const data=JSON.parse(response.body)
    // console.log(data.current)
    
   // console.log(response.body.current)
   const temp= response.body.current.temperature
   const feellike=response.body.current.feelslike
   console.log("it is currently " + temp + " degree out. it feels like " + feellike + " degree out.")
   //console.log("it is currently " + response.body.current.temperature + " degree out. it feels like " + response.body.current.feelslike + " degree out.")
   console.log(response.body.current.weather_descriptions+ " .it is currently " + temp + " degree out. it feels like " + feellike + " degree out.")
})
