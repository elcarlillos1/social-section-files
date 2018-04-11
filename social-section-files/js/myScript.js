<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" type="text/javascript"></script>
<script type = "text/javascript">
function ValidateUser() {
    $.ajax({
        type: "GET",
        url: "http://coremktservice.appconnect.com.mx/api/User?UserID=123&UserPassword=karlis100",        
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: OnSuccess,
        failure: function(response) {
            alert(response.d);
        }
    });
}
function OnSuccess(response) {
    alert(response.d);
}
</script>