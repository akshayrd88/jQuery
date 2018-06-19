
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

function commentsbtnf(id){
    var usercmt =[]; 
    usercomments.forEach(e => {
        if(e.postId == id)
            usercmt.push(e.name);
    });
    var table1;
    for(var i=0; i<6; i++){
        table1+= `<section><p>Comments: ${[usercmt]}</p></section>`;
    }
    $(this).html(table1);
    console.log(usercmt);
}

function posttable(){
    if(localStorage.allusers){
        userpost= JSON.parse(localStorage.allposts);
        user= JSON.parse(localStorage.allusers);
        usercomments= JSON.parse(localStorage.allcomments);
    }
    
    var table;
    
    for(var i = 0; i<100; i++){
        table += `<section id=post_${[userpost[i].id]}><p>UserName: ${[userpost[i].userId]} </p><p>Title:  ${userpost[i].title}</p><p>Post: ${userpost[i].body} </p>
        <button class="commentsbtn" onclick="commentsbtnf(${[userpost[i].id]})" id="comments_${[userpost[i].id]}" >Comments</button><button id="delete_${[userpost[i].id]}">Delete</button><div id="dispcom_${[userpost[i].id]}"></div></section>`;
    }
    
    $("#post").html(table);
    
}




jQuery(document).on('click', 'button[id=getpost]', function(){

    posttable();
    
})
