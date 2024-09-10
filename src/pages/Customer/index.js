import React from "react";
import "./customer.scss";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const ResponsiveExample = () => {
    return (
        <>
            <Table responsive hover striped>
                <thead className="tHead">
                    <tr className="tRow">
                        <th>
                            <h6>id</h6>
                        </th>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <th key={index}>
                                <h6>Table Heading</h6>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="tBody">
                    <tr className="tRow">
                        <td>1</td>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td className="tCell" key={index}>
                                Table cell {index}
                            </td>
                        ))}
                    </tr>
                    <tr className="tRow">
                        <td>2</td>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td className="tCell" key={index}>
                                Table cell {index}
                            </td>
                        ))}
                    </tr>
                    <tr className="tRow">
                        <td>3</td>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td className="tCell" key={index}>
                                Table cell {index}
                            </td>
                        ))}
                    </tr>
                    <tr className="tRow">
                        <td>4</td>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td className="tCell" key={index}>
                                Table cell {index}
                            </td>
                        ))}
                    </tr>
                    <tr className="tRow">
                        <td>5</td>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td className="tCell" key={index}>
                                Table cell {index}
                            </td>
                        ))}
                    </tr>
                    <tr className="tRow">
                        <td>6</td>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td className="tCell" key={index}>
                                Table cell {index}
                            </td>
                        ))}
                    </tr>
                    <tr className="tRow">
                        <td>7</td>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td className="tCell" key={index}>
                                Table cell {index}
                            </td>
                        ))}
                    </tr>
                    <tr className="tRow">
                        <td>8</td>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td className="tCell" key={index}>
                                Table cell {index}
                            </td>
                        ))}
                    </tr>
                    <tr className="tRow">
                        <td>9</td>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td className="tCell" key={index}>
                                Table cell {index}
                            </td>
                        ))}
                    </tr>
                    <tr className="tRow">
                        <td>10</td>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td className="tCell" key={index}>
                                Table cell {index}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </Table>
            <ButtonGroup aria-label="Basic example">
                <Button variant="outline-secondary">Left</Button>
                <Button variant="outline-secondary">2</Button>
                <Button variant="outline-secondary">Right</Button>
            </ButtonGroup>
        </>
    );
}

const Index = () => {
    return (
        <div className="content">
            <div className="topSection">
                <div className="topSection__left">
                    <h3 className="topSection__left--title">Customers</h3>
                </div>
                <div className="topSection__right">
                    <div className="filter-widget">
                        <p>Filter</p>
                        <span className="filter-widget__cover">
                            <i className="bi bi-filter filter-widget__cover"></i>
                        </span>
                    </div>
                    <div className="addBtn">
                        <Button variant="primary">Primary</Button>
                    </div>
                </div>
            </div>
            <div className="dataGrid">{ResponsiveExample()}</div>
        </div>
    );
};

export default Index;
