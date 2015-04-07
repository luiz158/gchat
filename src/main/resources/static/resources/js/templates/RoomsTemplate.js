
var roomsTemplate = 
		['<div class="modal-dialog">',
		 	'<div class="modal-content">', 
		 		'<div class="modal-header">', 
		 			'<button type="button" class="close" data-dismiss="modal" arial-label="Close">', 
				 		'<span aria-label="true">&times;</span>', 
				 	'</button>', 
				 	'<h4>', 
					 	'<span> Rooms </span>', 
				 	'</h4>', 
				'</div>', 
				'<div class="modal-body">', 
					'<div class="input-group">',
						'<div class="input-group-addon">Room name: </div>',
						'<input id="search-name" class="form-control" placeholder="Nome"/>',
						'<div class="input-group-addon"><span class="glyphicon glyphicon-search"></span></div>',
					'</div>',
					'<div class="rooms">',
					'<% if( rooms.length==0 ) {%>',
						'<div class="room empty-room">No room found</div>',
					'<% } %>',
					'</div>',
				'</div>', 
				'<div class="modal-footer">', 
					'<button type="button" class="btn btn-default" data-dismiss="modal">',
				 		'<span class="glyphicon glyphicon-remove"></span> Close',
				 	'</button>', 
				 	'<button type="submit" class="btn btn-primary">',
				 		'<span class="glyphicon glyphicon-ok"></span> Log in',
				 	'</button>', 
				'</div>', 
			'</div>',
		'</div>'].join("\n");
