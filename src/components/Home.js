import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost, updatePost, deletePost } from "../actions/postActions";
import { bindActionCreators } from "redux";

import Modal from "react-modal";

// TODO : Create separate file of styles.
const modalStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "400px"
    }
};

const postStyle = {
        padding: "15px",
        borderBottom: "1px solid",
        float: "left",
        width: "100%",
        marginTop: "20px"

}
// TODO : Need to display datetime, author name.

class Home extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            id: 0,
            title: "",
            post: "",
            Error: ""
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.editPost = this.editPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }
    submit(e) {
        e.preventDefault();
        var _this = this;
        var { state } = this;
        var { title, post, id } = state;

        // TODO : implement proper input validation
        if( title && post ){
            console.log('value has')
            _this.setState({ Error : ""})
        }
        else {
            console.log('not value');
            _this.setState({ Error : "Title and Post Required."})
            return null;
            
        }
        var postInfo = {
            id,
            title,
            post
        };

        {
            id > 0
                ? this.props.updatePost(postInfo)
                : _this.props.addPost(postInfo);
        }

        _this.setState({
            modalIsOpen: false,
            id: 0,
            title: "",
            post: ""
        });
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }
    // NOTE: Add new functionality...
    afterOpenModal() {
    }

    editPost(id) {
        var _this = this;
        var { props } = this;
        var { postList } = props
        
        var singleValue = postList.find(post => {
            return post.id === id;
        });

        _this.setState({
            modalIsOpen: true,
            id: singleValue.id,
            title: singleValue.title,
            post: singleValue.post
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false,
            id: 0,
            title: "",
            post: ""
        });
    }
    componentDidMount() {
        // NOTE: Initialize Modal
        Modal.setAppElement("#root");
    }
    deletePost(id) {
        this.props.deletePost(id);
    }
    render() {
        var _this = this;
        var { props, state, openModal, deletePost, editPost, afterOpenModal, closeModal, submit, handleChange } = this;
        var { postList } = props;
        var { modalIsOpen, id, title, post, Error } = state;

        return (
            <div>
                <button
                    className="btn-sm btn btn-primary float-right"
                    onClick={openModal}
                >
                    Add Post
                </button>
                {/* TODO : Create separate file for post list and use here.. */}
                {postList.map(key => {
                    return (
                        <div
                            key={key.id}
                            className="title-with-post"
                            style={postStyle}
                        >
                            <h5>{key.title}</h5>
                            <p>{key.post}</p>
                            <button
                                className="btn-sm btn btn-danger float-right"
                                onClick={() => deletePost(key.id)}
                            >
                                Delete
                            </button>

                            <button
                                style={{ marginRight: "5px" }}
                                className="btn-sm btn btn-success float-right"
                                onClick={() => editPost(key.id)}
                            >
                                Edit
                            </button>
                        </div>
                    );
                })}
                <div>
                {/* TODO : Create separate file for Modal.. */}
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={modalStyles}
                        contentLabel="Example Modal"
                    >
                        <button
                            type="button"
                            className="close"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <form onSubmit={submit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    value={id}
                                    readOnly
                                    style={{display: 'none'}}
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="email"
                                    className="col-sm-2 col-form-label"
                                >
                                    Title:
                                </label>
                                <div className="col-sm-12">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={title}
                                        onChange={handleChange}
                                        name="title"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="pwd"
                                    className="col-sm-2 col-form-label"
                                >
                                    Post:
                                </label>
                                <div className="col-sm-12">
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        value={post}
                                        onChange={handleChange}
                                        name="post"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-12" style={{color: 'red', fontWeight: 'bold'}}>{Error}</label>
                            </div>

                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </Modal>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        postList: state.posts
    };
}
function mapDispacthToProps(dispatch) {
    return bindActionCreators({ addPost, updatePost, deletePost }, dispatch);
}
export default connect(mapStateToProps, mapDispacthToProps)(Home);
