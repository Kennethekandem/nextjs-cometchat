import React from 'react';
import Image from 'next/image'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
// import {listUsers} from "../lib/auth";
import consts from "../pages/const";
import useAPI from '../hooks/useAPI';

function AddFriend() {
    const { data, loading, error } = useAPI('?perPage=100&page=1&withTags=false');

    if (loading) {
        return <li className="list-group-item">Loading...</li>
    }
    if (data) {
        return (
            <ul className="list-group">
                {
                    loading ? "Loading" : (data.map((friend) => {
                        return (
                            <li key={friend.uid} className="list-group-item">
                                {friend.name}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                {friend.avatar ? <img src={friend.avatar} height={100} width={100} alt={friend.name} /> : ""}
                            </li>)
                    }))
                }

            </ul>
        )
    }
    if (error) {
        return <li className="list-group-item" style={{ color: red }}>Error!!!</li>
    }


    // return (
    //                 <ul className="list-group">
    //                     {
    //                         loading?"Loading":(data.data.map((friend)=>{
    //                            return  <li key={friend.uuid} className="list-group-item">{friend.name}</li>
    //                         }))
    //                     }

    //                 </ul>
    //             )
}

// class AddFriend extends React.Component {

//     /*componentDidMount() {
//         this.renderPosts();
//     }*/

//     renderPosts = async() => {
//         try {
//             const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
//             const posts = res.data.json();
//             console.log(posts);

//             // this will re render the view with new data
//             this.setState({
//                 Posts: posts
//             });
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     render() {
//         return (
//             <ul className="list-group">
//                 <li className="list-group-item active" aria-current="true">An active item</li>
//                 <li className="list-group-item">A second item</li>
//                 <li className="list-group-item">A third item</li>
//                 <li className="list-group-item">A fourth item</li>
//                 <li className="list-group-item">And a fifth one</li>
//             </ul>
//         )
//     }
// }

export default AddFriend;
