import React from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
// import {listUsers} from "../lib/auth";
import consts from "../pages/const";

class AddFriend extends React.Component {

    /*componentDidMount() {
        this.renderPosts();
    }*/

    renderPosts = async() => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            const posts = res.data.json();
            console.log(posts);

            // this will re render the view with new data
            this.setState({
                Posts: posts
            });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item active" aria-current="true">An active item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
        )
    }
}

export default AddFriend;
