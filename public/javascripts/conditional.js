//Copyright 2015 Pareto Software, LLC, released under an MIT license: http://opensource.org/licenses/MIT
$( document ).ready(function() {
		
		//Inputs that determine what fields to show
		var radiobuttons = $('#live_form input:radio[name=radiobuttons]');
		var option=$('#live_form input:radio[name=option]');				
		
		//Wrappers for all fields
		var no = $('#live_form textarea[name="feedback_no"]').parent();		
		var option_parent = $('#live_form #div_option');		
		var all=no.add(option_parent);
		
		radiobuttons.change(function(){
			var value=this.value;						
			all.addClass('hidden'); //hide everything and reveal as needed
			
			if (value == 'No')
			{
				//Do nothing - for now... 								
			}
		
			else if (value == 'Yes')
			{
				option_parent.removeClass('hidden');

			}});
	
		option.change(function(){
			all.addClass('hidden'); 
			option_parent.removeClass('hidden');		
						
			
		});
});
