
var userpost;
var user;
var comments;

jQuery.ajax({
    type: "GET",
    dataType: "json",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: {},
        success: function(data){
            localStorage.allposts= JSON.stringify(data);
        },
        error: function(err){
            console.log(err);
        }
  });

  jQuery.ajax({
    type: "GET",
    dataType: "json",
    url: "https://jsonplaceholder.typicode.com/comments",
    data: {},
        success: function(data){
            localStorage.allcomments= JSON.stringify(data);
        },
        error: function(err){
            console.log(err);
        }
  });

  jQuery.ajax({
    type: "GET",
    dataType: "json",
    url: "https://jsonplaceholder.typicode.com/users",
    data: {},
        success: function(data){
            localStorage.allusers= JSON.stringify(data);
        },
        error: function(err){
            console.log(err);
        }
  });

function like(){
    
}

function posttable(){
    if(localStorage.allusers){
        userpost= JSON.parse(localStorage.allposts);
        user= JSON.parse(localStorage.allusers);
        comments= JSON.parse(localStorage.allcomments);
    }
    
    var table;
    
    for(var i = 0; i<100; i++){
        table += `<section id=post_${[userpost[i].id]} style="border= 1px solid black"><p>UserName: ${[userpost[i].userId]} </p><p>Title:  ${userpost[i].title}</p><p>Post: ${userpost[i].body} </p>
        </br><button id="like_${[userpost[i].id]}">Like</button><button id="comments_${[userpost[i].id]}">Comments</button><button id="delete_${[userpost[i].id]}">Delete</button></section>`;
    }
    
    $("#post").html(table);

    // $("#like_${[userpost[i].id]}").click(
    //     $(this).css('background-color', isButtonBlue ? 'red' : 'blue');
    //     isButtonBlue = !isButtonBlue;
    // );

    jQuery(document).on('click', 'button[id= like_${[userpost[i].id]}]', function(){

        var clicked= true;
        if(clicked){
            $('#post_${[userpost[i].id]}').css('background-color', 'red');
            clicked  = false;
        } else {
            $('#post_${[userpost[i].id]}').css('background-color', 'blue');
            clicked  = true;
        }   
        
    })
    
}




jQuery(document).on('click', 'button[id=getpost]', function(){

    posttable();
    
})
