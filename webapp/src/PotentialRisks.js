import React from 'react';
import {Accordion, AccordionTab} from 'primereact/accordion';
import {Button} from 'primereact/button';
import {PageHeader} from './PageHeader';

export class PotentialRisks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        };
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        });
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <div style={{backgroundColor: "white", textAlign: "left", margin: "20px", fontSize: "14pt"}}>
                    <PageHeader />
                    <div style={{backgroundColor: "#221f72", color: "white", padding: "5px", marginTop: "20px"}}>
                        Potential Risks
                    </div>
                    <div style={{marginTop: "15px"}}>
                        There always exists the potential for loss of private information.
                    </div>
                    <div style={{marginTop: "10px"}}>
                        <Accordion>
                            <AccordionTab header="Click here to learn more about potential risks.">
                                <p className="m-0">
                                    There are procedures in place to minimize this risk. If your data is shared in a larger database there are additional risks.
                                </p>
                                <p className="m-0">
                                    Group Risks - Although your name will not be given to researchers, basic information such as your race, ethnic group, and sex may be shared. This information helps researchers learn whether the factors that lead to health problems are the same in different groups of people. It is possible that such findings could one day help people of the same race, ethnic group, or sex as you. However, they could also be used to support harmful stereotypes or discrimination.
                                </p>
                                <p className="m-0">
                                    Privacy Risks - Your name and other information that could directly identify you (such as an address, date of birth, or social security number) will never be placed into a shared database. However, there is a small chance that someone could trace it back to you. The risk of this happening is very small, but may grow in the future. If your private information was misused, it is possible you would experience other harms, such as stress, anxiety, stigmatization, or embarrassment from revealing information about your family relationships, ethnic heritage, or health conditions.
                                </p>
                            </AccordionTab>
                        </Accordion>
                    </div>
                    <table style={{marginTop: "25px", width: "100%"}}>
                        <tr>
                            <td style={{textAlign: "left"}}>
                                <Button className={"p-button"} style={{backgroundColor: "hotpink", fontSize: "large"}} label="< Go Back" onClick={this.props.onClickGoToPage('Potential Benefits')} />
                            </td>
                            <td style={{textAlign: "right"}}>
                                <Button className={"p-button"} style={{backgroundColor: "hotpink", fontSize: "large"}} label="Next >" onClick={this.props.onClickGoToPage('Withdrawing')} />
                            </td>
                        </tr>
                    </table>
                </div>
            );
        }
        else {
            return (<div>Loading...</div>);
        }
    }
}
