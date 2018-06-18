
jQuery.ajax({
	type: "GET",
	dataType: "json",
	url: "http://172.17.28.40:8080/Documents/student.json",
	data: {},
		success: function(data){
			var html= `<table border="1" style="border-collapse: collapse">
							<tr>
							<th>Username</th><th>Gender</th><th>location</th><th>email</th><th>phone</th>
							<th>batch</th><th>age</th><th>hometown</th>
							</tr>`;

			var len= 10;
			
			$( "#showtable" ).on( "change", "select", function(value) {
				len= this.value;
			});

			for(var i=0; i< len; i++){
				html += `
					<tr id="tr_${i}">
					<td>${data[i].name}</td><td>${data[i].gender}</td><td>${data[i].location}</td><td>${data[i].email}</td>
					<td>${data[i].phone}</td><td>${data[i].batch}</td><td>${data[i].age}</td><td>${data[i].hometown}</td>
					<td><button id="display_${i}">More Details</button>
					<button id="edit_${i}">Edit Table</button>
					<button id="delete_${i}">Delete Table</button></td>
					</tr>`;
			}
			html+= `</table>`;
			jQuery('#showtable').html(html);

		},
		error: function(err){
			console.log(err);
		}
  });


jQuery(document).on('click', 'button[id^="display_"]', function(data){
	var tr_id= jQuery(this).attr('id').replace('display_', 'tr_');
	jQuery('#'+tr_id).after(`
		<tr id=""tr_${i}>
			<td>${data[i].address}</td><td>${data[i].previous_employer}</td>
		</tr>
	`)
});


// var usertable1= function usertable(x){
// 	console.log(x);
//     if(localStorage.allusers){
//         users= JSON.parse(localStorage.allusers);
//     }
//     var table= '<table border="1" style="border-collapse: collapse">';
// 	table += '<th>firstname</th><th>lastname</th><th>email</th><th>location</th><th>phone</th><th>batch</th><th>age</th><th>hometown</th>';
//     for(var i = 0; i<x; i++){
// 		table += '<tr><td>'+user[i].name+'</td><td>'+users[i].gender+'</td><td>'+users[i].email+'</td><td>'+users[i].location+'</td><td>'+users[i].phone+'</td><td>'+users[i].batch+'</td><td>'+users[i].age+'</td><td>'+users[i].hometown+'</td><td><button id="display_'+$[i]+'" onclick="displaytable">More Details</button></td><td><button id="edit_'+$[i]+'" onclick="edittable">Edit Table</button></td><td><button id="delete_'+$[i]+'" onclick="deletetable">Delete Table</button></td></tr>';
// 	}
// 	table += '</table>';
		
// 	$("#showtable").html(table);

// 	$("#display").click(function(){
// 		var more= '<table border="1" style="border-collapse: collapse">';
// 		more += '<th>address</th><th>previous_employer</th>';
// 		for(var i = 0; i<x; i++){
// 		more += '<tr><td>'+users[i].address+'</td><td>'+users[i].previous_employer+'</td></tr>'
// 		}
// 		more += '</table>';
// 		$("#showtable").html(table + more);
// 	})

// 	$("#edit").click(function(){
// 		alert("more details");
// 	})
// 	$("#delete").click(function(){
// 		alert("more details");
// 	})

// }



//   $('#selection').on('change', '#showtable', function() {
// 	// Action goes here.
  

// 	var x = $("select").val();
	
// 	var store= parseInt(x);
// 	console.log(store);
// 	for (var i=0; i<store; i++) {
// 		console.log(i);
		
	
	
// 	if((user.name) && (user.gender) && (user.email) && (user.location) && (user.phone) && (user.batch))
// 		users.push(user);
	
// 		}
// 		usertable1(store);
// });

//usertable1(10);
