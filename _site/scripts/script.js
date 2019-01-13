$( ".card" ).click( function() {
  $( this ).css( "background-color", "#f00" );
  console.log("hi");
});
$( ".task-icon" ).on( "mouseout", function() {
  $( this ).css( "opacity", "0.2" );
});
console.log("hix")