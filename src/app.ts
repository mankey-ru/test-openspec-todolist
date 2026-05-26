// src/app.js

// Types
interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoList {
  id: string;
  name: string;
  tasks: Task[];
}

// Storage
const STORAGE_KEY = 'simple_todo_tasks_bs';
let lists: TodoList[] = [];
let activeListId: string | null = null;
// Initialize
function init(): void {
	loadTasks();

  const addTaskBtn = document.getElementById('add-task-btn') as HTMLButtonElement;
  const taskInput = document.getElementById('task-input') as HTMLInputElement;
	
  const addListBtn = document.getElementById('add-list-btn') as HTMLButtonElement;
  const listInput = document.getElementById('list-input') as HTMLInputElement;

	addTaskBtn.addEventListener('click', () => {
		addTask(taskInput.value);
		taskInput.focus();
	});

  taskInput.addEventListener('keypress', (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			addTask(taskInput.value);
		}
	});

	addListBtn.addEventListener('click', () => {
		addList(listInput.value);
		listInput.focus();
	});

  listInput.addEventListener('keypress', (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			addList(listInput.value);
		}
	});
}

function saveTasks(): void {
	localStorage.setItem(STORAGE_KEY, JSON.stringify({ activeListId, lists }));
}

function loadTasks(): void {
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored) {
		try {
			const data = JSON.parse(stored);
			if (Array.isArray(data)) {
				// Legacy migration
				const newId = crypto.randomUUID();
				lists = [{ id: newId, name: "Default", tasks: data }];
				activeListId = newId;
				saveTasks();
			} else {
				lists = data.lists || [];
				activeListId = data.activeListId || null;
			}
		} catch (e) {
			lists = [];
			activeListId = null;
		}
	} else {
		// New user default state
		const newId = crypto.randomUUID();
		lists = [{ id: newId, name: "Default", tasks: [] }];
		activeListId = newId;
	}
	renderLists();
	renderTasks();
}

function addList(name: string): void {
	name = name.trim();
	if (name.length === 0) return;

	const newId = crypto.randomUUID();
	lists.push({ id: newId, name: name, tasks: [] });
	activeListId = newId;
	saveTasks();

  (document.getElementById('list-input') as HTMLInputElement).value = '';
	
	renderLists();
	renderTasks();
}

function switchList(id: string): void {
	activeListId = id;
	saveTasks();
	renderLists();
	renderTasks();
}

function removeList(id: string): void {
	lists = lists.filter(l => l.id !== id);
	if (activeListId === id) {
		activeListId = lists.length > 0 ? lists[0].id : null;
	}
	saveTasks();
	renderLists();
	renderTasks();
}

function renameList(id: string): void {
	const list = lists.find(l => l.id === id);
	if (!list) return;

	const newName = prompt('Enter new list name:', list.name);
	if (newName !== null && newName.trim().length > 0) {
		list.name = newName.trim();
		saveTasks();
		renderLists();
		renderTasks();
	}
}

function addTask(text: string): void {
	text = text.trim();
	if (text.length === 0) return;
	
	const activeList = lists.find(l => l.id === activeListId);
	if (!activeList) return;

  const newTask: Task = {
		id: Date.now().toString(),
		text: text,
		completed: false
	};

	activeList.tasks.push(newTask);
	saveTasks();

  (document.getElementById('task-input') as HTMLInputElement).value = '';
	renderTasks();
}

function toggleTask(id: string): void {
	const activeList = lists.find(l => l.id === activeListId);
	if (!activeList) return;

	const task = activeList.tasks.find(t => t.id === id);
	if (task) {
		task.completed = !task.completed;
		saveTasks();
		renderTasks();
	}
}

function deleteTask(id: string): void {
	const activeList = lists.find(l => l.id === activeListId);
	if (!activeList) return;

	activeList.tasks = activeList.tasks.filter(t => t.id !== id);
	saveTasks();
	renderTasks();
}

function renderLists(): void {
  const listsContainer = document.getElementById('lists-container') as HTMLUListElement;
	listsContainer.innerHTML = '';

	lists.forEach(list => {
		const li = document.createElement('li');
		li.className = `list-group-item d-flex align-items-center justify-content-between py-2 border-0 border-bottom border-secondary ${list.id === activeListId ? 'bg-primary text-light' : 'bg-transparent text-secondary hover-bg-dark'}`;
		li.style.cursor = 'pointer';
		li.title = list.id;
		
		const nameSpan = document.createElement('span');
		nameSpan.className = 'text-truncate fw-medium';
		nameSpan.textContent = list.name;
		
		li.addEventListener('click', () => {
			if (activeListId !== list.id) {
				switchList(list.id);
			}
		});

		const actionsDiv = document.createElement('div');
		actionsDiv.className = 'd-flex gap-1 action-btn-container';

		const editBtn = document.createElement('button');
		editBtn.className = `btn btn-sm ${list.id === activeListId ? 'btn-outline-light border-0' : 'btn-outline-secondary border-0'}`;
		editBtn.innerHTML = '✏️';
		editBtn.title = 'Rename List';
		editBtn.addEventListener('click', (e) => {
			e.stopPropagation();
			renameList(list.id);
		});

		const delBtn = document.createElement('button');
		delBtn.className = `btn btn-sm ${list.id === activeListId ? 'btn-outline-light border-0' : 'btn-outline-danger border-0'}`;
		delBtn.innerHTML = '❌';
		delBtn.title = 'Delete List';
		delBtn.addEventListener('click', (e) => {
			e.stopPropagation();
			removeList(list.id);
		});

		actionsDiv.appendChild(editBtn);
		actionsDiv.appendChild(delBtn);

		li.appendChild(nameSpan);
		li.appendChild(actionsDiv);

		listsContainer.appendChild(li);
	});
}

function renderTasks(): void {
  const zeroStateUI = document.getElementById('zero-state-ui') as HTMLElement;
  const activeListUI = document.getElementById('active-list-ui') as HTMLElement;
	
	if (!activeListId) {
		zeroStateUI.classList.remove('d-none');
		activeListUI.classList.add('d-none');
		return;
	} else {
		zeroStateUI.classList.add('d-none');
		activeListUI.classList.remove('d-none');
	}

	const activeList = lists.find(l => l.id === activeListId);
	if (!activeList) return;

  (document.getElementById('current-list-title') as HTMLElement).textContent = activeList.name;

  const taskList = document.getElementById('task-list') as HTMLUListElement;
	taskList.innerHTML = '';

	if (activeList.tasks.length === 0) {
		taskList.innerHTML = `
      <li class="list-group-item bg-transparent text-center text-secondary py-5 border-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-card-checklist mb-3 mx-auto" viewBox="0 0 16 16">
          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
          <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
        </svg>
        <p class="mb-0">No tasks yet. Add one above!</p>
      </li>
    `;
		return;
	}

	activeList.tasks.forEach(task => {
		const li = document.createElement('li');
		li.className = `list-group-item d-flex align-items-center justify-content-between py-3 border-0 border-bottom border-secondary bg-transparent ${task.completed ? 'opacity-50' : ''}`;

		const leftDiv = document.createElement('div');
		leftDiv.className = 'd-flex align-items-center gap-3 overflow-hidden text-truncate w-100';
		leftDiv.style.cursor = 'pointer';
		leftDiv.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).tagName !== 'INPUT') toggleTask(task.id);
		});

		const checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.className = 'form-check-input mt-0 shadow-none border-secondary';
		checkbox.style.minWidth = '1.25rem';
		checkbox.style.minHeight = '1.25rem';
		checkbox.checked = task.completed;

		const span = document.createElement('span');
		span.className = `text-truncate text-light ${task.completed ? 'text-decoration-line-through text-secondary' : ''}`;
		span.textContent = task.text;
		span.style.userSelect = 'none';

		leftDiv.appendChild(checkbox);
		leftDiv.appendChild(span);

		const deleteBtn = document.createElement('button');
		deleteBtn.className = 'btn btn-outline-danger btn-sm border-0 d-flex align-items-center justify-content-center action-btn-container';
		deleteBtn.style.width = '32px';
		deleteBtn.style.height = '32px';
		deleteBtn.title = 'Delete Task';
		deleteBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.814 1-.841 10.51A1 1 0 0 1 11.115 15h-6.23a1 1 0 0 1-.998-.92L3.05 3.5h9.814ZM5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
      </svg>
    `;
		deleteBtn.addEventListener('click', (e) => {
			e.stopPropagation();
			deleteTask(task.id);
		});

		li.appendChild(leftDiv);
		li.appendChild(deleteBtn);

		taskList.appendChild(li);
	});
}

// Event Listeners
document.addEventListener('DOMContentLoaded', init);
