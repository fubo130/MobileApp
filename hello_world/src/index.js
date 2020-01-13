import React, {Component} from 'react';
import { render } from 'react-dom';

let skiData = {
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100
}

const getPercent = decimal => {
    return decimal * 100 + '%'
}
const calcGoalProgress = (total, goal) => {
    return getPercent(total/goal)
}

const Book = ({title, author, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
        </section>
    )
}


const Library = () => {
    return (
        <div>
            <Book title="The Sun Also Rises" author="Ernest Hemingway" pages={260} />
        </div>
    )
}

render(
    <Library/>, 
    document.getElementById('root')
)
