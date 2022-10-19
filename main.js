console.log("Starting text editor...");
var cnt = 0;
const sizes = ["xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large"];
var size_index = 3;

function save_file(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}



document.getElementById("save").onclick = function(){
    //Accessing text value
    var text = document.getElementById("page").value
    // document.getElementById("out").innerHTML = text;
    //Saving file in drive
    save_file('Untitled.txt', text);
    }


document.getElementById("open").onclick = function() {
var input = document.createElement('input');
input.type = 'file';

input.onchange = e => { 

   // getting a hold of the file reference
   var file = e.target.files[0]; 

   // setting up the reader
   var reader = new FileReader();
   reader.readAsText(file,'UTF-8');

   // here we tell the reader what to do when it's done reading...
   reader.onload = readerEvent => {
      var content = readerEvent.target.result; // this is the content!
      console.log( content );
      document.getElementById("page").value = content;
   }

}

input.click();
}

// Create a new file
document.getElementById("new").onclick= function(){ location.reload();}

//Change Font
document.getElementById("font").onchange= function(){
    //Get new font
    var new_font = document.getElementById("font").value;
    //Set new font
    document.getElementById("page").style.fontFamily = new_font;
    document.getElementById("out").innerHTML = "No of words: " + (cnt+1) + "<br />Size: " + sizes[size_index] + "<br/>Font: " + document.getElementById("font").value;
}



//Zoom In 
document.getElementById("zoomin").onclick = function(){
    if(size_index!=6)
        size_index++; 
    document.getElementById("page").style.fontSize = sizes[size_index];
    document.getElementById("out").innerHTML = "No of words: " + (cnt+1) + "<br />Size: " + sizes[size_index] + "<br/>Font: " + document.getElementById("font").value;
}
//Zoom out
document.getElementById("zoomout").onclick = function(){
    if(size_index!=0)
        size_index--;
    document.getElementById("page").style.fontSize = sizes[size_index];
    document.getElementById("out").innerHTML = "No of words: " + (cnt+1) + "<br />Size: " + sizes[size_index] + "<br/>Font: " + document.getElementById("font").value;
}

//Calculating status
document.getElementById("page").onchange = function(){
    var text = document.getElementById("page").value;
    // console.log("Entry");
    text.trim();
    //Counting words

    for(var i=0; i<text.length; i++)
    {
        if(text.charAt(i)==' ')
            cnt++;
    }
    document.getElementById("out").innerHTML = "No of words: " + (cnt+1) + "<br />Size: " + sizes[size_index] + "<br/>Font: " + document.getElementById("font").value;
}