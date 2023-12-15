var main= document.getElementById('main_menu');
var sub = document.getElementById('sub_menu');

main.addEventListener('change',function(){
    
var selected_option = states[this.value];
    
while(sub.options.length > 0){
      
    sub.options.remove(0);  
      }

Array.from(selected_option).forEach(function(el){
                                    
    let option = new Option(el, el);
    
    sub.appendChild(option);
                                    
});
    
});


var states = {
	Abia: ['-Select LGa-', 'Bende', 'Umuahia','Isukwator','Dirty'],
	Adamawa: ['-Select LGa-', 'Mubi', 'Gombi','Hong','Song','Numan'],
}