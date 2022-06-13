$(document).ready(function(){
 
var image=$('#screen img');
 
var width=$('#screen').width();
 
var height=$('#screen').height();
 
var src=$(image).attr('src');
 
$('img','#screen').remove();
 
for(var i=0;i<10;i++){
 
$('#screen').append('<div id=id_'+i+'></div>');
 
$('#id_'+i).css({
 
'background-position':-width*i/10+'px 0px',
 
'background-image':'url('+src+')',
 
'background-color':'blue',
 
'position':'relative',
 
'left':width*i/10+'px',
 
'top':-height*i+'px',
 
'width':width/10,
 
'height':height,
 
'margin':0,
 
'padding':0
 
});
 
}
 
$('#id_0').animate().delay(100).animate({'top':-height+'px'},100,function(){anim_completed(0);});
 
function anim_completed(id){
 
var count=id;
 
if(count<9){
 
count++;
 
$('#id_'+count).animate().delay(100).animate({'top':-height*(count+1)+'px'},100,function(){anim_completed(count);});
 
}
 
}
 
});