import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetails';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author={faker.name.firstName()} timeAgo={faker.date.past()} />
            <CommentDetail author={faker.name.firstName()} timeAgo={faker.date.past()} />
            <CommentDetail author={faker.name.firstName()} timeAgo={faker.date.past()} />
            <CommentDetail author={faker.name.firstName()} timeAgo={faker.date.past()} />
            <CommentDetail author={faker.name.firstName()} timeAgo={faker.date.past()} />
        </div>   
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));