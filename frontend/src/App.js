import React,{Component}  from 'react';
import './App.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


const url = "https://localhost:44301/api/items/";
var dates = Date().toLocaleString();

class App extends Component {
  state={
    data:[],
    modalInsertar: false,
    form:{
      code: '',
      name: '',
      price:'',
      type: '',
      user: 'Hardcode User',
      date: '2022-01-28T13:00:00',
      status: 'A'
    }
  }

  peticionGet=()=>{
    axios.get(url,{ crossdomain: true }).then(response=>{
      this.setState({data:response.data})
    }).catch(error=>{
      console.log(error.message);
    })
  }

  peticionPost=async()=>{
    await axios.post(url,this.state.form).then(response=>{
      this.modalInsertar();
      this.peticionGet();
    }).catch(error=>{
      console.log(error.message);
    })
  }

  modalInsertar=()=>{
    this.setState({modalInsertar: !this.state.modalInsertar})
  }

  handleChange= async e=>{
    e.persist();
    await this.setState({
    form:{
      ...this.state.form,
      [e.target.name]: e.target.value
    }
  });
  console.log(this.state.form);
  }

  getDate = ()=>{
    var today = new Date(),
    date = today.getFullYear() + '-' + today.getMonth + '-' + today.getDay + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    this.setState({ date });
    
  }


  componentDidMount(){
    this.peticionGet();
  }

  render()  {
    const {form}=this.state;
    return (  
      <div className="App">
        <br />
      <button className="btn btn-success" onClick={()=>this.modalInsertar()}> Agregar Item</button>  
      <br /><br />
      <table className="table">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Tipo</th>
            <th>Usuario</th>
            <th>Fecha Creación</th>
            <th>Status</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(item=>{
            return(
              <tr>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.type}</td>
              <td>{item.user}</td>
              <td>{item.date}</td>
              <td>{item.status}</td>
              <td>
                <button type="button" className="btn btn-primary btn-sm">Editar</button>
                {" "}
                <button type="button" className="btn btn-secondary btn-sm">Eliminar</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="codigo">Código</label>
                    <input className="form-control" type="text" name="code" id="code" onChange={this.handleChange} value={form.code}/>
                    <br />
                    <label htmlFor="nombre">Nombre</label>
                    <input className="form-control" type="text" name="name" id="name" onChange={this.handleChange} value={form.name}/>
                    <br />
                    <label htmlFor="precio">Precio</label>
                    <input className="form-control" type="text" name="price" id="price" onChange={this.handleChange} value={form.price}/>
                    <br />
                    <label htmlFor="tipo">Tipo</label>
                    <input className="form-control" type="text" name="type" id="type" onChange={this.handleChange} value={form.type}/>
                  </div>
                </ModalBody>

                <ModalFooter>
                    <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                      Insertar
                    </button>
                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
          </Modal>
      </div>
    );
  }
}
export default App;
