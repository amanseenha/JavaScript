let command = prompt("What to do not in loop ?");
let taskList = [];
while (command !== "quit") 
{
  if (command == "new") {
    const task = prompt("Enter new task:");
    taskList.push(task);
    console.log("***********");
    console.log(`${task} added to list.`);
    console.log("***********");
  } else if (command == "list") {
    console.log("***********");
    for (let i = 0; i < taskList.length; i++) {
      console.log(`${i}: ${taskList[i]}`);
    }
    console.log("***********");
  } else if (command == "delete") {
    let index = prompt("Enter Index to delete:");
    console.log("***********");
    console.log(`${taskList.splice(index, 1)} deleted`);
    console.log("***********");
  }
  command = prompt("What to do in loop?");
}
console.log("Quitting App");