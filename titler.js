// let raw = `\n    #505351 - Network Issues (Erica)    \n                    Open\n                    Customer-Reply\n                    In Progress\n                    Escalated\n                    Scheduled\n                    Revert\n                    Waiting on Parts\n                    On Hold\n                    Answered\n                    Ready to Bill\n                    Ready to Close\n                    Closed\n            \n    Close\n`;
let test = new RegExp("(#.*?)\\n");
let raw = document.querySelector('h2.ticket-subject').textContent;
console.log("str ="+raw);
newtitle = test.exec(raw);


if (newtitle) {
    // Get the text content of the h2 element

	document.title = newtitle[0];
} 
else {
    console.error('No h2 element found with class "ticket-subject"');
}

