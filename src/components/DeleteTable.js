import React, {Component} from 'react';
import axios from "axios";


class DeleteTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            samples: [],
            errorAlert: ''
        }

    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                console.log(response)
                this.setState({samples: response.data})
            })
            .catch(errorAlert => {
                console.log(errorAlert)
                this.setState({errorAlert: 'errorAlert SOMETHING WENT WRONG'})
            })
    }

    deleteRow(id) {
        axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(() => {
                this.setState({samples: this.state.samples.filter(picture => picture.id !== id)})
            })
    }

    render() {
        const {samples, errorAlert} = this.state
        return (
            <div>
                <h2>Lists Of Albums:</h2>
                {samples.length ?
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Thumbnail</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>

                        {samples.map(pictures => (
                            <tr key={pictures.id}>
                                <td>{pictures.id}</td>
                                <td>{pictures.title}</td>
                                <td><img src={pictures.thumbnailUrl}/></td>
                                <td>
                                    <button className="delete"
                                            onClick={element => this.deleteRow(pictures.id, element)}>Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table> :
                    <div>{errorAlert}</div>
                }
            </div>
        )
    }
}

export default DeleteTable;