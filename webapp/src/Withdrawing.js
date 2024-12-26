import React from 'react';
import {Accordion, AccordionTab} from 'primereact/accordion';
import {Button} from 'primereact/button';
import {PageHeader} from './PageHeader';

export class Withdrawing extends React.Component {
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
                        Withdrawing
                    </div>
                    <div style={{marginTop: "15px"}}>
                        There will be no penalty if you decide not to take part in this study. You can withdraw your consent and discontinue participation at any time. The study team can be reached via email (<a style={{color: "black"}} href="mailto:wisdom@mssm.edu" target="_blank" rel="noreferrer">wisdom@mssm.edu</a>) or phone (212-824-7786).
                    </div>
                    <div style={{marginTop: "10px"}}>
                        <Accordion>
                            <AccordionTab header="Click here to learn more about withdrawing.">
                                <p className="m-0">
                                    There will be no penalty to you if you decide not to take part in this study. To stop being in the study at any time, you may withdraw from the study when completing the monthly surveys or by contacting the study team by email or phone. If you withdraw from the study, we will stop collecting new data, but any data already collected will remain as part of the study. The study team may also withdraw you from the study at any time for any reason.
                                </p>
                            </AccordionTab>
                        </Accordion>
                    </div>
                    <table style={{marginTop: "25px", width: "100%"}}>
                        <tr>
                            <td style={{textAlign: "left"}}>
                                <Button className={"p-button"} style={{backgroundColor: "hotpink", fontSize: "large"}} label="< Go Back" onClick={this.props.onClickGoToPage('Potential Risks')} />
                            </td>
                            <td style={{textAlign: "right"}}>
                                <Button className={"p-button"} style={{backgroundColor: "hotpink", fontSize: "large"}} label="Next >" onClick={this.props.onClickGoToPage('Break Time 2')} />
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
