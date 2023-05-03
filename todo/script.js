// DOM Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

const allBtn = document.getElementById('allBtn');
const activeBtn = document.getElementById('activeBtn');
const completedBtn = document.getElementById('completedBtn');

// array to store tasks
// [{
//     id: Date.now(),
//     content: taskInput.value,
//     completed: false
// }]
let tasks = [];
// localStorage.setItem('tasks', tasks);

// add event listeners
addBtn.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);
allBtn.addEventListener('click', showAllTasks);
activeBtn.addEventListener('click', showActiveTasks);
completedBtn.addEventListener('click', showCompletedTasks);

function addTask() {
	if (taskInput.value) {
		const task = {
			id: Date.now(),
			content: taskInput.value,
			completed: false
		};

		tasks.push(task);
		render();
		taskInput.value = '';
	}
}

function deleteTask(event) {
	if (event.target.tagName === 'BUTTON') {
		const taskId = parseInt(event.target.parentElement.getAttribute('data-id'));
		tasks = tasks.filter(task => task.id !== taskId);
		render();
	}
}

function showAllTasks() {
	toggleActiveTab('all');
	render();
}

function showActiveTasks() {
	const activeTasks = tasks.filter(task => !task.completed);
	toggleActiveTab('active');
	render(activeTasks);
}

function showCompletedTasks() {
	const completedTasks = tasks.filter(task => task.completed);
	toggleActiveTab('completed');
	render(completedTasks);
}

// function to render tasks based on the selected tab
function render(filteredTasks = tasks) {
	taskList.innerHTML = '';
	filteredTasks.forEach(task => {
		const taskItem = document.createElement('li');
		taskItem.setAttribute('data-id', task.id);

		const taskCheckbox = document.createElement('input');
		taskCheckbox.type = 'checkbox';
		taskCheckbox.checked = task.completed;
		taskCheckbox.addEventListener('change', toggleCompleted);

		const taskContent = document.createElement('span');
		taskContent.innerText = task.content;

		const deleteButton = document.createElement('button');
		const deleteIcon = document.createElement('i');
		deleteIcon.classList.add('ri-delete-bin-7-line');
		deleteButton.appendChild(deleteIcon);

		taskItem.appendChild(taskCheckbox);
		taskItem.appendChild(taskContent);
		taskItem.appendChild(deleteButton);

		taskList.appendChild(taskItem);
	});
}

function toggleActiveTab(tab) {
	switch(tab) {
		case 'all':
			allBtn.classList.add('active');
			activeBtn.classList.remove('active');
			completedBtn.classList.remove('active');
			break;
		case 'active':
			allBtn.classList.remove('active');
			activeBtn.classList.add('active');
			completedBtn.classList.remove('active');
			break;
		case 'completed':
			allBtn.classList.remove('active');
			activeBtn.classList.remove('active');
			completedBtn.classList.add('active');
			break;

	}

}

// toggle Completed
function toggleCompleted(event) {
	const taskId = parseInt(event.target.parentElement.getAttribute('data-id'));
	tasks.forEach(task => {
		if (task.id === taskId) {
			task.completed = event.target.checked;
		}
	});
	render();
}
