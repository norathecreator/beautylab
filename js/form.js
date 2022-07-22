$(document).ready(function(){
  $("form").submit(function(){
     $.ajax({
      type: "POST",
      url: "form.php",
      data: $(this).serialize()
     }).done(function(){

    	alert("The message was sent");
      // document.querySelector('.ty_block').style.display = 'flex'

    	$("form")[0].reset();
     }); 
     return false;
  });
});