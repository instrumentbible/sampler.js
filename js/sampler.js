
// create web audio api context
	  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	  
	  $('td div').on("mousedown touchstart", function(e) {
		  e.stopPropagation();
		  e.preventDefault();
		  var i = parseInt($(this).parent().text()) - 1
		  //var sdfg = $("audio").eq(1);
		  
		  document.getElementsByTagName('audio')[i].currentTime = 0;

		  document.getElementsByTagName('audio')[i].play();
		  


		  //sdfg.play()

		  $(this).css("background", "red");
		  
	  });
  $('td div').on("mouseup touchend", function() {
	  $(this).css("background", "gold");

	  });
  
  
	  
  
  // for each file input...
  
	$( "input" ).each(function( index, element ) {
  
  var i =  index
  $(this).on('change', function(e) {
	var target = e.currentTarget;
	var file = target.files[0];
	var reader = new FileReader();
	
	
   
   // document.getElementsByTagName('audio')[i].currentTime = 0;
  //  console.log($audio[0]);
	 if (target.files && file) {
		  var reader = new FileReader();
		  reader.onload = function (e) {
			  

			  
			  document.getElementsByTagName('audio')[i].src = e.target.result;
			  //document.getElementsByTagName('audio')[0].play();
			  $('td div').eq(i).css("background", "pink");

		  }
		  reader.readAsDataURL(file);
	  }
  });
  
  
	});

  
  
  
  
  
  function handleDrop(e) {
	e.stopPropagation();
	e.preventDefault();
	console.log(e)

	
	var sdfg = e.target
	var inum = parseInt($(this).parent().text()) - 1
	var files = e.dataTransfer.files;
	//for (var i = 0, f; f = files[i]; i++) {
		
document.getElementsByTagName('input')[inum].files = files

	  //  console.log(f)
	  //  filein.files = files;

		var event = document.createEvent("UIEvents");
  event.initUIEvent("change", true, true);
  document.getElementsByTagName('input')[inum].dispatchEvent(event);
	  // Read the File objects in this FileList.
  //  }
  }
  
  var allTags = document.getElementsByTagName('div');
  for (var i = 0, len = allTags.length; i < len; i++) {
	  
	  
	  // Setup the dnd listeners.
   var dropZone = document.getElementsByTagName('div')[i];
  // dropZone.addEventListener('dragover', handleDragOver, false);
   dropZone.addEventListener('drop', handleDrop);
   
   dropZone.ondragover = dropZone.ondragenter = function(evt) {
	 evt.preventDefault();
  }
  
};
  
