var quote=document.getElementById('quoteOutput');
var auther=document.getElementById('authorOutput');

var arrQuotes = [
    {'author': ' ― Oscar Wildewant.', 
     'quote': ' "Beware of what you become in pursuit of what you “Be yourself; everyone else is already taken." '
    },
    {'author': ' ― Frank Zappa', 
     'quote': '“So many books, so little time.”'
    },
    {'author': '― Frank Sinatra', 
     'quote': '“The best revenge is massive success.”'
    },
    {'author': ' ― Mae West', 
     'quote': '“You only live once, but if you do it right, once is enough.”'
    },
    {'author': '― Marcus', 
     'quote': '“A room without books is like a body without a soul.”'
    },
];
 var tokenArr=[];
function Quote(){
    var random = Math.trunc((Math.random()*arrQuotes.length));

    if(tokenArr.length===arrQuotes.length){
        quote.innerHTML="please reload this page";
        auther.innerHTML="";
    }else if(tokenArr.includes(random)){
        quote.innerHTML="please click again";
        auther.innerHTML="";
    }else{
        tokenArr.push(random);
        quote.innerHTML=arrQuotes[random].quote;
        auther.innerHTML= arrQuotes[random].author;  
    }
    
    
    
}
