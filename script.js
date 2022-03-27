var Rate = 0;
function Change_Rate(c)
{
  Rate = c;
  document.getElementById(c).style.backgroundColor = "hsl(25, 97%, 53%)";
  document.getElementById(c).style.color = "white";

  for(let i=1; i<=5; i++)
   {
       
       if(c != i)
       {
        document.getElementById(i).style.backgroundColor = "hsla(217, 12%, 63%, 0.144)";
        document.getElementById(i).style.color = "hsl(217, 12%, 63%)";
       }
   }
}

function Sub()
{
    if(Rate != 0){
  document.getElementById('star').innerHTML= "<img src=\"images/illustration-thank-you.svg\" alt=\"\">";
  document.getElementById('star').id = 'thankyou';
  
  document.getElementById('Text1').innerHTML = "You selected "+Rate+" out of 5"; 
  document.getElementById('Text1').id = 'Text3';

  document.getElementById('Text2').innerHTML = "Thank you!"; 
  document.getElementById('Text2').id = 'Text4';

  document.getElementById('Rate').innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support. don't hesitate to get in touch!"; 
  document.getElementById('Rate').id = 'Text5';

  document.getElementById('Submission').innerHTML = "";
  document.getElementById("Submission").classList.remove('Submission');
  document.getElementById('footer').innerHTML = "";  }
  else{document.getElementById("footer").innerHTML = "Select a number please!"}
}