"use client";

import React, { Component } from 'react';
import './MultiplicationTable.css';

class MultiplicationTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
        selectedNumber: 1,
        };
    }

    handleNumberChange = (e) => {
        this.setState({ selectedNumber: e.target.value });
    };

    render() {
        const { selectedNumber } = this.state;
        const multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        return (
        <div className="container">
            <div className='box'>

                <h1 className="multiplication-header">Multiplication Table 🚀</h1>
                <div className="input-container">
                <label htmlFor="number" className="input-label">Enter a number:</label>
                <input
                    type="number"
                    id="number"
                    value={selectedNumber}
                    onChange={this.handleNumberChange}
                    className="input-field"
                />
                </div>
                <div>
                    <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th className="table-header">Multiplication</th>
                            <th className="table-header">Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {multipliers.map((multiplier) => (
                            <tr key={multiplier}>
                                <td className="table-cell center">{selectedNumber} * {multiplier}</td>
                                <td className="table-cell center">{selectedNumber * multiplier}</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
        );
    }
}

export default MultiplicationTable;
