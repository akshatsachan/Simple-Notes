import React from "react";
var curr = new Date();
var year = curr.getFullYear();
function Footer() {
  return (
    <footer>
      <p>Copyright Akshat Sachan. {year}</p>
    </footer>
  );
}
export default Footer;
