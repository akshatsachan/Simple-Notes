import React from "react";
var curr = new Date();
var year = curr.getFullYear();
function Footer() {
  return (
    <footer>
      <p>Copyright <a href="https://github.com/akshatsachan" target="_blank" rel="noopener noreferrer">Akshat Sachan</a>. {year}</p>
    </footer>
  );
}
export default Footer;
