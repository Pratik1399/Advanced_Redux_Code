import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";
//import { createStore, applyMiddleware } from "redux";
//import { Provider } from "react-redux";
//import reducers from "reducers";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    // <Provider store={createStore(reducers,{},applyMiddleware(Pratik))}>
    <Root>
      <CommentBox />
    </Root>
    // </Provider>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a textarea and a button", () => {
  //const wrapped = mount(<CommentBox />);
  // console.log(wrapped.find('textarea'));
  // console.log(wrapped.find('button'));
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("the text area", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" }
    });
    wrapped.update();
  });
  it("has a textarea that users can type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("when form is submitted,text area get emptied", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
// it("has a textarea that users can type in", () => {
//   wrapped.find("textarea").simulate("change", {
//     target: { value: "new comment" }
//   });
//   wrapped.update();
//   expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
// });

// it("when form is submitted,text area get emptied", () => {
//   wrapped.find("textarea").simulate("change", {
//     target: { value: "new comment" }
//   });
//   wrapped.update();
//   //expect(wrapped.find("textarea").prop("value")).toEqual("new comment")
//   wrapped.find("form").simulate("submit");
//   wrapped.update();
//   // expect(wrapped.find("textarea").prop("value")).toEqual('123456')
//   expect(wrapped.find("textarea").prop("value")).toEqual("");
// });
