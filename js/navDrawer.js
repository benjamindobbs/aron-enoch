document.write( '<div id=\"mySidenav\" class=\"sidenav\">\n' );
document.write( '        <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">x</a>\n' );
document.write( '        <a href=\"index.html\">Home</a>\n' );
document.write( '        <a href=\"track_placeholder.html\">ReCodePop! (Full Album)</a>\n' );
document.write( '        <a href=\"art.html\">Artwork/Media</a>\n' );
document.write( '        <a href=\"tickets.html\">Live Shows</a>\n' );
document.write( '        <a href=\"socials.html\">Socials</a>\n' );
document.write( '    </div>\n' );
document.write( '    <i class=\"material-icon\" onclick=\"openNav()\">menu</i>' );
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
