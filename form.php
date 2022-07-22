<?php																								
   $pochta = "svoyu_pochtu@gmail.com";
	 
   $sitename = "Wake Up Without Make up";

   $name = trim($_POST["name"]);
   $email = trim($_POST["email"]);
   $sbj = trim($_POST["subject"]);
   $mess = trim($_POST["message"]);

   $message = "Имя: $name \n Email: $email \nSubject: $sbj \nMessage: $mess";

   $sitetitle = "Website Request: \"$sitename\"";
  	mail($pochta, $sitetitle, $message, "Content-Type: text/plain;charset=utf-8\r\nFrom: svoyu_pochtu_iz_hostinga@gmail.com");
?>
