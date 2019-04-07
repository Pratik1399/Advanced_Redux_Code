import React from 'react';
//import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from 'components/App'
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// it('shows a comment box',()=>{
//     // const div=document.create('div');
//     const div=document.createElement('div');

//     ReactDOM.render(<App/>,div);

//     //Looks inside the div and check to see if the CommentBox is in there
//     //console.log(div.innerHTML);
//     //expect(div.innerHTML).toContain('Comment Box');
//     //expect(div).toHaveAnInstanceOf(CommentBox);
//     expect(div.innerHTML).toContain('Box for Comment');    
    
//     ReactDOM.unmountComponentAtNode(div);
// })

// it('shows a comment box',()=>{
//     const wrapped=shallow(<App/>);

//     expect(wrapped.find(CommentBox).length).toEqual(1);
// })

// it('shows a comment list',()=>{
//     const wrapped=shallow(<App/>);

//     expect(wrapped.find(CommentList).length).toEqual(1);
// })

let wrapped;

beforeEach(()=>{
    wrapped=shallow(<App/>);
})
it('shows a comment box',()=>{
    expect(wrapped.find(CommentBox).length).toEqual(1);
})

it('shows a comment list',()=>{
    expect(wrapped.find(CommentList).length).toEqual(1);
})

