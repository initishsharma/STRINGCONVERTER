

function inputstring() {
    var input = document.getElementById("stringmain").value;    
    console.log(input);
}

function Convert() 
{
    var upper = document.getElementById("upper");
    var lower = document.getElementById("lower");
    var pascal = document.getElementById("pascal");
    var snake = document.getElementById("snake");
    var uppersnake = document.getElementById("uppersnake");
    var kebab = document.getElementById("kebab");
    var camel = document.getElementById("camel");

    if (upper.checked==true)
    document.getElementById("stringconverted").value = document.getElementById("stringmain").value.toUpperCase();
    
    else if  (lower.checked==true)
    document.getElementById("stringconverted").value = document.getElementById("stringmain").value.toLowerCase();
    
    else if  (pascal.checked==true)
    document.getElementById("stringconverted").value = toPascalCase();

    else if  (snake.checked==true)
    document.getElementById("stringconverted").value = toSnakeCase();

    else if  (uppersnake.checked==true)
    document.getElementById("stringconverted").value = toUpperSnakeCase();

    else if  (kebab.checked==true)
    document.getElementById("stringconverted").value = toKebabCase();

    else if (camel.checked==true)
    document.getElementById("stringconverted").value = toCamelCase();
}

function toPascalCase()
{
    var mytext = document.getElementById("stringmain").value; 
    console.log("My input text="+mytext);
  mytext = mytext.charAt(0).toUpperCase() + mytext.slice(1);
  var i;
  for (i = 1; i < mytext.length; i++) {
    if (i > 120) {
      console.log("INFINITY");
      document.getElementById("output").innerHTML =
        "BAD LOGIC ERROR. Hit INFINITY";
      break;
    }
    if (mytext[i] == " ") {
      mytext =
        mytext.slice(0, i) +
        mytext.charAt(i + 1).toUpperCase() +
        mytext.slice(i + 2);
    }
  }
  return mytext;
}

function toSnakeCase()
{ var mytext = document.getElementById("stringmain").value;
var i;
for (i = 0; i < mytext.length; i++) {
  if (i > 120) {
    console.log("INFINITY");
    document.getElementById("output").innerHTML =
      "BAD LOGIC ERROR. Hit INFINITY";
    break;
  }
  if (mytext[i] == " ") {
    mytext = mytext.slice(0, i) + "_" + mytext.slice(i + 1);
  }
}
return mytext;
}



function toUpperSnakeCase()
{ var mytext = document.getElementById("stringmain").value.toUpperCase();
var i;
for (i = 0; i < mytext.length; i++) {
  if (i > 120) {
    console.log("INFINITY");
    document.getElementById("output").innerHTML =
      "BAD LOGIC ERROR. Hit INFINITY";
    break;
  }
  if (mytext[i] == " ") {
    mytext = mytext.slice(0, i) + "_" + mytext.slice(i + 1);
  }
}
return mytext;


}

function toKebabCase()
{
    var mytext = document.getElementById("stringmain").value;
    var i;
    for (i = 0; i < mytext.length; i++) {
      if (i > 120) {
        console.log("INFINITY");
        document.getElementById("output").innerHTML =
          "BAD LOGIC ERROR. Hit INFINITY";
        break;
      }
      if (mytext[i] == " ") {
        mytext = mytext.slice(0, i) + "-" + mytext.slice(i + 1);
      }
    }
   return mytext;

}

function toCamelCase()
{
    var mytext = document.getElementById("stringmain").value;
  mytext = mytext.charAt(0).toLowerCase() + mytext.slice(1);
  var i;
  for (i = 1; i < mytext.length; i++) {
    if (i > 120) {
      console.log("INFINITY");
      document.getElementById("output").innerHTML =
        "BAD LOGIC ERROR. Hit INFINITY";
      break;
    }
    if (mytext[i] == " ") {
      mytext =
        mytext.slice(0, i) +
        mytext.charAt(i + 1).toUpperCase() +
        mytext.slice(i + 2);
    }
  }
 return mytext;

}
