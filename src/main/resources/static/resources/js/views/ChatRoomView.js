
var ChatRoomView = Backbone.View.extend({
	
	template: _.template(chatRoomTemplate),
	
	initialize: function(){
		this.collection.on('add', this.saveMessage, this);
	},
	
	events: {
		'keyup .txt-message': 'checkMessage',
		'remove': 'remove',
		submit: 'sendMessage'
	},
	
	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	},
	
	close: function(){
		this.$el.remove();
	},
	
	checkMessage: function(event){
		if (this.$('.txt-message').val()) {
			this.ableButtonSendMessage();
		} else {
			this.disableButtonSendMessage();
		}
	},

	isButtonSendMessageEnabled: function(){
		return !this.$('.btn-send-message').attr('disabled');
	},
	
	ableButtonSendMessage: function(){
		this.$('.btn-send-message').removeAttr('disabled');
	},

	disableButtonSendMessage: function(){
		this.$('.btn-send-message').attr('disabled', 'disabled');
	},
	
	sendMessage: function(e){
		e.preventDefault();
		var roomCode = this.model.get('code');
		var $textMessage = this.$('.txt-message');
		var content = $textMessage.val();
		
		if ( content ) {
			var chatMessage = new ChatMessage({content:content, roomCode: roomCode});
			this.collection.add( chatMessage );
			$textMessage.val('');
			this.disableButtonSendMessage();
		}
	},
	
	saveMessage: function(chatMessage){
		chatMessage.save();
	},
	
	showMessage: function(chatMessage){
		var chatMessageView = new ChatMessageView({model:chatMessage});
		var $messages = this.$('.chat[data-code="'+this.model.get('code')+'"] .chat-content');
		$messages.append( chatMessageView.render().el );
		this.focusLastMessages();
	},
	
	focusLastMessages: function(){
		var txtMessage = this.$('.txt-message');
		txtMessage.attr('disabled', 'disabled');
		
		this.$(".chat-content").animate({ 
			scrollTop: this.$('.chat-content').height() + 500
			
		}, 1000, function(){
			txtMessage.removeAttr('disabled');
			txtMessage.focus();
			
		});
	}
	
});