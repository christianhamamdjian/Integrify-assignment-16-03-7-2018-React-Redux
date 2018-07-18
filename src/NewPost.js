import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  Prompt,
  Switch
} from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";

class NewPost extends Component {
  handleSave = e => {
    const title = this.getTitle.value;
    const category = this.getCategory.value;
    const content = this.getContent.value;

    const payload = {
      id: `${Date.now()}`,
      title,
      category,
      content,
      editing: false
    };

    this.props.handleSubmit(payload);

    this.getTitle.value = "";
    this.getCategory.value = "";
    this.getContent.value = "";

    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSave}>
          <label>Title</label>
          <input placeholder="Title" ref={input => (this.getTitle = input)} />

          <label>Category</label>
          <input
            placeholder="Category"
            ref={input => (this.getCategory = input)}
          />

          <label>Write a new post</label>
          <textarea
            rows="5"
            cols="28"
            placeholder="Content"
            ref={input => (this.getContent = input)}
          />

          <button type="submit">Save</button>

          <NavLink to="/">
            <button>Cancel</button>
          </NavLink>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: payload => dispatch({ type: "ADD_POST", payload })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost);
