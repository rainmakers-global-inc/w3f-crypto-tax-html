
$(window). scroll(function() {
if ($(this). scrollTop() > 1){
$('header'). addClass("sticky");
}
else{
$('header'). removeClass("sticky");
}
});


// counter
let count = document.querySelectorAll(".count")
let arr = Array.from(count)



arr.map(function(item){
  let startnumber = 0

  function counterup(){
  startnumber++
  item.innerHTML= startnumber
   
  if(startnumber == item.dataset.number){
      clearInterval(stop)
  }
}

let stop =setInterval(function(){
  counterup()
},50)

})





document.querySelectorAll('.edit-link').forEach(item => {
    item.addEventListener('click', event => {
        event.stopPropagation(); // Prevent the click event from bubbling up to the row
    });
});

