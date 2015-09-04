$(function(){ 
 
         $("#plus").on("click", function(){
        var $inputOne = $("#first").val();
        var $inputTwo = $("#second").val();
        var $result = (parseInt($inputOne) + parseInt($inputTwo));
        $("#result").html($result);
        });

        $("#minus").on("click", function(){
        var $inputOne = $("#first").val();
        var $inputTwo = $("#second").val();
        var $result = ($inputOne) - ($inputTwo);
        $("#result").html($result);
        });

        $("#divide").on("click", function(){
        var $inputOne = $("#first").val();
        var $inputTwo = $("#second").val();
        var $result = ($inputOne) / ($inputTwo);
        $("#result").html($result);
        });

        $("#multiply").on("click", function(){
        var $inputOne = $("#first").val();
        var $inputTwo = $("#second").val();
        var $result = ($inputOne) * ($inputTwo);
        $("#result").html($result);
        });

});