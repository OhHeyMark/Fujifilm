import React from 'react';
class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>Manager</td>
                    <td>manager@hotmail.com</td>
                </tr>
                <tr>
                    <td scope="row"></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table> );
    }
}
 
export default Listar;