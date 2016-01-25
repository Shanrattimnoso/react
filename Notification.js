
var NotificationList = React.createClass({	
	click: function(id){
		//console.log("Id ::: " + id);
	},
	render: function(){
		var me = this;
		var nodes = this.props.data.map(function(notification){
			return (
				<div className="notification" key={notification.key} onClick={me.click(notification.key)} >
					<div className="header">{notification.header.title}</div>
					<div className="body">{notification.body.title}</div>
				</div>
			);
		});
		
		return (
			<div>
				{nodes}
			</div>
		);
	}
});
	
var NotificationWrapper = React.createClass({
	
	getInitialState : function(){
		return {data: []};
	},
	clearNotifications: function(){
		this.setState({data: []});
	},
	addNotification: function(){
		var notifications = this.state.data;
		var notif = notifications.concat([{
			key: Math.random() *100,
			header:{
				title: (Math.random()+1*100).toFixed(5)
			},
			body:{
				title: (Math.random()+1*100).toFixed(5)
			}
		}]);
		this.setState({data: notif});	
	},
	render: function(){
		return (
			<div>
				<MagicButton onClick={this.addNotification} />
				<ClearButton onClick={this.clearNotifications} />
				<NotificationList data={this.state.data} />
			</div>
		);
	}
});

var MagicButton = React.createClass({
	onClick: function(e){
		this.props.onClick();
	},
	render: function(){
		return (
			<input
				type="button"
				value="Magic Button"
				onClick={this.onClick}
			/>
		);
	}
});

var ClearButton = React.createClass({
	onClick: function(e){
		this.props.onClick();
	},
	render: function(){
		return (
			<input
				type="button"
				value="Clean plz"
				onClick={this.onClick}
			/>
		);
	}
});


ReactDOM.render(
  <NotificationWrapper />,
  document.getElementById('content')
);
