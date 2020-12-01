$(function () {
  //when an element gets clicked, call reset_element
  $(".element").on("click",function(){
      var feedback="#"+$(this).attr('id')+"_feedback";
      reset_element(this,feedback);});
  //bind the components with their validate functions
  $("#username").on("blur",function(){validate_username("#username","#username_feedback")});
  $("#position").on("blur",function(){validate_position("#position","#position_feedback")});
  $("#emplyoment").on("blur",function(){validate_type_employment("#employment1","#employment2","#type_feedback")});
  $("#email").on("blur", function(){validate_email("#email", "#email_feedback")});
  $("#btn").on("click",function(){
    validate_email("#email", "#email_feedback");
    validate_position("#position","#position_feedback");
    validate_username("#username","#username_feedback");
    validate_type_employment("#employment1","#employment2","#type_feedback");


  });

});

function error_style(element, feedback) {
  $(element).css("border-color","red");
  $(feedback).css("color","red");
}

function correct_style(element, feedback) {
  $(element).css("border-color","lightgray");
  $(feedback).css("color","green");
  $(feedback).html("&#10004");//the check mark
}

function reset_element(element,feedback) {
  $(element).css("border-color","lightgray");
  $(feedback).css("color","black");
  $(feedback).html("");
}

function validate_position(position,feedback){
  if($(position).val()=="none"){
      $(feedback).text("You must select a position");
      error_style(position,feedback);
  }
  else
      correct_style(position,feedback);
}

function validate_type_employment(employment1, employment2, feedback)
{
  if (!$("input[name='type']:checked").val()) {
    error_style(employment1,feedback);
    $(feedback).text("Must select a type");
 }
  else
    correct_style(employment1, feedback);
}

function validate_email(email, feedback)
{

  var value=$(email).val().trim();
  var numberAts = 0;
  var supSplit=value.split('@');
  for (var i=0; i <value.length; i++){
    if (value[i] == "@")
    {
      numberAts++;
    }
  }

  if(value==null || value==""){
    $(feedback).text("Email can't be empty");
    error_style(email,feedback);
  }
  else if (supSplit[0] === "")
  {
    $(feedback).text("Email should contain char before @");
    error_style(email, feedback);
  }
  else if( /[^a-zA-Z0-9_.]/.test( supSplit[0] ) )
    {
      $(feedback).text("Email should be alpha numerical");
      error_style(email, feedback);
    }
  else if (numberAts > 1)
  {
    $(feedback).text("Email can't contain more than one @");
    error_style(email, feedback);
  }
  else
    correct_style(email, feedback);

}

function validate_username(username,feedback){

  var value=$(username).val().trim();
  if(value==null || value==""){
      $(feedback).text("Username can't be empty");
      error_style(username,feedback);
  }
  else if (value.length < 6 || value.length>10) {
      $(feedback).text("Username must be 6-10 characters");
      error_style(username, feedback);
  }
  else if(/[^a-zA-Z_]+/.test(value)){
      $(feedback).text("Only word letters (a-z, A-Z, _)");
      error_style(username, feedback);
  }
  else
      correct_style(username, feedback);
}