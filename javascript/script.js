if(typeof(document.querySelector("form")) != 'undefined' && document.querySelector("form") != null){
   let today = new Date();
   let dd = today.getDate();
   let mm = today.getMonth() + 1;
   let yyyy = today.getFullYear();
   
   if (dd < 10) {
      dd = '0' + dd;
   }
   
   if (mm < 10) {
      mm = '0' + mm;
   } 
       
   today = yyyy + '-' + mm + '-' + dd;
   document.getElementById("datein").setAttribute("min", today);
   document.getElementById("datein").setAttribute("value", today);
   document.getElementById("dateout").setAttribute("min", today);
   document.getElementById("dateout").setAttribute("value", today);
}