$(document).ready(function(){
    console.log("Print");
    console.log("Print");
    
    console.log("Print");
    console.log("Print");

    $("#get_users_btn").on("click",function(){
        getUsers();
    });
});

function getUsers(){
    $.ajax({
        url:"https://reqres.in/api/users?per_page=50", // The Address To Send The Request to
        type:"get", //the request protocol type
        data:{}, // the data we want to send to the server
        success:function(result){ // the callback function to run when we get the data back from the server
            console.log(result);
            for( let i = 0; i < result.data.length ; i++ ){
                let user_cube = $("<div class='user_cube'></div>");
                let html = "<img src='" + result.data[i].avatar + "' />";
                html += "<div>" + result.data[i].first_name + " " + result.data[i].last_name + "</div>";
                user_cube.html(html);
                $(".users_list").append(user_cube);
            }
        },
        error:function(xhr){
            console.log("Error:",xhr);
        }
    });
}