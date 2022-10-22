import React from "react";
import { v4 as uuid} from "uuid";

export const TaskAddInput = (props) => {
  const { inputText, setInputText, taskList, setTaskList } = props;

  const handleSubmit = (e) => {
    const taskId = uuid()
    e.preventDefault();
    if (inputText === "") return;
    const newTaskList = [
      ...taskList,
      {
        text: inputText,
        id: taskId,
        draggableId: `task-${taskId}`, //文字列のIDである必要がある
      },
    ];
    setTaskList(newTaskList);
    setInputText("");
  };
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};
