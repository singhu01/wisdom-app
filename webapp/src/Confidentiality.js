import React from 'react';
import {Accordion, AccordionTab} from 'primereact/accordion';
import {Button} from 'primereact/button';
import {PageHeader} from './PageHeader';

export class Confidentiality extends React.Component {
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
                        Confidentiality and Protected Information
                    </div>
                    <div style={{marginTop: "15px"}}>
                        As you take part in this research study, it will be necessary for the research team and others to use and share some of your private protected health information. Protected Health Information (PHI) include, for example: your name, address, telephone number, medical record number, date of birth, family history, your medical record, etc.
                    </div>
                    <div style={{marginTop: "15px"}}>
                        Your health information, along with results of any procedures collected as part of this research study or regular clinical care, will be used for this study as explained earlier in this consent process. The results of this study could be published or presented at scientific meetings, lectures, etc., but would not include any information that would let others know who you are, unless you give separate permission to do so.
                    </div>
                    <div style={{marginTop: "10px"}}>
                        <Accordion>
                            <AccordionTab header="Click here to learn more about confidentiality and protected information.">
                                <p className="m-0">
                                    Consistent with the federal Health Insurance Portability and Accountability Act (HIPAA), we are asking your permission to receive, use and share your Protected Health Information.
                                </p>
                                <p className="m-0">
                                    Your authorization for the use of your protected health information for this specific study does not expire.
                                </p>
                                <p className="m-0">
                                    During your participation in this study, you will have access to your medical record and any study information that is part of that record. The investigator is not required to release to you research information that is not part of your medical record.
                                </p>
                                <p className="m-0">
                                    If you are authorizing the release of HIV-related information, you should be aware that the recipient(s) is (are) prohibited from re-disclosing any HIV-related information without your authorization unless permitted to do so under federal or state law.
                                </p>
                                <p className="m-0">
                                    The research team and other authorized members of The Mount Sinai Health System ("Mount Sinai") workforce may use and share your information to ensure that the research meets legal, institutional or accreditation requirements. For example, the School’s Program for the Protection of Human Subjects is responsible for overseeing research on human subjects, and may need to see your information.
                                </p>
                            </AccordionTab>
                        </Accordion>
                    </div>
                    <table style={{marginTop: "25px", width: "100%"}}>
                        <tr>
                            <td style={{textAlign: "left"}}>
                                <Button className={"p-button"} style={{backgroundColor: "hotpink", fontSize: "large"}} label="< Go Back" onClick={this.props.onClickGoToPage('Break Time 2')} />
                            </td>
                            <td style={{textAlign: "right"}}>
                                <Button className={"p-button"} style={{backgroundColor: "hotpink", fontSize: "large"}} label="Next >" onClick={this.props.onClickGoToPage('Comprehension Quiz')} />
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
