function ListController() {
	var model;
	var view;
	
	function init() {
		model = new TasksModel();
		view = new ListView(model);

		view.addCreateTaskHandler(function(taskTitle) {
			model.add(taskTitle);
		})

		view.addCheckedHandler(function(id) {
			model.delete(id);
		})
	}

	var public = {
		getView: function() {
			return view;
		}
	}

	init();

	return public;
}