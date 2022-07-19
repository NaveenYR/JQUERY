console.log("Working");

$(document).ready(function(){
    $('button').click(function(){
        $('P').hide();
    })
})


// 2ND QTN

$(document).ready(function(){
    $('#btn1').click(function(){
        $('P').show();
    })
})

// 3RD QTN
function ajax(){ 
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todod/12',
        type: 'GET',
        success: function (data) {
    
         console.log();
        },
    
        error: function (err) {
          console.log( err);
         
        }
      })
    };
    $("#btn3").click(function(){
        ajax();
    })
    