let instructors = document.getElementsByClassName("cdSmallInstructor non-mobile");
console.log(instructors);
//var table = document.getElementById("results").children;
console.log($(".data-stickyHeader"));
//add rating cell to heading
var headers = document.getElementById("resultTitle");

var ratingCell = document.createElement("th");
ratingCell.className = "rating";
ratingCell.scope = "col";
ratingCell.textContent = "Rating";
headers.appendChild(ratingCell);

//add ratings to columns
/*for(a = 3; a < table.length; a++) {
  var body = table[a].children[0];
  var name = body.children[7].innerText;

  //add rating
  var cell = document.createElement("td");
  cell.className = "rating";
  cell.textContent = "5";
  body.appendChild(cell);
}*/

//console.log(body);
