import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DesignCert from '../image/DesignCert.jpg'
import '../style/project.css'
import { useState } from 'react';
function Project() {
    const [fixState, useFix] = useState(false)
    const [fixState2, useFi2] = useState(false)
    const [fixState3, useFi3] = useState(false)
    const ProjectFucntion = (state, value)=>{
        const projectMotion = ()=>{
            if(window.scrollY >= value){
                state(true)
            }
            else{
                state(false)
            }
        }
        window.addEventListener('scroll', projectMotion)
    }
    ProjectFucntion(useFix, 3500)
    ProjectFucntion(useFi2, 3700)
    ProjectFucntion(useFi3, 3700)
  return (
    <div className='project-container' id='project'>
         <div className='project'>
         <h1>My Project</h1>
         <Card className={fixState ? 'project1 show' : 'projectHide'}>
            <Card.Header as="h5">Calculator</Card.Header>
            <Card.Body>
                <Card.Title>HTML, CSS AND JAVASCRIPT</Card.Title>
                <Card.Text>
                    This is very simple Calculator that I created.
                </Card.Text>
                <a href='https://gamora00.github.io/calculator/calcu.html'target='_blank' variant="primary">Calculator</a>
            </Card.Body>
        </Card>
        <Card className={fixState2 ? 'project2 show' : 'projectHide'}>
            <Card.Header as="h5">ToDo List</Card.Header>
            <Card.Body>
                <Card.Title>HTML, CSS AND JAVASCRIPT</Card.Title>
                <Card.Text>
                This is Todo List that I created when I was Senior High School.
                This is my School activity.
                </Card.Text>
                <a href='https://gamora00.github.io/todoList/toDoList.html'target='_blank' variant="primary">Todo List</a>
            </Card.Body>
        </Card>
        <Card className={fixState3 ? 'project3 show' : 'projectHide'}>
            <Card.Header as="h5">Rock Paper Scissors Game</Card.Header>
            <Card.Body>
                <Card.Title>HTML, CSS AND JAVASCRIPT</Card.Title>
                <Card.Text>
                This is a simple Game that I created when I was Senior High School.
                </Card.Text>
                <a href='https://gamora00.github.io/rock-paper/'target='_blank' variant="primary">Rock paper Scissors</a>
            </Card.Body>
        </Card>
         </div>
    </div>
  )
}

export default Project