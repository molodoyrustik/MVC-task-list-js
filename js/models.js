function TasksModel() {
	this.data = {};
}

TasksModel.prototype.get = function() {
	return this.data;
}

TasksModel.prototype.add = function(name) {
	this.data[(new Date()).getTime()] = name;
	PubSub.publish('TimeToUpdateList');
}

TasksModel.prototype.delete = function(id) {
	delete this.data[id];
	PubSub.publish('TimeToUpdateList');
}
