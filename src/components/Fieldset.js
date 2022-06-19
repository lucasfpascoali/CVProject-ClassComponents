import React from "react";

class Fieldset extends React.Component {
    render() {
        const { legend, inputFields } = this.props;

        return (
            <fieldset>
                <legend>{legend}</legend>
                {inputFields.map(inputField => {
                    const { name, type } = inputField;
                    const nameReplaced = name.replace(/([A-Z])/g, " $1");
                    const labelName = nameReplaced.charAt(0).toUpperCase() + nameReplaced.slice(1);
                    return (
                        <>
                            <label htmlFor={name}>{labelName}: </label>
                            <input id={name} name={name} type={type} onChange={this.props.handleChange} />
                        </>
                    );
                })}
            </fieldset>
        );
    }
}

export default Fieldset;