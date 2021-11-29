//object to store the quotes, colour and cuisine
const allData = {
    luckyCol : ['Red','Blue','Green','Yellow','Pink','Orange','Black','White'],
    motivationalQuotes : ["Good, better, best. Never let it rest. 'Til your good is better and your better is best.","It always seems impossible until it's done.","Life is 10% what happens to you and 90% how you react to it.","When something is important enough, you do it even if the odds are not in your favor.","Start where you are. Use what you have. Do what you can.","With the new day comes new strength and new thoughts."],
    cuisine : ['Chinese','Indian','Italian','Greek','Arabic','Thai','Japanese','Nigerian']
}
//function to return a random number
function randomNum(length){
    return Math.floor(Math.random() *length)
}
//function to print out the data randomly
function printMessage(data){
    //a random number for lucky colour array
    let luckyColNum = randomNum(data.luckyCol.length)
    //a random number for motivational quotes array
    let motivationalQuotesNum = randomNum(data.motivationalQuotes.length)
    //a random number for cuisine array
    let cuisineNum = randomNum(data.motivationalQuotes.length)
    //combine all the data and print it to the screen
    console.log(`Your quote of the day is:"${data.motivationalQuotes[motivationalQuotesNum]}"\n ${data.luckyCol[luckyColNum]} is your today's lucky colour and you should consider eating ${data.cuisine[cuisineNum]} cuisine today.`)
    


}

function asciiSmile(){
    console.log('|--|                 |--|   ----------------------------')
    console.log('|--|                 |--|  |                            |')
    console.log('|--|                 |--|   ------------    ------------')
    console.log('|--|                 |--|               |  |')
    console.log('|--|                 |--|               |  |')
    console.log('|--|                 |--|               |  |')
    console.log('|--|                 |--|               |  |')
    console.log('|--|-----------------|--|               |  |')
    console.log('|--|-----------------|--|               |  |')
    console.log('|--|                 |--|               |  |')
    console.log('|--|                 |--|               |  |')
    console.log('|--|                 |--|               |  |')
    console.log('|--|                 |--|               |  |')
    console.log('|--|                 |--|   ------------    ------------')
    console.log('|--|                 |--|  |                            |')
    console.log('|--|                 |--|   ----------------------------')
    console.log('\n')
    console.log('\n')
}
asciiSmile()
printMessage(allData)

