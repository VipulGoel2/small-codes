

function myFunction() {
 if(document.getElementById('a').className =='NavAnimated')  {

          
        document.getElementById('a').className = "NavAnimatedClicked";
        document.getElementById('links').style.display = "none";

      setTimeout(function(){ document.getElementById('a').className = "NavNormal" }, 550);



 }

 else {
              if(document.getElementById('a').className =='NavNormal'){
               setTimeout(function(){ document.getElementById('links').style.display = "inline"}, 600);
             
            document.getElementById('a').className ='NavAnimated';

          }
            
 }

}

function myFunction2() {

  
 if( document.getElementById('b1').className =='NavBar')
 	{ 
             
            document.getElementById('b1').className ='NavBar1';
          document.getElementById('b2').className ='NavBar2';
          document.getElementById('b3').className ='NavBar3';



}

 else {

          if(document.getElementById('b1').className =='NavBar1')

           {
               
               document.getElementById('b1').className ='NavBar1Clicked';
               document.getElementById('b2').className ='NavBar2Clicked';
               document.getElementById('b3').className ='NavBar3Clicked'; 
               setTimeout(function3, 500);


           }


          
           
				  /*document.getElementById('b1').className ='NavBar1';
				  document.getElementById('b2').className ='NavBar2';
				  document.getElementById('b3').className ='NavBar3';*/


 }
 
}


   function function3() {

              document.getElementById('b1').className ='NavBar';
          document.getElementById('b2').className ='NavBar';
          document.getElementById('b3').className ='NavBar';




   }