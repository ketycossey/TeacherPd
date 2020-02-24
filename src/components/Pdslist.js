import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Pd = props => (
  <tr>
    <td>{props.pd.username}</td>
    <td>{props.pd.description}</td>
    <td>{props.pd.duration}</td>
    <td>{props.pd.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.pd._id}>edit</Link> |
      <a
        href="#"
        onClick={() => {
          props.deletepd(props.pd._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class Pdslist extends Component {
  constructor(props) {
    super(props);

    this.deletepd = this.deletepd.bind(this);

    this.state = { pds: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/pds/")
      .then(response => {
        this.setState({ pds: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deletepd(id) {
    axios.delete("http://localhost:4000/pds/" + id).then(response => {
      console.log(response.data);
    });

    this.setState({
      pds: this.state.pds.filter(el => el._id !== id)
    });
  }

  pdlist() {
    return this.state.pds.map(currentpd => {
      return <Pd pd={currentpd} deletepd={this.deletepd} key={currentpd._id} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Professional Developments</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.pdlist()}</tbody>
        </table>
      </div>
    );
  }
}
