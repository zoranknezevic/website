
	<!-- Show Search history -->
	function searchCounter() {
		if(typeof(Storage)!=="undefined") {
  			if (sessionStorage.clickcount) {
    			sessionStorage.clickcount=Number(sessionStorage.clickcount)+1;
			}
  			else {
    			sessionStorage.clickcount=1;
    		}
  		} 
	}
	function searchShow() {
		if(typeof(Storage)!=="undefined") {
  			if (sessionStorage.clickcount) {
				$('.history-wrap').show();
			}
  		} 
	}
	
	$(document).ready(function(){
		
	
	<!-- Scroll from Show results on mobile -->
		$('.show-search .title').click(function() {		  
		   $('html,body').animate({scrollTop: $('.ionTabs__head').offset().top});
		});
	
		
	<!-- Tabs -->
		$.ionTabs("#tabs_1, #tabs_2, #tabs_3");
	
	<!-- Multiselect -->	
	   $(".municipality select").multiselect({
		   header: false,
		   minWidth: "auto",
		   multiple: false,
		   noneSelectedText: "Helsinki",
		   selectedList: 1
		});
		
		$(".object-type select").multiselect({
		   header: false,
		   noneSelectedText: "Valikoi asuntotyyppejä",

		});
		

		
	
	<!-- Show Price filter -->	
		$('.button').click(function(){
			var link = $(this);
			$('.container.expand-filter-wrap').slideToggle('slow', function() {
				if ($(this).is(":visible")) {
					 link.removeClass('open-filter').addClass('close-filter');
				} else {
					
					 link.removeClass('close-filter').addClass('open-filter');              
				}        
			});
				
		});
		
		
		$('.close').live('click', function(event) {        
			 $('.history-wrap').hide();;
		});

			
	<!-- Show Google Map -->		 
		$('.show-map').live('click', function(event) {        
			 $('.map-wrap').slideToggle();
			 $(this).text($(this).text() == 'Piilota kartta' ? 'Näytä kartalla' : 'Piilota kartta');
			 return false;
		});
		
		
		$('.search input').focusout( function(e) {
			if (e.target.value == 'Oulunkylä') {searchCounter();}
		});
		searchShow();
		
	<!-- Show Filter Results -->
		
		$("#filter").keyup(function(){
			
			if (($("#filter").val().length >= 3) || ($("#filter").val().length == 0)) {

        	// Retrieve the input field text and reset the count to zero
        	var filter = $(this).val(), count = 0;
 
        	// Loop through the comment list
        	$(".project-list li").each(function(){
 
            	// If the list item does not contain the text phrase fade it out
            	if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
 
            	// Show the list item if the phrase matches and increase the count by 1
            	} else {
                	$(this).show();
                	count++;
            	}
        	});
			}
 
        	// Update the count
        	//var numberItems = count;
        	$("#numProj").text(count);
			if (count == '0') {$('.no-result').delay(500).fadeIn(300)} else {$('.no-result').hide()}
    	});
		$(".reset-button").click( function() {
			$("#filter").val('');
			$('.no-result').hide();
			$(".project-list li").fadeIn();
		})
		
		$('.ionTabs__head li:nth-child(2n+2)').addClass("last");
				
		
	});
	


	