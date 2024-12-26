import React from 'react';
import {PDFDocument, rgb, StandardFonts} from 'pdf-lib';

export class FilledPDF extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            errorOccurred: false
        };
    }

    async componentDidMount() {
        try {
//            const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
            const url = './Wisdom_consent_2023_09_11.pdf'
            const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());
            const pdfDoc = await PDFDocument.load(existingPdfBytes);
            const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
            const pages = pdfDoc.getPages();

            const page3 = pages[2];
            switch (this.props.consentFormData.allow_data_use) {
                case '0':
                    page3.drawText('X', {
                        x: 200,
                        y: 370,
                        size: 15,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1)
                    });
                    break;
                case '1':
                    page3.drawText('X', {
                        x: 130,
                        y: 370,
                        size: 15,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1)
                    });
                    break;
                default:
            }
            switch (this.props.consentFormData.permission_to_contact) {
                case '0':
                    page3.drawText('X', {
                        x: 200,
                        y: 270,
                        size: 15,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1)
                    });
                    break;
                case '1':
                    page3.drawText('X', {
                        x: 130,
                        y: 270,
                        size: 15,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1)
                    });
                    break;
                default:
            }
            switch (this.props.consentFormData.permission_to_use_data_directly_related) {
                case '0':
                    page3.drawText('X', {
                        x: 200,
                        y: 210,
                        size: 15,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1)
                    });
                    break;
                case '1':
                    page3.drawText('X', {
                        x: 130,
                        y: 210,
                        size: 15,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1)
                    });
                    break;
                default:
            }

            const page4 = pages[3];
            switch (this.props.consentFormData.permission_to_use_data_not_related) {
                case '0':
                    page4.drawText('X', {
                        x: 200,
                        y: 645,
                        size: 15,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1)
                    });
                    break;
                case '1':
                    page4.drawText('X', {
                        x: 130,
                        y: 645,
                        size: 15,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1)
                    });
                    break;
                default:
            }
            switch (this.props.consentFormData.permission_to_give_data) {
                case '0':
                    page4.drawText('X', {
                        x: 200,
                        y: 365,
                        size: 15,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1)
                    });
                    break;
                case '1':
                    page4.drawText('X', {
                        x: 130,
                        y: 365,
                        size: 15,
                        font: helveticaFont,
                        color: rgb(0.95, 0.1, 0.1)
                    });
                    break;
                default:
            }

            const page11 = pages[10];
            const signature = await pdfDoc.embedPng(this.props.consentFormData.consent_signature);
            const dims = signature.scale(0.35);
            page11.drawImage(signature, {
                x: 30,
                y: 565,
                width: dims.width,
                height: dims.height
            });
            page11.drawText(this.props.consentFormData.consent_printed_name, {
                x: 260,
                y: 595,
                size: 15,
                font: helveticaFont,
                color: rgb(0.95, 0.1, 0.1)
            });
            const given = this.props.consentFormData.consent_given_on.split(' ');
            page11.drawText(given[0], {
                x: 420,
                y: 595,
                size: 15,
                font: helveticaFont,
                color: rgb(0.95, 0.1, 0.1)
            });
            page11.drawText(given[1], {
                x: 505,
                y: 595,
                size: 15,
                font: helveticaFont,
                color: rgb(0.95, 0.1, 0.1)
            });

            const pdfDataUri = await pdfDoc.saveAsBase64({dataUri: true});
            this.setState({
                isLoaded: true,
                pdfDataUri: pdfDataUri
            });
        } catch (error) {
            console.log(error);
            this.setState({errorOccurred: true});
        }
  
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <iframe id="pdf" style={{width: "100%", height: "500px"}} title="Signed Consent Document" src={this.state.pdfDataUri}></iframe>
            );
        }
        else if (this.state.errorOccurred) {
            return (<div>Unable to retrieve PDF.</div>);
        }
        else {
            return (<div>Loading...</div>);
        }
    }
}
