


const fs = require('fs');
const  {Command } = require('commander');
const { default: chalk } = require('chalk');
const program = new Command();

program
.name("count_words")
.description("to count the number of the words")
.version('0.8.0');

program.command('todo')
.description('CLI to check number of words')

.argument('string' ,'file to count')
 .action((string)=>{
    console.log(`string is ---- ${string}--------`);

    // fs.readFile(file , "utf-8", (err , data )=> {
    //     if (err) {
    //         console.log(err);
            
    //     }
    //     else{
    //            const value = data.split(" ").length;
    //            console.log(`the are  ${value} words in this ${file}`);
        
    //     }
    // })
 


 })
 
program.parse();