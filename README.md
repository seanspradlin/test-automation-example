# Test Automation Example

This is an experiment with test automation with .NET Core 2 and Angular.


## Server Implementation

Mount API to /api with the following endpoints:

```
GET /tasks?status=complete,incomplete&limit=10&skip=10

Returns
{
  "description": "Take out the trash",
  "due": "2018-01-10T18:13:02Z",
  "completed": "2018-01-10T14:00:00Z"
}
```

Return a list of tasks to be done, use querystring to decide how many to return and if they are completed or not

----------

```
POST /tasks
{
  "description": "Take out the trash",
  "due": "2018-01-10T18:13:02Z"
}
```

Create a new task. Description required but due is optional.

----------


```
GET /tasks/:id
```

Get a specific task

----------


```
DELETE /tasks/:id
```

Delete a task

----------

```
POST /tasks/:id
```

Complete a task. Set the tasks's completed value to the current time.


## Client Implementation

In the UI, user should be able to:

1. Click a New button to create a task, which will have a description box and optional date picker box.

2. See a list of current tasks and order them by their due date.

3. Click an X next to the task to delete it.

4. Click a Done button next to the task to complete it.

Components involved will be: a task list, a new task form, a delete button, a done button, a task list, and a filter selection box.

