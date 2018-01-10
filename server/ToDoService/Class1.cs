using System;

namespace ToDoService
{
    public class ToDoServiceData
    {
        public string GetTasks(string status, int limit,int skip)
        {
            return new Tasks
            {
                Description = "Take out the trash",
                Due = "2018-01-10T18:13:02Z",
                Completed = "2018-01-10T14:00:00Z"
            };
        }
    }
    public class Tasks
    {
        public string Description{get;set;}
        public DateTime Due {get;set;}
        public DateTime Completed {get;set;}
    }
}
