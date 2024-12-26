import React from 'react';
import {Accordion, AccordionTab} from 'primereact/accordion';
import {Button} from 'primereact/button';
import {PageHeader} from './PageHeader';

export class Recontacting extends React.Component {
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
                        Re-contacting
                    </div>
                    <div style={{marginTop: "15px"}}>
                        By consenting to be part of this study you are consenting to being contacted in the future to collect additional information about your health (completing surveys) and/or to discuss how your data might be used via phone and/or email.
                    </div>
                    <div style={{marginTop: "10px"}}>
                        <Accordion>
                            <AccordionTab header="Click here to learn more about re-contacting.">
                                <p className="m-0">
                                    The research team may reach out to you in the future to see if you are interested in participating in future studies. Participation in future studies is optional. The researchers would like your permission to keep your information and study data for future or current research studies. There will be a few questions before signing the consent that allows you to specify how your information and data can be used. You can still be part of the study if you do not allow us to use or share them.
                                </p>
                            </AccordionTab>
                        </Accordion>
                    </div>
                    <table style={{marginTop: "25px", width: "100%"}}>
                        <tr>
                            <td style={{textAlign: "left"}}>
                                <Button className={"p-button"} style={{backgroundColor: "hotpink", fontSize: "large"}} label="< Go Back" onClick={this.props.onClickGoToPage('Break Time 1')} />
                            </td>
                            <td style={{textAlign: "right"}}>
                                <Button className={"p-button"} style={{backgroundColor: "hotpink", fontSize: "large"}} label="Next >" onClick={this.props.onClickGoToPage('Potential Benefits')} />
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
