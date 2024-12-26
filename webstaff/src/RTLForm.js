import React from 'react';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';

export class RTLForm extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
            isLoaded: false,
            data: this.props.data,
            clicked: false,
        };
    }

    componentDidMount() {
        this.setState({
            isLoaded: true,
        });
    }


    render() {
        const { clicked } = this.state;
        const buttonStyle = {
            backgroundColor: "hotpink",
            fontSize: "large",
            transform: clicked ? "scale(0.95)" : "scale(1)",
            transition: "transform 0.1s ease, background-color 0.2s ease"
        };

        const getTodayDate = () => {
            const today = new Date();
            const yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
            const dd = String(today.getDate()).padStart(2, '0');
            return `${yyyy}-${mm}-${dd}`;
        }

        if (this.state.isLoaded) {
            let monthOptions = [
                { label: 'January', value: '1' },
                { label: 'February', value: '2' },
                { label: 'March', value: '3' },
                { label: 'April', value: '4' },
                { label: 'May', value: '5' },
                { label: 'June', value: '6' },
                { label: 'July', value: '7' },
                { label: 'August', value: '8' },
                { label: 'September', value: '9' },
                { label: 'October', value: '10' },
                { label: 'November', value: '11' },
                { label: 'December', value: '12' }
            ];

            let elements = this.props.elements.map(function (element) {
                if (element.show_if_checked !== undefined && this.state.data[element.show_if_checked] !== '1') {
                    return '';
                }
                if (element.show_if !== undefined) {
                    if (element.show_if.value !== undefined && this.state.data[element.show_if.field_name] !== element.show_if.value) {
                        return '';
                    }
                    if (element.show_if.values !== undefined &&
                        element.show_if.values.findIndex(function (item) {
                            return (item === this.state.data[element.show_if.field_name]);
                        }.bind(this)) === -1) {
                        return '';
                    }
                }
                if (element.show_if_all !== undefined) {
                    for (let show_if of element.show_if_all) {
                        let found = false;

                        if (show_if.any_checked !== undefined) {
                            for (let field_name of show_if.any_checked) {
                                if (this.state.data[field_name] === '1') {
                                    found = true;
                                }
                            }
                        }
                        else if (show_if.value !== undefined) {
                            if (show_if.check === '>') {
                                found = (parseInt(this.state.data[show_if.field_name]) > parseInt(show_if.value));
                            }
                            else {
                                found = (this.state.data[show_if.field_name] === show_if.value);
                            }
                        }
                        else if (show_if.values !== undefined) {
                            var value;
                            for (value of show_if.values) {
                                if (this.state.data[show_if.field_name] === value) {
                                    found = true;
                                }
                            }
                        }
                        if (!found) {
                            return '';
                        }
                    }
                }
                if (element.show_if_any !== undefined) {
                    let found = false;
                    for (let show_if of element.show_if_any) {
                        if (show_if.all !== undefined) {
                            let all_true = true
                            for (let criteria of show_if.all) {
                                if (criteria.value !== undefined && this.state.data[criteria.field_name] !== criteria.value) {
                                    all_true = false;
                                }
                                if (criteria.values !== undefined &&
                                    criteria.values.findIndex(function (item) {
                                        return (item === this.state.data[criteria.field_name]);
                                    }.bind(this)) === -1) {
                                    all_true = false;
                                }
                            }
                            if (all_true) {
                                found = true;
                            }
                        }
                        else if (show_if.value !== undefined && this.state.data[show_if.field_name] === show_if.value) {
                            found = true;
                        }
                        else if (show_if.values !== undefined) {
                            for (let value of show_if.values) {
                                if (this.state.data[show_if.field_name] === value) {
                                    found = true;
                                }
                            }
                        }
                    }
                    if (!found) {
                        return '';
                    }
                }
                if (element.show_if_not_ongoing !== undefined && (
                    this.state.data[element.show_if_not_ongoing + '_ongoing'] === '1'
                    || (
                        this.isEmpty(element.show_if_not_ongoing + '_stop_month') &&
                        this.isEmpty(element.show_if_not_ongoing + '_stop_year')))) {
                    return '';
                }

                let rows = [];
                let questions = [];
                let is_one_checked = false;
                let is_other_missing = false;
                switch (element.element_type) {
                    case 'hidden':
                        return '';
                    case 'checkboxes':
                        let checkboxes = element.options.map(function (checkbox) {
                            let field_name = element.field_start + '___' + checkbox.response;
                            let other = '';
                            if (element.specify_choice !== undefined && element.specify_choice.response === checkbox.response) {
                                other = (
                                    <InputText className={"p-inputtext"} type="text" value={this.state.data[element.specify_choice.field_name]} onChange={this.onFieldChange(element.specify_choice.field_name)} disabled={this.state.data[field_name] !== '1'} />
                                );
                                if (this.state.data[field_name] === '1' && this.isEmpty(element.specify_choice.field_name)) {
                                    is_other_missing = true;
                                }
                            }
                            if (this.state.data[field_name] === '1') {
                                is_one_checked = true;
                            }
                            return (
                                <div>
                                    <Checkbox type="checkbox" onChange={this.checkCheckbox(element, field_name)} checked={this.state.data[field_name] === '1'} /> {checkbox.label}
                                    {other !== "" && is_other_missing &&
                                        <span style={{ color: "red" }}>*</span>
                                    }
                                    {other}
                                </div>
                            );
                        }.bind(this));
                        return (
                            <tr>
                                <td className={"question"}>
                                    {element.label}
                                    <span style={{ fontStyle: "italic", fontSize: "10px" }}>(Select all that apply)</span>
                                    {!is_one_checked &&
                                        <span style={{ color: "red" }}>*</span>
                                    }
                                    {element.instructions !== undefined &&
                                        <div style={{ fontStyle: "italic", paddingTop: "10px" }}>{element.instructions}</div>
                                    }
                                </td>
                                <td>
                                    {checkboxes}
                                </td>
                            </tr>
                        );
                    // break;
                    case 'date':
                        return (
                            <tr>
                                <td className={"question"}>
                                    {element.label}
                                    {this.isEmpty(element.field_name) && element.optional !== true &&
                                        <span style={{ color: "red" }}>*</span>
                                    }
                                </td>
                                <td>
                                    {this.props.consentFormVisible ? null : (
                                        <InputText
                                            className={"p-inputtext"}
                                            type="date"
                                            value={this.state.data[element.field_name]}
                                            onChange={this.onFieldChange(element.field_name)}
                                            max={getTodayDate()}
                                        />
                                    )}
                                    {element.hint !== undefined &&
                                        <div style={{ color: "blue", fontSize: "x-small" }}>{element.hint}</div>
                                    }
                                </td>
                            </tr>
                        );
                    // break;
                    case 'date_plus_checkbox':
                        return (
                            <tr>
                                <td className={"question"}>
                                    {element.label}
                                    {this.state.data[element.checkbox.field_name] !== '1' && this.isEmpty(element.field_name) &&
                                        <span style={{ color: "red" }}>*</span>
                                    }
                                </td>
                                <td>
                                    <InputText className={"p-inputtext"} type="date" value={this.state.data[element.field_name]} onChange={this.onFieldChange(element.field_name)} disabled={this.state.data[element.checkbox.field_name] === '1'} max={getTodayDate()} />
                                    <span style={{ paddingLeft: "10px" }}><Checkbox type="checkbox" onChange={this.checkCheckbox(element, element.checkbox.field_name)} checked={this.state.data[element.checkbox.field_name] === '1'} /> {element.checkbox.label}</span>
                                </td>
                            </tr>
                        );
                    // break;
                    case 'descriptive':
                        return (
                            <tr>
                                <td className={"question"} colspan="2">
                                    {element.label}
                                    {element.instructions !== undefined &&
                                        <div style={{ fontStyle: "italic", paddingTop: "10px" }}>{element.instructions}</div>
                                    }
                                </td>
                            </tr>
                        );
                    // break;
                    case 'header':
                        return (
                            <tr>
                                <td className={"question"} colspan="2" style={{ fontWeight: "bold" }}>
                                    {element.label}
                                    {element.instructions !== undefined &&
                                        <div style={{ fontStyle: "italic", paddingTop: "10px" }}>{element.instructions}</div>
                                    }
                                </td>
                            </tr>
                        );
                    // break;
                    case 'list':
                        return (
                            <tr>
                                <td className={"question"}>
                                    {element.label}
                                    {this.isEmpty(element.field_name) && element.optional !== true &&
                                        <span style={{ color: "red" }}>*</span>
                                    }
                                </td>
                                <td>
                                    <Dropdown
                                        className={"p-dropdown"}
                                        value={this.state.data[element.field_name]}
                                        options={element.options}
                                        placeholder="Select..."
                                        onChange={this.onFieldChange(element.field_name)} />
                                </td>
                            </tr>
                        );
                    // break;
                    case 'measurement':
                        return (
                            <tr>
                                <td className={"question"}>
                                    {element.label}
                                    {this.state.data[element.field_start + '_unk'] !== '1' && (this.isEmpty(element.field_start) || this.isEmpty(element.field_start + '_unit')) &&
                                        <span style={{ color: "red" }}>*</span>
                                    }
                                </td>
                                <td>
                                    <InputText className={"p-inputtext"} type="number" value={this.state.data[element.field_start]} onChange={this.onFieldChange(element.field_start)} disabled={this.state.data[element.field_start + '_unk'] === '1'} /><span style={{ paddingLeft: "10px" }}><Checkbox type="checkbox" onChange={this.checkCheckbox(element, element.field_start + '_unk')} checked={this.state.data[element.field_start + '_unk'] === '1'} /> Unknown</span>
                                    {this.state.data[element.field_start + '_unk'] !== '1' &&
                                        <span style={{ paddingLeft: "10px" }}>
                                            <Dropdown
                                                className={"p-dropdown"}
                                                value={this.state.data[element.field_start + '_unit']}
                                                options={element.units}
                                                placeholder="Select unit..."
                                                onChange={this.onFieldChange(element.field_start + '_unit')} />
                                        </span>
                                    }
                                </td>
                            </tr>
                        );
                    // break;
                    case 'month_year':
                        return (
                            <tr>
                                <td className={"question"}>
                                    {element.label}
                                    {(this.isEmpty(element.field_start + '_month') || this.isEmpty(element.field_start + '_year')) &&
                                        <span style={{ color: "red" }}>*</span>
                                    }
                                </td>
                                <td>
                                    <Dropdown
                                        className={"p-dropdown"}
                                        value={this.state.data[element.field_start + '_month']}
                                        options={monthOptions}
                                        placeholder="Select month..."
                                        onChange={this.onFieldChange(element.field_start + '_month')} />
                                    <InputText className={"p-inputtext"} type="number" placeholder="yyyy" min="1900" max="2099" value={this.state.data[element.field_start + '_year']} onChange={this.onFieldChange(element.field_start + '_year')} />
                                    {element.hint !== undefined &&
                                        <div style={{ color: "blue", fontSize: "x-small", textAlign: "center" }}>{element.hint}</div>
                                    }
                                </td>
                            </tr>
                        );
                    // break;
                    case 'month_year_range':
                        return (
                            <tr>
                                <td className={"question"}>{element.label}</td>
                                <td>
                                    Start:
                                    {(this.isEmpty(this.state.data[element.field_start + '_start_month']) || this.isEmpty(element.field_start + '_start_year')) &&
                                        <span style={{ color: "red" }}>*</span>
                                    }
                                    <Dropdown
                                        className={"p-dropdown"}
                                        value={this.state.data[element.field_start + '_start_month']}
                                        options={monthOptions}
                                        placeholder="Select month..."
                                        onChange={this.onFieldChange(element.field_start + '_start_month')} />
                                    <InputText className={"p-inputtext"} type="number" placeholder="yyyy" min="1900" max="2099" value={this.state.data[element.field_start + '_start_year']} onChange={this.onFieldChange(element.field_start + '_start_year')} />
                                    <span style={{ paddingLeft: "10px", paddingRight: "10px" }}>-</span>
                                    End:
                                    {this.state.data[element.field_start + '_ongoing'] !== '1' && (this.isEmpty(element.field_start + '_stop_month') || this.isEmpty(element.field_start + '_stop_year')) &&
                                        <span style={{ color: "red" }}>*</span>
                                    }
                                    <Dropdown
                                        className={"p-dropdown"}
                                        value={this.state.data[element.field_start + '_stop_month']}
                                        options={monthOptions}
                                        placeholder="Select month..."
                                        onChange={this.onFieldChange(element.field_start + '_stop_month')}
                                        disabled={this.state.data[element.field_start + '_ongoing'] === '1'} />
                                    <InputText className={"p-inputtext"} type="number" placeholder="yyyy" min="1900" max="2099" value={this.state.data[element.field_start + '_stop_year']} onChange={this.onFieldChange(element.field_start + '_stop_year')} disabled={this.state.data[element.field_start + '_ongoing'] === '1'} />
                                    <span style={{ paddingLeft: "10px" }}><Checkbox type="checkbox" onChange={this.checkCheckbox(element, element.field_start + '_ongoing')} checked={this.state.data[element.field_start + '_ongoing'] === '1'} /> Ongoing</span>
                                </td>
                            </tr>
                        );
                    // break;
                    case 'number':
                        let min = '';
                        if (element.min !== undefined) {
                            min = element.min;
                        }
                        let max = '';
                        if (element.max !== undefined) {
                            max = element.max;
                        }
                        return (
                            <tr>
                                <td className={"question"}>
                                    {element.label}
                                    {this.isEmpty(element.field_name) && element.optional !== true &&
                                        <span style={{ color: "red" }}>*</span>
                                    }
                                    {element.instructions !== undefined &&
                                        <div style={{ fontStyle: "italic", paddingTop: "10px" }}>{element.instructions}</div>
                                    }
                                </td>
                                <td>
                                    <InputText className={"p-inputtext"} type="number" value={this.state.data[element.field_name]} onChange={this.onFieldChange(element.field_name)} min={min} max={max} />
                                    {element.hint !== undefined &&
                                        <div style={{ color: "blue", fontSize: "x-small" }}>{element.hint}</div>
                                    }
                                </td>
                            </tr>
                        );
                    // break;
                    case 'number_plus_checkbox':
                        return (
                            <tr>
                                <td className={"question"}>
                                    {element.label}
                                    {this.state.data[element.checkbox.field_name] !== '1' && this.isEmpty(element.field_name) && element.optional !== true &&
                                        <span style={{ color: "red" }}>*</span>
                                    }
                                    {element.instructions !== undefined &&
                                        <div style={{ fontStyle: "italic", paddingTop: "10px" }}>{element.instructions}</div>
                                    }
                                </td>
                                <td>
                                    <InputText className={"p-inputtext"} type="number" value={this.state.data[element.field_name]} onChange={this.onFieldChange(element.field_name)} disabled={this.state.data[element.checkbox.field_name] === '1'} />
                                    <span style={{ paddingLeft: "10px" }}><Checkbox type="checkbox" onChange={this.checkCheckbox(element, element.checkbox.field_name)} checked={this.state.data[element.checkbox.field_name] === '1'} /> {element.checkbox.label}</span>
                                </td>
                            </tr>
                        );
                    // break;
                    case 'phone':
                        return (
                            <tr>
                                <td className={"question"}>
                                    {element.label}
                                    {this.isEmpty(element.field_name) && element.optional !== true &&
                                        <span style={{ color: "red" }}>*</span>
                                    }
                                    {element.instructions !== undefined &&
                                        <div style={{ fontStyle: "italic", paddingTop: "10px" }}>{element.instructions}</div>
                                    }
                                </td>
                                <td>
                                    <InputMask mask="(999) 999-9999" placeholder="(999) 999-9999" value={this.state.data[element.field_name]} onChange={this.onFieldChange(element.field_name)} />
                                </td>
                            </tr>
                        );
                    // break;
                    case 'radio_buttons':
                        let radio_buttons = element.options.map(function (radio_button) {
                            let other = '';
                            if (element.specify_choice !== undefined && element.specify_choice.response === radio_button.value) {
                                other = (
                                    <InputText className={"p-inputtext"} type="text" value={this.state.data[element.specify_choice.field_name]} onChange={this.onFieldChange(element.specify_choice.field_name)} disabled={this.state.data[element.field_name] !== radio_button.value} />
                                );
                                if (this.state.data[element.field_name] === radio_button.value && this.isEmpty(element.specify_choice.field_name)) {
                                    is_other_missing = true;
                                }
                            }
                            if (element.specify_choices !== undefined) {
                                for (const choice of element.specify_choices) {
                                    if (choice.response === radio_button.value) {
                                        other = (
                                            <InputText className={"p-inputtext"} type="text" value={this.state.data[choice.field_name]} onChange={this.onFieldChange(choice.field_name)} disabled={this.state.data[element.field_name] !== radio_button.value} />
                                        );
                                    }
                                }
                            }
                            return (
                                <div>
                                    <RadioButton className={"p-radiobutton"} value={radio_button.value} onChange={this.onFieldChange(element.field_name)} checked={this.state.data[element.field_name] === radio_button.value} /> {radio_button.label}
                                    {other !== "" && is_other_missing &&
                                        <span style={{ color: "red" }}>*</span>
                                    }
                                    {other}
                                </div>
                            );
                        }.bind(this));
                        return (
                            <tr>
                                <td className={"question"}>
                                    {element.label}
                                    {this.isEmpty(element.field_name) && element.optional !== true &&
                                        <span style={{ color: "red" }}>*</span>
                                    }
                                    {element.instructions !== undefined &&
                                        <div style={{ fontStyle: "italic", paddingTop: "10px" }}>{element.instructions}</div>
                                    }
                                </td>
                                <td>
                                    {radio_buttons}
                                </td>
                            </tr>
                        );
                    // break;
                    case 'radio_grid':
                        let column_headings = element.options.map(function (currentValue, index, arr) {
                            let width = (50 / arr.length) + '%';
                            return (
                                <td style={{ paddingLeft: "10px", paddingRight: "10px", textAlign: "center", width: width }}>{currentValue.label}</td>
                            );
                        });
                        rows.push(
                            <tr>
                                <td className={"question"} colspan="2">{element.label}</td>
                            </tr>
                        );
                        questions = element.questions.map(function (question) {
                            if (question.show_if !== undefined) {
                                if (this.state.data[question.show_if.field_name] !== question.show_if.value) {
                                    return '';
                                }
                            }
                            if (question.show_if_all !== undefined) {
                                var show_if;
                                for (show_if of question.show_if_all) {
                                    let found = false;

                                    if (show_if.any_checked !== undefined) {
                                        for (let field_name of show_if.any_checked) {
                                            if (this.state.data[field_name] === '1') {
                                                found = true;
                                            }
                                        }
                                    }
                                    else if (show_if.value !== undefined) {
                                        found = (this.state.data[show_if.field_name] === show_if.value);
                                    }
                                    else if (show_if.values !== undefined) {
                                        var value;
                                        for (value of show_if.values) {
                                            if (this.state.data[show_if.field_name] === value) {
                                                found = true;
                                            }
                                        }
                                    }
                                    if (!found) {
                                        return '';
                                    }
                                }
                            }

                            let fields = element.options.map(function (option) {
                                return (
                                    <td style={{ paddingLeft: "10px", paddingRight: "10px", textAlign: "center" }}>
                                        <RadioButton className={"p-radiobutton"} value={option.value} onChange={this.onFieldChange(question.field_name)} checked={this.state.data[question.field_name] === option.value} />
                                    </td>
                                );
                            }.bind(this));
                            return (
                                <tr>
                                    <td>
                                        {question.label}
                                        {this.isEmpty(question.field_name) &&
                                            <span style={{ color: "red" }}>*</span>
                                        }
                                    </td>
                                    {fields}
                                </tr>
                            );
                        }.bind(this));
                        rows.push(
                            <tr>
                                <td colspan="2">
                                    <table>
                                        <tr>
                                            <td></td>
                                            {column_headings}
                                        </tr>
                                        {questions}
                                    </table>
                                </td>
                            </tr>
                        );
                        return rows;
                    // break;
                    // case 'surgery_table':
                    //     rows.push(
                    //         <tr>
                    //             <td className={"question"} colspan="2">{element.label}</td>
                    //         </tr>
                    //     );
                    //     questions = element.questions.map(function(question) {
                    //         let yes_no_name = element.field_starts[0] + '_' + question.id;
                    //         let reason_name = element.field_starts[1] + '_' + question.id;
                    //         let date_name =  element.field_starts[2] + '_' + question.id;
                    //         let date_unk_name = date_name + 'unk';
                    //         let type_name = element.field_starts[3] + '_' + question.id;
                    //         return (
                    //             <tr>
                    //                 <td>
                    //                     {question.label}
                    //                     {element.other_id === question.id && this.state.data[yes_no_name] === '1' &&
                    //                     <InputText className={"p-inputtext"} type="text" value={this.state.data[element.other_field_name]} onChange={this.onFieldChange(element.other_field_name)} />
                    //                     }
                    //                 </td>
                    //                 <td style={{paddingLeft: "10px", paddingRight: "10px"}}>
                    //                     <RadioButton className={"p-radiobutton"} value={'1'} onChange={this.onFieldChange(yes_no_name)} checked={this.state.data[yes_no_name] === '1'} /> Yes
                    //                     <br />
                    //                     <RadioButton className={"p-radiobutton"} value={'0'} onChange={this.onFieldChange(yes_no_name)} checked={this.state.data[yes_no_name] === '0'} /> No
                    //                 </td>
                    //                 <td style={{paddingLeft: "10px", paddingRight: "10px"}}>
                    //                     {this.state.data[yes_no_name] === '1' &&
                    //                     <InputText className={"p-inputtext"} type="text" value={this.state.data[reason_name]} onChange={this.onFieldChange(reason_name)} />
                    //                     }
                    //                 </td>
                    //                 <td style={{paddingLeft: "10px", paddingRight: "10px"}}>
                    //                     {this.state.data[yes_no_name] === '1' &&
                    //                     <div>
                    //                         <InputText className={"p-inputtext"} type="date" value={this.state.data[date_name]} onChange={this.onFieldChange(date_name)} disabled={this.state.data[date_unk_name] === '1'} />
                    //                         <span style={{paddingLeft: "10px"}}><Checkbox type="checkbox" onChange={this.checkCheckbox(element, date_unk_name)} checked={this.state.data[date_unk_name] === '1'} /> Unknown</span>
                    //                     </div>
                    //                     }
                    //                 </td>
                    //                 <td style={{paddingLeft: "10px", paddingRight: "10px"}}>
                    //                     {this.state.data[yes_no_name] === '1' &&
                    //                     <div>
                    //                         <RadioButton className={"p-radiobutton"} value={'1'} onChange={this.onFieldChange(type_name)} checked={this.state.data[type_name] === '1'} /> Laparoscopic
                    //                         <br />
                    //                         <RadioButton className={"p-radiobutton"} value={'2'} onChange={this.onFieldChange(type_name)} checked={this.state.data[type_name] === '2'} /> Open
                    //                     </div>
                    //                     }
                    //                 </td>
                    //             </tr>
                    //         );
                    //     }.bind(this));
                    //     rows.push(
                    //         <tr>
                    //             <td colspan="2">
                    //                 <table>
                    //                     <tr>
                    //                         <td></td>
                    //                         <td style={{paddingLeft: "10px", paddingRight: "10px", textAlign: "center"}}></td>
                    //                         <td style={{paddingLeft: "10px", paddingRight: "10px", textAlign: "center"}}>Reason</td>
                    //                         <td style={{paddingLeft: "10px", paddingRight: "10px", textAlign: "center"}}>Date</td>
                    //                         <td style={{paddingLeft: "10px", paddingRight: "10px", textAlign: "center"}}>Type</td>
                    //                     </tr>
                    //                     {questions}
                    //                 </table>
                    //             </td>
                    //         </tr>
                    //     );
                    //     return rows;
                    // break;
                    case 'text':
                        return (
                            <tr>
                                <td className={"question"}>
                                    {element.label}
                                    {this.isEmpty(element.field_name) && element.optional !== true &&
                                        <span style={{ color: "red" }}>*</span>
                                    }
                                    {element.instructions !== undefined &&
                                        <div style={{ fontStyle: "italic", paddingTop: "10px" }}>{element.instructions}</div>
                                    }
                                </td>
                                <td>
                                    <InputText className={"p-inputtext"} type="text" value={this.state.data[element.field_name]} onChange={this.onFieldChange(element.field_name)} />
                                </td>
                            </tr>
                        );
                    // break;
                    case 'weeks_and_days':
                        return (
                            <tr>
                                <td className={"question"} colspan="2">
                                    How many weeks
                                    {this.isEmpty(element.field_name_weeks) &&
                                        <span style={{ color: "red" }}>*</span>
                                    }
                                    <InputText className={"p-inputtext"} type="number" value={this.state.data[element.field_name_weeks]} onChange={this.onFieldChange(element.field_name_weeks)} />
                                    and days
                                    {this.isEmpty(element.field_name_days) &&
                                        <span style={{ color: "red" }}>*</span>
                                    }
                                    <InputText className={"p-inputtext"} type="number" value={this.state.data[element.field_name_days]} onChange={this.onFieldChange(element.field_name_days)} /> {element.label}?
                                </td>
                            </tr>
                        );
                    // break;
                    case 'yes_no':
                        let yes_no_options = [
                            { label: 'Yes', value: '1' },
                            { label: 'No', value: '0' }
                        ];
                        let yes_no_buttons = yes_no_options.map(function (radio_button) {
                            return (
                                <div>
                                    <RadioButton className={"p-radiobutton"} value={radio_button.value} onChange={this.onFieldChange(element.field_name)} checked={this.state.data[element.field_name] === radio_button.value} /> {radio_button.label}
                                </div>
                            );
                        }.bind(this));
                        return (
                            <tr>
                                <td className={"question"}>
                                    {element.label}
                                    {this.isEmpty(element.field_name) && element.optional !== true &&
                                        <span style={{ color: "red" }}>*</span>
                                    }
                                    {element.instructions !== undefined &&
                                        <div style={{ fontStyle: "italic", paddingTop: "10px" }}>{element.instructions}</div>
                                    }
                                </td>
                                <td>
                                    {yes_no_buttons}
                                </td>
                            </tr>
                        );
                    // break;
                    default:
                }
            }.bind(this));

            return (
                <dev>
                    <table>
                        {elements}
                    </table>
                    {!this.props.viewOnly &&
                        <p><Button className={"p-button"} style={buttonStyle} label="Submit" onClick={this.onClickSubmit} /></p>
                    }
                </dev>
            );
        }
        else {
            return (
                <div>Loading form...</div>
            );
        }
    }

    checkCheckbox = (element, field_name) => (e) => {
        var data = Object.assign({}, this.state.data);
        data[field_name] = (e.target.checked ? '1' : '0');
        if (element.element_type === 'month_year_range') {
            if (e.target.checked) {
                data[element.field_start + '_stop_month'] = '';
                data[element.field_start + '_stop_year'] = '';
            }
        }
        else if (element.element_type === 'number_plus_checkbox' || element.element_type === 'date_plus_checkbox') {
            if (e.target.checked) {
                data[element.field_name] = '';
            }
        }
        else if (element.options !== undefined) {
            let none_field_name = undefined;
            let unknown_field_name = undefined;
            if (element.none_response !== undefined) {
                none_field_name = element.field_start + '___' + element.none_response;
            }
            if (element.unknown_response !== undefined) {
                unknown_field_name = element.field_start + '___' + element.unknown_response;
            }
            element.options.forEach(function (checkbox) {
                let check_field_name = element.field_start + '___' + checkbox.response;
                if (data[field_name] && field_name !== check_field_name) {
                    if (none_field_name === field_name || unknown_field_name === field_name) {
                        data[check_field_name] = 0;
                    }
                    else {
                        if (element.none_response !== undefined) {
                            data[none_field_name] = 0;
                        }
                        if (element.unknown_response !== undefined) {
                            data[unknown_field_name] = 0;
                        }
                    }
                }
            });
        }
        this.setState({ data: data });
    }

    isEmpty = (fieldName) => {
        let value = this.state.data[fieldName];
        // console.log(fieldName);
        // console.log(value);
        return (value === undefined || value === null || value.trim() === "");
    }

    onClickSubmit = (e) => {
        // console.log(e);
        this.setState({ clicked: true });
        let data = Object.assign({}, this.state.data);
        let missing_responses = [];
        setTimeout(() => this.setState({ clicked: false }), 200);
        this.props.elements.forEach(function (element, index) {
            let set_null = false;
            if (element.show_if_checked !== undefined && data[element.show_if_checked] !== '1') {
                set_null = true;
            }
            // console.log(element);
            // console.log(data);
            if (element.show_if !== undefined) {
                if (element.show_if.value !== undefined && data[element.show_if.field_name] !== element.show_if.value) {
                    set_null = true;
                }
                if (element.show_if.values !== undefined &&
                    element.show_if.values.findIndex(function (item) {
                        return (item === data[element.show_if.field_name]);
                    }) === -1) {
                    set_null = true;
                }
            }
            if (element.show_if_all !== undefined) {
                for (let show_if of element.show_if_all) {
                    let found = false;

                    if (show_if.any_checked !== undefined) {
                        for (let field_name of show_if.any_checked) {
                            if (data[field_name] === '1') {
                                found = true;
                            }
                        }
                    }
                    else if (show_if.value !== undefined) {
                        if (show_if.check === '>') {
                            found = (parseInt(data[show_if.field_name]) > parseInt(show_if.value));
                        }
                        else {
                            found = (data[show_if.field_name] === show_if.value);
                        }
                    }
                    else if (show_if.values !== undefined) {
                        var value;
                        for (value of show_if.values) {
                            if (data[show_if.field_name] === value) {
                                found = true;
                            }
                        }
                    }
                    if (!found) {
                        set_null = true;
                    }
                }
            }
            if (element.show_if_any !== undefined) {
                let found = false;
                for (let show_if of element.show_if_any) {
                    if (show_if.all !== undefined) {
                        let all_true = true
                        for (let criteria of show_if.all) {
                            if (this.state.data[criteria.field_name] !== criteria.value) {
                                all_true = false;
                            }
                        }
                        if (all_true) {
                            found = true;
                        }
                    }
                    else if (show_if.value !== undefined && data[show_if.field_name] === show_if.value) {
                        found = true;
                    }
                    else if (show_if.values !== undefined) {
                        for (let value of show_if.values) {
                            if (data[show_if.field_name] === value) {
                                found = true;
                            }
                        }
                    }
                }
                if (!found) {
                    set_null = true;
                }
            }
            if (element.show_if_not_ongoing !== undefined && (
                data[element.show_if_not_ongoing + '_ongoing'] === '1'
                || (
                    this.isEmpty(element.show_if_not_ongoing + '_stop_month') &&
                    this.isEmpty(element.show_if_not_ongoing + '_stop_year')))) {
                set_null = true;
            }

            switch (element.element_type) {
                case 'hidden':
                    data[element.field_name] = element.value;
                    break;
                case 'checkboxes':
                    let is_one_checked = false;
                    element.options.forEach(function (checkbox) {
                        let field_name = element.field_start + '___' + checkbox.response;
                        if (set_null) {
                            data[field_name] = null;
                        }
                        else if (data[field_name] === '1') {
                            is_one_checked = true;
                        }
                        else {
                            data[field_name] = '0';
                        }
                    });
                    if (element.specify_choice !== undefined && (
                        set_null
                        ||
                        data[element.field_start + '___' + element.specify_choice.response] === '0'
                        ||
                        this.isEmpty(element.specify_choice.field_name))) {
                        data[element.specify_choice.field_name] = null;
                    }
                    if (set_null === false &&
                        (
                            is_one_checked === false
                            ||
                            (element.specify_choice !== undefined &&
                                data[element.field_start + '___' + element.specify_choice.response] === '1' &&
                                this.isEmpty(element.specify_choice.field_name))
                        )) {
                        missing_responses.push(index);
                    }
                    break;
                case 'date':
                    if (set_null || this.isEmpty(element.field_name)) {
                        data[element.field_name] = null;
                    }
                    if (set_null === false && data[element.field_name] === null && element.optional !== true) {
                        missing_responses.push(index);
                    }
                    break;
                case 'date_plus_checkbox':
                    if (set_null) {
                        data[element.field_name] = null;
                        data[element.checkbox.field_name] = null;
                    }
                    else if (data[element.checkbox.field_name] === '1') {
                        data[element.checkbox.field_name] = null;
                    }
                    else {
                        data[element.checkbox.field_name] = '0';
                        if (this.isEmpty(element.field_name)) {
                            data[element.field_name] = null;
                        }
                    }
                    if (set_null === false && data[element.field_name] === null && data[element.checkbox.field_name] === '0' && element.optional !== true) {
                        missing_responses.push(index);
                    }
                    break;
                case 'descriptive':
                    break;
                case 'header':
                    break;
                case 'list':
                    if (set_null || this.isEmpty(element.field_name)) {
                        data[element.field_name] = null;
                    }
                    if (set_null === false && data[element.field_name] === null && element.optional !== true) {
                        missing_responses.push(index);
                    }
                    break;
                case 'measurement':
                    if (set_null) {
                        data[element.field_start] = null;
                        data[element.field_start + '_unk'] = null;
                    }
                    else if (data[element.field_start + '_unk'] === '1') {
                        data[element.field_start] = null;
                    }
                    else {
                        data[element.field_start + '_unk'] = '0';
                        if (this.isEmpty(element.field_start)) {
                            data[element.field_start] = null;
                        }
                    }
                    if (set_null === false && data[element.field_start] === null && data[element.field_start + '_unk'] === '0') {
                        missing_responses.push(index);
                    }
                    break;
                case 'month_year':
                    if (set_null) {
                        data[element.field_start + '_month'] = null;
                        data[element.field_start + '_year'] = null;
                    }
                    else {
                        if (this.isEmpty(element.field_start + '_month')) {
                            data[element.field_start + '_month'] = null;
                        }
                        if (this.isEmpty(element.field_start + '_year')) {
                            data[element.field_start + '_year'] = null;
                        }
                    }
                    if (set_null === false && (data[element.field_start + '_month'] === null || data[element.field_start + '_year'] === null)) {
                        missing_responses.push(index);
                    }
                    break;
                case 'month_year_range':
                    if (set_null) {
                        data[element.field_start + '_start_month'] = null;
                        data[element.field_start + '_start_year'] = null;
                        data[element.field_start + '_stop_month'] = null;
                        data[element.field_start + '_stop_year'] = null;
                        data[element.field_start + '_ongoing'] = null;
                    }
                    else {
                        if (this.isEmpty(element.field_start + '_start_month')) {
                            data[element.field_start + '_start_month'] = null;
                        }
                        if (this.isEmpty(element.field_start + '_start_year')) {
                            data[element.field_start + '_start_year'] = null;
                        }
                        if (data[element.field_start + '_ongoing'] === '1') {
                            data[element.field_start + '_stop_month'] = null;
                            data[element.field_start + '_stop_year'] = null;
                        }
                        else {
                            data[element.field_start + '_ongoing'] = '0';
                            if (this.isEmpty(element.field_start + '_stop_month')) {
                                data[element.field_start + '_stop_month'] = null;
                            }
                            if (this.isEmpty(element.field_start + '_stop_year')) {
                                data[element.field_start + '_stop_year'] = null;
                            }
                        }
                    }
                    if (set_null === false &&
                        (
                            data[element.field_start + '_start_month'] === null
                            ||
                            data[element.field_start + '_start_year'] === null
                            ||
                            (
                                (data[element.field_start + '_stop_month'] === null || data[element.field_start + '_stop_year'] === null)
                                &&
                                data[element.field_start + '_ongoing'] === '0'
                            )
                        )) {
                        missing_responses.push(index);
                    }
                    break;
                case 'number':
                    if (set_null || this.isEmpty(element.field_name)) {
                        data[element.field_name] = null;
                    }
                    if (set_null === false && data[element.field_name] === null && element.optional !== true) {
                        missing_responses.push(index);
                    }
                    break;
                case 'number_plus_checkbox':
                    if (set_null) {
                        data[element.field_name] = null;
                        data[element.checkbox.field_name] = null;
                    }
                    else if (data[element.checkbox.field_name] === '1') {
                        data[element.field_name] = null;
                    }
                    else {
                        data[element.checkbox.field_name] = '0';
                        if (this.isEmpty(element.field_name)) {
                            data[element.field_name] = null;
                        }
                    }
                    if (set_null === false && data[element.field_name] === null && data[element.checkbox.field_name] === '0' && element.optional !== true) {
                        missing_responses.push(index);
                    }
                    break;
                case 'phone':
                    if (set_null || this.isEmpty(element.field_name)) {
                        data[element.field_name] = null;
                    }
                    if (set_null === false && data[element.field_name] === null && element.optional !== true) {
                        missing_responses.push(index);
                    }
                    break;
                case 'radio_buttons':
                    if (set_null || data[element.field_name] === undefined) {
                        data[element.field_name] = null;
                    }
                    if (element.specify_choice !== undefined && element.specify_choice.response !== data[element.field_name]) {
                        data[element.specify_choice.field_name] = null;
                    }
                    if (set_null === false && (
                        data[element.field_name] === null || (
                            element.specify_choice !== undefined &&
                            element.specify_choice.response === data[element.field_name] &&
                            this.isEmpty(element.specify_choice.field_name)))) {
                        missing_responses.push(index);
                    }
                    break;
                case 'radio_grid':
                    element.questions.forEach(function (question, index2) {
                        let set_question_null = false;
                        if (question.show_if !== undefined) {
                            if (data[question.show_if.field_name] !== question.show_if.value) {
                                set_question_null = true;
                            }
                        }
                        if (question.show_if_all !== undefined) {
                            var show_if;
                            for (show_if of question.show_if_all) {
                                let found = false;

                                if (show_if.any_checked !== undefined) {
                                    for (let field_name of show_if.any_checked) {
                                        if (data[field_name] === '1') {
                                            found = true;
                                        }
                                    }
                                }
                                else if (show_if.value !== undefined) {
                                    found = (data[show_if.field_name] === show_if.value);
                                }
                                else if (show_if.values !== undefined) {
                                    var value;
                                    for (value of show_if.values) {
                                        if (data[show_if.field_name] === value) {
                                            found = true;
                                        }
                                    }
                                }
                                if (!found) {
                                    set_question_null = true;
                                }
                            }
                        }
                        if (set_null || set_question_null || data[question.field_name] === undefined) {
                            data[question.field_name] = null;
                        }
                        if (set_null === false && data[question.field_name] === null) {
                            missing_responses.push([index, index2]);
                        }
                    });
                    break;
                // case 'surgery_table':
                //     break;
                case 'text':
                    if (set_null || this.isEmpty(element.field_name)) {
                        data[element.field_name] = null;
                    }
                    if (set_null === false && data[element.field_name] === null && element.optional !== true) {
                        missing_responses.push(index);
                    }
                    break;
                case 'weeks_and_days':
                    if (set_null || this.isEmpty(element.field_name_weeks)) {
                        data[element.field_name_weeks] = null;
                    }
                    if (set_null || this.isEmpty(element.field_name_days)) {
                        data[element.field_name_days] = null;
                    }
                    if (set_null === false && (data[element.field_name_weeks] === null || data[element.field_name_days] === null)) {
                        missing_responses.push(index);
                    }
                    break;
                case 'yes_no':
                    if (set_null || this.isEmpty(element.field_name)) {
                        data[element.field_name] = null;
                    }
                    if (set_null === false && data[element.field_name] === null && element.optional !== true) {
                        missing_responses.push(index);
                    }
                    break;
                default:
            }
        }.bind(this));
        console.log(data);
        if (missing_responses.length === 0) {
            this.props.onSubmit(data);
        }
        else {
            console.log(this.props.elements);
            console.log(missing_responses);
            alert('Please enter responses for questions marked with *');
        }
    }

    // onFieldChange = (field_name) => (e) => {
    //     var data = Object.assign({}, this.state.data);
    //     var selectedDate = new Date(e.target.value);
    //     const todayDate = new Date();
    //     if(selectedDate > todayDate){        
    //         alert("future date is not needed");
    //         data[field_name] = '';
    //         this.setState({data: data});
    //     }else{
    //     data[field_name] = e.target.value;
    //     this.setState({data: data});
    //     }   
    // }

    onFieldChange = (field_name) => (e) => {
        var data = Object.assign({}, this.state.data);

        if (field_name.includes("date")) {
            var selectedDate = new Date(e.target.value);
            const todayDate = new Date();

            if (selectedDate > todayDate) {
                alert("Future date is not needed.");
                data[field_name] = '';
            } else {
                data[field_name] = e.target.value;
            }
        } else {
            data[field_name] = e.target.value;
        }

        this.setState({ data });
    };


    updateState = () => {
        this.props.updateState(this.state);
    }
}
