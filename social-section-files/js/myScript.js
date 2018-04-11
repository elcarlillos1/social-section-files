function ValidateUser() {
    $.ajax({
        type: "GET",
        url: "http://coremktservice.appconnect.com.mx/api/User?UserID=123&UserPassword=karlis100",        
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        crossDomain: true,
        success: OnSuccess,
        failure: function(response) {
            alert(response.d);
        }
    });
}
function OnSuccess(response) {
    console.log(response);
}

$(function(){

    $('#register-form').on('submit',function(e){
        e.preventDefault();
        ValidateUser();
    });

});