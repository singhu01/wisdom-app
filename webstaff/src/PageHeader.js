import React from 'react';
import { Button } from '@mui/material';

export class PageHeader extends React.Component {
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
                <table width="100%">
                    <tr>
                        <td width="15%"></td>
                        <td width="70%">
                            <div style={{marginTop: "10px", textAlign: "center", color: "#221f72", fontSize: "18pt"}}>
                                The Women with Inflammatory Bowel Disease and Motherhood (WIsDoM) Study
                            </div>
                            <div style={{marginTop: "15px", textAlign: "center", color: "#ff66cc", fontSize: "18pt"}}>
                                A Study Focused on Female Fertility and IBD
                            </div>
                        </td>
                        {/* <td width="15%"><img src="./wisdom-image.png" alt="WIsDoM logo" height="125px" width="auto" /></td> */}
                    </tr>
                </table>
            );
        }
        else {
            return (<div>Loading...</div>);
        }
    }
}
