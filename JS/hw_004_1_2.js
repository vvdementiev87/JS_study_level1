'use strict';
//es-5
function Post(author,text,date){
    this.author=author;
    this.text=text;
    this.date=date;
    this.edit=function(text){
        this.text=text;
    }
}

function AttachedPost(author,text,date){
    Post.call(this,author,text,date);
    this.highlighted=false;
    this.makeTextHighlighted=function(){
        this.highlighted=true;
    }
}
AttachedPost.prototype=Object.create(Post.prototype);
AttachedPost.prototype.constructor=AttachedPost;

let att1=new AttachedPost('Moi','Bonjour','12/11')
att1.makeTextHighlighted();
att1.edit('Good Day');
console.log(att1);

//es-6
class Post_es6{
    constructor(author,text,date){
        this.author=author;
        this.text=text;
        this.date=date;  
    }
    edit=function(text){
        this.text=text;
    }
}

class AttachedPost_ex6 extends Post_es6{
    constructor(author,text,date){
        super(author,text,date);
        this.highlighted=false;
    }
    makeTextHighlighted=function(){
        this.highlighted=true;
}
}

let att2=new AttachedPost_ex6('Me','GoodDay','09/09')
att2.makeTextHighlighted();
att2.edit('Bonjour');
console.log(att2);