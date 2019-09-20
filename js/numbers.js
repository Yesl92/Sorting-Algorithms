var newArray = [];

function random() {
    for (var a=[],i=0;i<1000;++i) a[i]=i; //generate numbers 1-1000
    newArray = shuffle(a); //call shuffle function and return shuffled array
    document.getElementById("leftBox").innerHTML = newArray; 
    
}

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

// a = shuffle(a);
// var newArray = a;
