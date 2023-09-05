// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract ToDoApp {

    struct Task {
        uint id;
        string title;
        string description;
        string deadline;
        bool isCompleted;
    }

    event AddTask(uint id);
    event DeleteTask(uint id);
    event ToggleComleted(uint id);

    Task[] public tasks;


    function getTasks() external view returns (Task[] memory) {
        return tasks;
    }

    function addTask(string memory _title, string memory _description, string memory _deadline) external  {
        uint taskId = tasks.length;
        tasks.push(Task(taskId, _title, _description, _deadline, false));
        emit AddTask( taskId);
    }

    function toogleCompleted(uint id) external {
        tasks[id].isCompleted = !tasks[id].isCompleted;
        emit ToggleComleted(id);
    }

    function deleteTask(uint id) external {
        delete tasks[id];
        emit DeleteTask(id);
    }

}



   
