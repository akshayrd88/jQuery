var users = [];


function usertable(x){
    if(localStorage.allusers){
        users= JSON.parse(localStorage.allusers);
    }
    var table= '<table border="1" style="border-collapse: collapse">';
	table += '<th>firstname</th><th>lastname</th><th>email</th><th>location</th><th>phone</th><th>batch</th><th>address</th><th>previous_employer</th><th>age</th><th>hometown</th>';
    for(var i = 0; i<users.length; i++){
		table += '<tr><td>'+users[i].firstname+'</td><td>'+users[i].lastname+'</td><td>'+users[i].email+'</td><td>'+users[i].location+'</td><td>'+users[i].phone+'</td><td>'+users[i].batch+'</td><td>'+users[i].address+'</td><td>'+users[i].previous_employer+'</td><td>'+users[i].age+'</td><td>'+users[i].hometown+'</td></tr>';
		table += '<button id="display" onclick="displaytable">More Details</button>';
		table+= '<button id="edit" onclick="edittable">Edit Table</button>';
		table+= '<button id="delete" onclick="deletetable">Delete Table</button>';
	}
	table += '</table>';
	
	$("#showtable").html(table);
}


function selection() {
	var x = $("select").val();
	console.log(x);
	for (var i=0; i<x; i++) {
		var user = 
			{
				"firstname" : "User firstname" + i,
				"lastname" : "User lastname"+ i,
				"email" : "user" +i+ "@google.com",
				"location" : ["NJ", "NY", "PA"],
				"phone" : "34324324323",
				"batch" : "UI",
				"address" : {
					"communication": "Google, NY",
					"permanent" : "Google, CA"
				},
				"previous_employer" : {
					"google" : "Computer Programmer",
					"facebook" : "Front end developer",
					"linkedIn" : "Software Engineer"
				},
				age: "age" + i,
				hometown: "hometown" + i
			}
	}
	if((user.firstname) && (user.lastname) && (user.email) && (user.location) && (user.phone) && (user.batch)){
		users.push(user);
		localStorage.allusers= JSON.stringify(users);
	}

	usertable(x);
}


//console.log(title[78]);

