var Links = {
    setColor:function (color){
        function LinksSetColor(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
    alist[i].style.color = color;
    i = i + 1; 
    }
    }
}
}
var Body = {
    setColor:function (color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function (color){
     document.querySelector('body').style.backgroundColor = color;
    }
}
function nightDayHandler(self){
    var target = document.querySelector('#target');
    if(self.value === 'night2' ){
    Body.setBackgroundColor('black');
   Body.setColor('white');
    self.value = 'day';
    alert(`it's night!`); 
    
    LinksSetColor('powerblue');
    } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night2';
    alert(`it's noon nice~`); 
    
    LinksSetColor('red');
    }
}