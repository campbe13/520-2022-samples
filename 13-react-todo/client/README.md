# Create React App for Todo
following
https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning 

# Code together Todo in react

Setup Instructions 

1. npx create-react-app todo
2. `cd todo`
2. optional: delete a few files `cd src;rm -- App.test.js App.css logo.svg reportWebVitals.js setupTests.js`
   * note if you do this you will also have to remove imports & references to these
3. `mkdir src/components`
3. change the title in `public/index.html` to "Todo with React"
3. copy [app.starter.js](app.starter.js)  into  `src/App.js`  (remove comments `/*` `*/` & replace the default App function)
4. copy [index.starter.css](index.starter.css)  into  `src/index.css`  (replace the content)
5. copy [index.starter.js](index.starter.js) into `src/index.js` (replace the content)
6. now `npm run start`  make sure you see all of the fields<br> ![Todo screenshot](todo.png)

Now you're ready to create components.

The above is in the [repo](https://github.com/campbe13/react-starter)
1. create a Todo component, `components/Todo.js`  
  * have it return the `<li>` code
  * modify to use props for _name_, _complete_ (ticked/not), _id_ and React needs a unique _key_
  * replace the `<li>`s with `<Todo />`
    *   `<Todo name="Eat" completed={true} id="todo-0" key="todo-0" />`
  * be sure to export the component & include in App
  * use an array of Todos to create 
  ```
  const TASKSLIST = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
    ];
  const taskstodo = props.tasks.map((task) => (
  <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />
  // use {tasks}  in the render()
  ```
2. create a Form component, have it return the `<form>`, replace the form with `<Form />` 
3. OPTIONAL create a FilterButton component, have it return the `<button>`, replace the buttons with `<FilterButton />`
4. OPTIONAL  use props.name in Filterbutton `<FilterButton name="blah"/> `
4. event handling in form `  <form onSubmit={handleSubmit}>` 
  ```
  function Form(props) {
  function handleSubmit(e) {
    e.preventDefault()
    alert("hello")   // 1. proof of concept
    props.addTask("addtask hello")  // 2. func from parent
  }
  ```   
  5. add func from parent (props.addTask), in App func:
  ```
  function addTask(name) {
    alert(name)
  }
  ```
  in handleSubmit change the alert to `props.addTask("addtask hello")`
 
  __note__ we've use props to pass from the parent lets look at the state hook to get the name from the form to add a new item
  1. add this to top of Form  (n.b. array destructuring, ret'd values)
    `const [name, setName] = useState('Use hooks!');`
  1. add this to Form `<input>` at end  `value={name}`
  1. OMIT:  add this to top of Form 
    ```
    function handleChange(e) {
      console.log(e.target.value);
    }
    ```
  1. OMIT: add this to Form `<input>` at end  `onChange={handleChange}`
  1. add to Form handleSubmit 
    ``` 
    props.addTask(name)  (replace props.addTask)
    setName("")
    ```
  1. add to App @ top  `const [tasks, setTasks] = useState(props.tasks);`
  1. in App change `  const taskstodo = props.tasks.map(task => `  to `  const taskstodo = tasks.map(task => `
  1. in Appchange `addTask`   fake id needs to be unique instead use https://github.com/ai/nanoid
    ```
    function addTask(name) {
      const newTask = { id: "id", name, completed: false };
      setTasks([...tasks, newTask]);
      }
    ```









 
  