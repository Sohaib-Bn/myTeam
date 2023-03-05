//menu-phone 

$(".hamburger").click(function () {
    $(".menu").addClass("show-menu"); 
    $(".bg-menu").addClass("show-bg-menu"); 
    $(".menu").removeClass("hide-menu"); 
    $(".bg-menu").removeClass("hide-bg-menu"); 
 });

$(".close").click(function () {
   $(".menu").addClass("hide-menu"); 
   $(".bg-menu").addClass("hide-bg-menu"); 
   $(".menu").removeClass("show-menu"); 
   $(".bg-menu").removeClass("show-bg-menu");
});


//form-validation 

let form = document.forms;
let nameinput= document.getElementById("username");
let emailinput = document.getElementById("email")
let companyInput = document.getElementById("work")
let titleinput = document.getElementById("title")
let messageinput = document.getElementById("message")
console.log(nameinput)


function showError (classError){
   $("."+classError).addClass("show-error")
   $("."+classError).html("This field is required")
}

function removeClasses() {
   $(".error").removeClass("show-error")
   $(".text-field").removeClass("line-error")
   $("form span").removeClass("hide-line")
   $("input").removeClass("input-placeholder")
}


$("form").submit(function (event) {

   removeClasses();

   if (nameinput.value === "") {
      showError("name-error")
      $(".username-border").addClass("line-error")
      $(".username-line").addClass("hide-line")
      nameinput.classList.add("input-placeholder")
      return false ;
   }

   if (emailinput.value === "") {
      showError("email-error")
      $(".email-border").addClass("line-error")
      $(".email-line").addClass("hide-line")
      emailinput.classList.add("input-placeholder")
      return false ;
   }

   if (companyInput.value === "") {
      showError("company-error")
      $(".company-border").addClass("line-error")
      $(".company-line").addClass("hide-line")
      companyInput.classList.add("input-placeholder")
      return false ;
   }

   if (titleinput.value === "") {
      showError("title-error")
      $(".title-border").addClass("line-error")
      $(".title-line").addClass("hide-line")
      titleinput.classList.add("input-placeholder")
      return false ;
   }

   if (messageinput.value === "") {
      showError("message-error")
      $(".message-border").addClass("line-error")
      $(".message-line").addClass("hide-line")
      messageinput.classList.add("input-placeholder")
      return false ;
   }

   event.preventDefault();
   $("#success").addClass("show-success")
   $("#success").html("Thank you")

});

//moving to the next input

let inputList = $(".input")

$(".input").keyup(function (event) {

   if(event.keyCode == 13){
      event.preventDefault()
      currentTextFieldNumber = inputList.index(this)
      let nextBox = inputList[currentTextFieldNumber + 1]
      if(nextBox != null) {
         nextBox.focus()
         nextBox.select()
      }

      return false 
   }
})

$(document).ready(function() {
   $(window).keydown(function(event){
     if(event.keyCode == 13) {
       event.preventDefault();
       return false;
     }
   });
 });