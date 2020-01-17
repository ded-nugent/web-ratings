import React, { Component} from 'react';
import "./Checkbox.css"

class Checkbox extends Component {
    state = {
        checked: false,
    }

    toggleCheck = () => {
        const { handleCheck, label } = this.props;
        this.setState(({ checked }) => (
            { checked: !checked}
        ));
        
        handleCheck(label);
    }

    render() {
        const { label } = this.props;
        const { checked } = this.state;

        return (
            <div className="checkbox">
                <label>
                    <input 
                        type="checkbox"
                        name="checkbox"
                        value={label}
                        checked={checked}
                        onChange={this.toggleCheck}
                        />
                    {label}
                </label>
            </div>
        )
    }
}

export default Checkbox