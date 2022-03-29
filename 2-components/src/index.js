import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                <div>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author='Sam' 
                    timeAgo="Today at 2:00PM" 
                    image={faker.image.image()} 
                    text='Hey love your work'
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author='Alex' 
                    timeAgo="Today at 5:00PM" 
                    image={faker.image.image()} 
                    text='That movie was amazing'
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author='Jane' 
                    timeAgo="Today at 7:00PM" 
                    image={faker.image.image()} 
                    text='I am R2D2'
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));