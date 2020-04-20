function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}


$(document).ready(function(){
  $('#formButton').on('click', function(event){

    $.ajax({
      data: {
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        reqService: $('#servicesNeeded').val()
      },
      // beforeSend: function( xhr ) {
      // 	xhr.overrideMimeType( "application/json" );
      // },
      // headers: {
      // 	'Content-Type':'application/json',
      // 	'Access-Control-Allow-Origin': 'https://abhishekmadhu.pythonanywhere.com'
      // },
      type: 'POST',
      url: 'https://abhishekmadhu.pythonanywhere.com/add_contact_me',
      // success: function(){
      // 	alert("Thanks for contacting us! We will get back to you soon!!");
      // }
    })
    .done(function(resp){
      console.log("Got the response", resp);
      if(resp.message == "Thank you"){
        alert("Success");
      }
      else{
        alert("Sorry, some");
      }
    });
    event.preventDefault();
  });
});