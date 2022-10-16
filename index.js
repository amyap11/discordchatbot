// Welcome to the GoodVibes Discord Chat Bot! 

const Discord = require("discord.js")
const client = new Discord.Client()
const fetch = require('node-fetch')

// Returns `listOfCommands` array when called.
function commands() {
  return(listOfCommands)
}

// Grabs an inspirational quote from `zenquotes` api.
function quote() {
  return fetch("https://www.zenquotes.io/api/random")
  .then(res => {
    return res.json()
  })
  .then(data => {
    return data[0]["q"] + " - " + data[0]["a"] +" ✨"
  })
} 

// `listOfCommands` array to give small insight into
// each command. 
var listOfCommands = [
"!dailymotivation - Need a little motivation? 📚",
"!dailycheckup - Let's catchup, how are you today? ☺️",
"!mentalhealth - Your mental health is important, how can we help? 💖",
"!joke - Feeling down, these will be sure to lift your spirits! 😜"
]

// 10 random jokes users can receive by using
// the `!joke` command.
var jokes = [
  "Why don't koalas count as bears? They don't have the right koalafications!",
  "What time does a duck wake up? The quack of down!",
  "What does a nosey pepper do? It gets jalapeño business!",
  "What happens to a frog's car when it breaks down? It gets toad away!",
  "How many tickles does it take to make an Octopus laugh? Ten-tickles!",
  "What's a balloon's least favorite type of music? Pop!",
  "How does NASA organize a party? They planet!",
  "What did the big flower say to the little flower? Hi bud!",
  "What did one toilet say to the other toilet? You look flushed!",
  "What do you call a fake noodle? An im-pasta!"
]

// 3 daily checkup prompts users receive by
// using the `!dailycheckup` command
var dailyCheckup = [
  "How are you feeling today? ☺️",
  "Don't forget to drink water today. 😉",
  "Make sure you're taking breaks when needed today. 🧘‍♀️",
]

// Logs a successful bot sign in to the console.
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

// If message contains `!dailymotivation` return quote().
client.on("message", msg => {
  if (msg.author.bot) return

  if (msg.content === "!dailymotivation") {
    quote().then(quote => msg.channel.send(quote))
  }

// If message contains `!mentalhealth` return a list of helpful
// resources for those struggling with mental issues.
  if (msg.content === "!mentalhealth") {
    msg.channel.send("Your mental health matters. Learn more here about how you or someone you know who is dealing with mental health issues can find help. 💖  https://www.nimh.nih.gov/health/find-help")
  }

// If message contains `!joke` returns a random joke from
// the jokes array.
  if (msg.content === "!joke") {
    msg.channel.send(jokes[Math.floor(Math.random () * jokes.length)])
  }

// Follows the same logic as the `!jokes` command.
// Using `Math.random () * dailyCheck.length` to return
// a random value from the array.
  if (msg.content === "!dailycheckup") {
    msg.channel.send(dailyCheckup[Math.floor(Math.random () * dailyCheckup.length)])
  }

// If message contains `!commands` the bot will call  
// the `listOfCommands` function as a response.
  if (msg.content === "!commands") {
    msg.channel.send(commands())
  }
})

client.login(process.env.TOKEN)
