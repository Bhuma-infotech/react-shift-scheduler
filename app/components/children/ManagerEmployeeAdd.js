var React = require("react");
var helpers = require("../utils/helpers");

var ManagerEmployeeAdd = React.createClass({
    getInitialState: function() {
        return {
            firstName: "",
            lastName: "",
            addressOne: "",
            addressTwo: "",
            city: "",
            state: "",
            zip: "",
            email: "",
            phone: "",
            phoneType: ""
        };
    },
    handleFirstName: function(event) {
        this.setState({ firstName: event.target.value });
    },
    handleLastName: function(event) {
        this.setState({ lastName: event.target.value });
    },
    handleAddressOne: function(event) {
        this.setState({ addressOne: event.target.value });
    },
    handleAddressTwo: function(event) {
        this.setState({ addressTwo: event.target.value });
    },
    handleCity: function(event) {
        this.setState({ city: event.target.value });
    },
    handleZip: function(event) {
        this.setState({ zip: event.target.value });
    },
    handleEmail: function(event) {
        this.setState({ email: event.target.value });
    },
    handlePhone: function(event) {
        this.setState({ phone: event.target.value });
    },
    handlePhoneType: function(event) {
        this.setState({ phoneType: event.target.value });
    },
    componentDidUpdate: function() {
        helpers.addEmployee(this.state.firstName, this.state.lastName, this.state.addressOne, this.state.addressTwo, this.state.city, this.state.state, this.state.zip, this.state.email, this.state.phone, this.state.phoneType).then(function(response) {
            console.log("helpers.addEmployee Returned!")
        }.bind(this));
    },
    handleForm: function(event) {
        event.preventDefault();
        this.setState({
            firstName: "",
            lastName: "",
            addressOne: "",
            addressTwo: "",
            city: "",
            state: "",
            zip: "",
            email: "",
            phone: "",
            phoneType: ""
        });
    },
    render: function() {
        return (
            <div className="row">
                <div className="col m12">
                    <div className="section">
                        <div className="row">
                            <form className="col m12">
                                <div className="row">
                                    <div className="input-field col m6 s12">
                                        <input
                                            placeholder="First Name"
                                            id="firstName"
                                            type="text"
                                            className="validate"
                                            value={this.state.firstName}
                                            onChange={this.handleFirstName}
                                        />
                                    </div>
                                    <div className="input-field col m6 s12">
                                        <input
                                            placeholder="Last Name"
                                            id="lastName"
                                            type="text"
                                            className="validate"
                                            value={this.state.lastName}
                                            onChange={this.handleLastName}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col m12 s12">
                                        <input
                                            placeholder="Address One"
                                            id="addressOne"
                                            type="text"
                                            className="validate"
                                            value={this.state.addressOne}
                                            onChange={this.handleAddressOne}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col m12 s12">
                                        <input
                                            placeholder="Address Two"
                                            id="addressTwo"
                                            type="text"
                                            className="validate"
                                            value={this.state.addressTwo}
                                            onChange={this.handleAddressTwo}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col m6 s12">
                                        <input
                                            placeholder="City"
                                            id="city"
                                            type="text"
                                            className="validate"
                                            value={this.state.city}
                                            onChange={this.handleCity}
                                        />
                                    </div>
                                    <div className="input-field col m3 s6">
                                        <select>
                                            <option value="" disabled>State</option>
                                            <option value="AL">AL</option>
                                            <option value="AK">AK</option>
                                            <option value="AZ">AZ</option>
                                            <option value="AR">AR</option>
                                            <option value="CA">CA</option>
                                            <option value="CO">CO</option>
                                            <option value="CT">CT</option>
                                            <option value="DE">DE</option>
                                            <option value="FL">FL</option>
                                            <option value="GA">GA</option>
                                            <option value="HI">HI</option>
                                            <option value="ID">ID</option>
                                            <option value="IL">IL</option>
                                            <option value="IN">IN</option>
                                            <option value="IA">IA</option>
                                            <option value="KS">KS</option>
                                            <option value="KY">KY</option>
                                            <option value="LA">LA</option>
                                            <option value="ME">ME</option>
                                            <option value="MD">MD</option>
                                            <option value="MA">MA</option>
                                            <option value="MI">MI</option>
                                            <option value="MN">MN</option>
                                            <option value="MS">MS</option>
                                            <option value="MO">MO</option>
                                            <option value="MT">MT</option>
                                            <option value="NE">NE</option>
                                            <option value="NV">NV</option>
                                            <option value="NH">NH</option>
                                            <option value="NJ">NJ</option>
                                            <option value="NM">NM</option>
                                            <option value="NY">NY</option>
                                            <option value="NC">NC</option>
                                            <option value="ND">ND</option>
                                            <option value="OH">OH</option>
                                            <option value="OK">OK</option>
                                            <option value="OR">OR</option>
                                            <option value="PA">PA</option>
                                            <option value="RI">RI</option>
                                            <option value="SC">SC</option>
                                            <option value="SD">SD</option>
                                            <option value="TN">TN</option>
                                            <option value="TX">TX</option>
                                            <option value="UT">UT</option>
                                            <option value="VT">VT</option>
                                            <option value="VA">VA</option>
                                            <option value="WA">WA</option>
                                            <option value="WV">WV</option>
                                            <option value="WI">WI</option>
                                            <option value="WY">WY</option>
                                        </select>
                                    </div>
                                    <div className="input-field col m3 s6">
                                        <input
                                            placeholder="Zip"
                                            id="zip"
                                            type="number"
                                            className="validate"
                                            value={this.state.zip}
                                            onChange={this.handleZip}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col m12 s12">
                                        <input
                                            placeholder="Email"
                                            id="email"
                                            type="email"
                                            className="validate"
                                            value={this.state.email}
                                            onChange={this.handleEmail}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col m8 s8">
                                        <input
                                            placeholder="Phone"
                                            id="phone"
                                            type="number"
                                            className="validate"
                                            value={this.state.phone}
                                            onChange={this.handlePhone}
                                        />
                                    </div>
                                    <div className="input-field col m4 s4">
                                        <select>
                                            <option value="mobile">Mobile</option>
                                            <option value="work">Work</option>
                                            <option value="home">Home</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <button id="addEmployee" className="btn waves-effect waves-light green accent-3" onClick={this.handleForm}>Add Employee
                                            <i className="material-icons">person_add</i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ManagerEmployeeAdd;