let daily_task = ["wake up","Exercise","Study"];

//Add "Meeting" to the task list
daily_task.push("Meeting");
console.log(daily_task);//[ 'wake up', 'Exercise', 'Study', 'Meeting' ]

//Remove the first task
let deleteditem = daily_task.shift();
console.log(deleteditem);
console.log(daily_task);//[ 'Exercise', 'Study', 'Meeting' ]

//Reverse all tasks 
let daily_task_reverse = daily_task.reverse();
console.log(daily_task_reverse);//[ 'Meeting', 'Study', 'Exercise' ]

//Display all tasks in a single string separated by " -> "
let all_daily_task = daily_task.join("->");
console.log(all_daily_task);//Meeting->Study->Exercise




