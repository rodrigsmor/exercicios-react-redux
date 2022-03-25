import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeValue } from './field.actions'

class Field extends Component {
    handleChange() {

    }

    render() {
        return (
            <div>
                <label htmlFor="field">{ this.props.value }</label>
                <input name="field" type="text" onChange={this.props.changeValue} value={this.props.value}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        value: state.field.value
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ changeValue }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Field);