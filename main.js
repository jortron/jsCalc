$(function(){ 
    function getVal() {
     return {
        num1: $("#first").val(),
        num2: $("#second").val()
     }
    }  
    
     $("#plus").on("click", function(){
        var vals = getVal();
        var $result = (parseInt(vals["num1"]) + parseInt(vals["num2"]));
        var $print = (vals["num1"] + " + " + vals["num2"] + " = " + $result);
        $("#past-list").append("<li>"+$print+"</li>")
         $("#result").html($result);
        $("#form")[0].reset();
    });

    $("#minus").on("click", function(){
        var vals = getVal();
        var $result = (vals["num1"]) - (vals["num2"]);
        var $print = (vals["num1"] + " - " + vals["num2"] + " = " + $result);
        $("#result").html($result);
        $("#past-list").append("<li>"+$print+"</li>")
        $("#form")[0].reset();
    });

    $("#divide").on("click", function(){
        var vals = getVal();
        var $result = (vals["num1"])/ (vals["num2"]);
        var $print = (vals["num1"] + " / " + vals["num2"] + " = " + $result);
        $("#result").html($result);
        $("#past-list").append("<li>"+$print+"</li>")
        $("#form")[0].reset();
    });

    $("#multiply").on("click", function(){
        var vals = getVal();
        var $result = (vals["num1"]) * (vals["num2"]);
        var $print = (vals["num1"] + " X " + vals["num2"] + " = " + $result);
        $("#result").html($result);
        $("#past-list").append("<li>"+$print+"</li>")
        $("#form")[0].reset();
    });

});