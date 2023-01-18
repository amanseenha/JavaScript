console.log("Hey, please wait for 5 seconds I'll be right back.");
setTimeout(() => console.log("I'm back, sorry for keeping you waiting."), 5000);
// line 2's o/p is seen after 5000 milliseconds i.e 5 seconds.
console.log("What were you saying ?");
// line 3's o/p is seen immediately after execution of line 2 which means line 2 is executed after 1 but will give output after 5000 millliseconds.