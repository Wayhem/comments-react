import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetails';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author={faker.name.firstName()} 
                    timeAgo={faker.date.past()} 
                    avatar={faker.image.avatar()} 
                    content={faker.lorem.sentence()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={faker.name.firstName()} 
                    timeAgo={faker.date.past()} 
                    avatar={faker.image.avatar()} 
                    content={faker.lorem.sentence()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={faker.name.firstName()} 
                    timeAgo={faker.date.past()} 
                    avatar={faker.image.avatar()} 
                    content={faker.lorem.sentence()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={faker.name.firstName()} 
                    timeAgo={faker.date.past()} 
                    avatar={faker.image.avatar()} 
                    content={faker.lorem.sentence()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={faker.name.firstName()} 
                    timeAgo={faker.date.past()} 
                    avatar={faker.image.avatar()} 
                    content={faker.lorem.sentence()} 
                />
            </ApprovalCard>
        </div>   
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));