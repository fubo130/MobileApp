import React, {Component} from 'react';
import { render } from 'react-dom';
import Library from './Library';

let bookList = [
    {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
    {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
    {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]


// class FavoriteColor extends Component {
//     state = {value: ''}
    
//     newColor = e => this.setState({value: e.target.value})

//     submit = e => {
//         console.log(`New Color: ${this.state.value}`)
//         e.preventDefault()
//     }

//     render() {
//         return (
//             <form onSubmit={this.submit}>
//                 <lable>Favorite Color:
//                     <input type="color" onChange={this.newColor} />
//                 </lable>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }

render(
    <Library books={bookList}/>,
    // <FavoriteColor/>,
    document.getElementById('root')
)
