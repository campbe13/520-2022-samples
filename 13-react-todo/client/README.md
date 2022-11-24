# Create React App for Todo
following
https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning 

# Code together Todo in react

Setup Instructions 

1. npx create-react-app todo
2. `cd todo`
2. optional: delete a few files `cd src;rm -- App.test.js App.css logo.svg reportWebVitals.js setupTests.js`
3. `mkdir src/components`
3. change the title in `public/index.html` to "Todo with React"
3. copy [app.starter.js]  into  `src/App.js`  (replace the default App function)
4. copy [index.starter.css]  into  `src/index.css`  (replace the content)
5. now `npm run start`  make sure you see all of the fields<br> ![Todo screenshot](todo.png)

Now you're ready to create components 

1. create a Todo component, `components/Todo.js`  
  * have it return the `<li>` code
  * modify to use props for _name_, _complete_ (ticked/not), _id_ and React needs a unique _key_
  * replace the `<li>`s with `<Todo />`
    *   `<Todo name="Eat" completed={true} id="todo-0" key="todo-0" />`
  * be sure to export the component & include in App
  * (optional use an array of Todos to create 
  ```
  const TASKSLIST = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
    ];
  const tasks = props.tasks.map((task) => (
  <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />
  // use {tasks}  in the render()
  ```
));


2. create a Form component, have it return the <form>, replace the form with <Form /> 
3. create a FilterButton component, have it return the <button>, replace the form with <Form /> 