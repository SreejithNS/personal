//////////////// Before onload declarations


(function($){

 	$.fn.extend({ 
    type: (text,spd,it)=> {
                console.log(this);
                var txt = (text==null)? "Some text":text; /* The text */
                var speed = (spd==null)? 50:spd; /* The speed/duration of the effect in milliseconds */
                var ini = $(this).text();
                for(var i = (it==null)? 1:it;i < txt.length;i++) {
                    ini += txt.charAt(i);
                    $(this).append(ini);
                    $(this).delay(speed);
                }

    }
});})(jQuery);

window.onload = ()=>{
    
};


