import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetails';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author={faker.name.firstName()} timeAgo={faker.date.past()} avatar={faker.image.avatar()} content={faker.lorem.sentences()} />
            <CommentDetail author={faker.name.firstName()} timeAgo={faker.date.past()} avatar={faker.image.avatar()} content={faker.lorem.sentences()} />
            <CommentDetail author={faker.name.firstName()} timeAgo={faker.date.past()} avatar={faker.image.avatar()} content={faker.lorem.sentences()} />
            <CommentDetail author={faker.name.firstName()} timeAgo={faker.date.past()} avatar={faker.image.avatar()} content={faker.lorem.sentences()} />
            <CommentDetail author={faker.name.firstName()} timeAgo={faker.date.past()} avatar={faker.image.avatar()} content={faker.lorem.sentences()} />
        </div>   
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));