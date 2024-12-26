import React from 'react';
import {Accordion, AccordionTab} from 'primereact/accordion';
import {Button} from 'primereact/button';
import {PageHeader} from './PageHeader';

export class PotentialBenefits extends React.Component {
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
                        Potential Benefits
                    </div>
                    <div style={{marginTop: "15px"}}>
                        This study is not designed to benefit you personally. However, possible future benefits to others include increased understanding of IBD or the impact of surgery on fertility in women with IBD.
                    </div>
                    <div style={{marginTop: "10px"}}>
                        <Accordion>
                            <AccordionTab header="Click here to learn more about potential benefits.">
                                <p className="m-0">
                                    The goal of the study is to determine the outcomes of pregnancies with inflammatory bowel disease. One arm of the study is to look specifically at impact of surgery on infertility in women with IBD. We also aim to examine the other factors that may predict fertility outcomes. Previous research in this field has been compromised by poor research design and outdated surgical techniques. We plan to use the results of our research to inform women and physicians regarding the true effect of surgery on fertility.
                                </p>
                            </AccordionTab>
                        </Accordion>
                    </div>
                    <table style={{marginTop: "25px", width: "100%"}}>
                        <tr>
                            <td style={{textAlign: "left"}}>
                                <Button className={"p-button"} style={{backgroundColor: "hotpink", fontSize: "large"}} label="< Go Back" onClick={this.props.onClickGoToPage('Re-contacting')} />
                            </td>
                            <td style={{textAlign: "right"}}>
                                <Button className={"p-button"} style={{backgroundColor: "hotpink", fontSize: "large"}} label="Next >" onClick={this.props.onClickGoToPage('Potential Risks')} />
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
