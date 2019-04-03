import React from "react";
import {Button, Table} from "semantic-ui-react";
import PropTypes from "prop-types";

export const DemoRow = (props) => (
  <Table.Row>
    <Table.Cell>{props.demo.id}</Table.Cell>
    <Table.Cell>{props.demo.first_name}</Table.Cell>
    <Table.Cell>{props.demo.last_name}</Table.Cell>
    <Table.Cell>{props.demo.company_name}</Table.Cell>
    <Table.Cell>{props.demo.city}</Table.Cell>
    <Table.Cell>{props.demo.state}</Table.Cell>
    <Table.Cell>{props.demo.zip}</Table.Cell>
    <Table.Cell>{props.demo.email}</Table.Cell>
    <Table.Cell>{props.demo.web}</Table.Cell>
    <Table.Cell>{props.demo.age}</Table.Cell>
  </Table.Row>
);

DemoRow.propTypes = {
  demo: PropTypes.object.isRequired
};
