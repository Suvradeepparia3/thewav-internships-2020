 function check(){

            var pass1 = document.getElementById('pass1').value;
            var pass2 = document.getElementById('pass2').value;

            var name= document.getElementById('name').value;
            var ph=document.getElementById('ph').value;
            var regex = /^[A-Za-z0-9]+$/
            //Validate TextBox value against the Regex.
            var isValid = regex.test(document.getElementById("name").value);
            //check if passwords match
            if(name==' '||pass1==' '||pass2==' '||ph==' '){
                alert('Please fill out all the fields')
            }
            else if(pass1 != pass2){
                alert("Passwords don't match!");
            }
            else if (!isValid) {
                alert("Only Alphabets and Numbers allowed for user name.");
            }
            else{
                alert('Thanks for connecting with us. We live to Entertain you.')
            }

        }
 