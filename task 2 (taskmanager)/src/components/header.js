import React, { useEffect, useState } from 'react';
import './header.css';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';

function Header(props) {
  const [allTasks, setAllTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState([]);
  const [newDescription, setNewDescription] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isCompletedScreen, setIsCompletedScreen] = useState([false]);

  const handleAddNewTask = () => {
    let newTaskObj = {
      title: newTaskTitle,
      description: newDescription,
    };

    let updatedTaskArr = [...allTasks];
    updatedTaskArr.push (newTaskObj);

    setAllTasks(updatedTaskArr);
    localStorage.setItem('tasklist', JSON.stringify(updatedTaskArr));
    setNewDescription('');
    setNewTaskTitle('');
  }

  useEffect(() => {
    let savedTasks = JSON.parse(localStorage.getItem('tasklist'));
    let savedCompletedTasks = JSON.parse( localStorage.getItem('completedTasks'));

    if (savedTasks) {
      setAllTasks (savedTasks);
    }

    if (savedCompletedTasks) {
      setCompletedTasks (savedCompletedTasks);
    }
  }, []);

  const handleToDODelete = index => {
    let reducedTasks = [...allTasks];
    reducedTasks.splice (index,1);

    localStorage.setItem ('tasklist', JSON.stringify (reducedTasks));
    setAllTasks (reducedTasks);
  };

  const handleCompletedTaskDelete = index => {
    let reducedCompletedTasks = [...completedTasks];
    reducedCompletedTasks.splice (index);

    localStorage.setItem ('completedTasks',JSON.stringify (reducedCompletedTasks));
    setCompletedTasks (reducedCompletedTasks);
  };

  const handleComplete= index => {
    const date = new Date ();
    var dd = date.getDate ();
    var mm = date.getMonth ();
    var yyyy = date.getFullYear ();
    var hh = date.getHours ();
    var minutes = date.getMinutes ();
    var ss = date.getSeconds ();
    var finalDate = dd + '-' + mm + '-' + yyyy + '-' + hh + '-' + minutes + '-' + ss;

    let filterdTask = {
      ...allTasks[index],
      completedOn: finalDate,
    };

    let updatedCompletedList = [...completedTasks, filterdTask];

    setCompletedTasks (updatedCompletedList);
    localStorage.setItem ('completedTasks', JSON.stringify (updatedCompletedList));
    handleToDODelete (index);

  };


  return (
    <div className='header'>
      <h1>Task manager</h1>

      <div className='task-wrapper'>
        <div className='task-input'>
          <div className='task-input-item'>
            <label>Task</label>
            <input
              type='text'
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              placeholder="what's the task title?"
            />
          </div>
          <div className='task-input-item'>
            <label>Description</label>
            <input
              type='text'
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="what's the task description?"
            />
          </div>
          <div className='task-input-item'>
            <button
              className='primaryBtn'
              type='button'
              onClick={handleAddNewTask}> Add
            </button>
          </div>

        </div>

        <div className='btn-area'>
          <button
            className={`secondaryBtn ${isCompletedScreen === false && 'active'}`}
            onClick={() => setIsCompletedScreen(false)} > Present
          </button>
          <button
            className={`secondaryBtn ${isCompletedScreen === true && 'active'}`}
            onClick={() => setIsCompletedScreen(true)} > Completed
          </button>
        </div>

        <div className='task-list' >

          {isCompletedScreen === false &&
            allTasks.map((item, index) => (

              <div className='task-list-item' key={index} >
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div>
                  <AiOutlineDelete
                    title='Delete?'
                    className='icon'
                    onClick={() => handleToDODelete(index)}
                  />
                  <BsCheckLg
                    title='completed?'
                    className='check-icon'
                    onClick={() => handleComplete(index)}
                  />
                </div>
              </div>
            ))}

          {isCompletedScreen === true &&
            completedTasks.map((item, index) => (

              <div className='task-list-item' key={index} >
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p> <i> Completed at: {item.completedOn} </i></p>
                </div>

                <div>
                  <AiOutlineDelete
                    title='Delete?'
                    className='icon'
                    onClick={() => handleCompletedTaskDelete (index)}
                  />
                </div>
              </div>
            ))}
        </div>

      </div>
    </div>
  );
}

export default Header;