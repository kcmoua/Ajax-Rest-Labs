// Button 1: Get All Posts
$('.button1').click(function(){ // Click function
    $.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts", function(content){ // link to the posts page
        for(var i=0;i<content.length;i++){ // for loop to iterate through the returned array
            console.log(content[i]); // console log the object from the array
        }
    })
});

// Button 2: Get Post With id Of 10
$('.button2').click(function(){ // Click function
    $.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts", function(content){ // link to the posts page
        for(var i=0;i<content.length;i++){ // for loop to iterate through the returned array
            if(content[i].userID === 10){ // if statement to look through the object for userID = 10
                console.log(content[i]); // console log the object from the array
            }
        }
    })
});

// Button 3: Get The Comments From Post With id of 12
$('.button3').click(function(){ // Click function
    $.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts", function(content){ // link to the comments page
        for(var i=0;i<content.length;i++){ // for loop to iterate through the returned array
            if(content[i].userID === 12){ // if statement to look through object for userID = 12
                console.log(content[i].body); // console log the comment from the object that has userID = 12
            }
        }
    })
});

// Button 4: 

// Button 5: Get All The Posts From User With id Of 2
$('.button5').click(function(){ // Click function
    $.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts", function(content){ // link to the posts page
        for(var i=0;i<content.length;i++){ // for loop to iterate through the returned array
            if(content[i].id === 2){ // if statement to look through the object for id = 2
                console.log(content[i]); // console log the object from the array
            }
        }
    })
});

// Button 6: Create A New Post And Log The id Generated For It By The Server
$('.button6').click(function(){ // Click function
    $.post("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts", function(content){ // link to the posts page
        
    })
});

// Button 7: Replace The Post With id Of 12 And Render The ResponseJSON