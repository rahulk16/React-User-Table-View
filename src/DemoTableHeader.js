import {Table} from "semantic-ui-react";
import React from "react";

export function DemoTableHeader(props) {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell width={1} sorted = {props.column === 'id' ? props.direction : null } onClick={() => props.handleSort('id')}>#</Table.HeaderCell>
        <Table.HeaderCell width={1} sorted = {props.column === 'first_name' ? props.direction : null } onClick={() => props.handleSort('first_name')}>First Name</Table.HeaderCell>
        <Table.HeaderCell width={1} sorted = {props.column === 'last_name' ? props.direction : null } onClick={() => props.handleSort('last_name')}>Last Name</Table.HeaderCell>
        <Table.HeaderCell width={1} sorted = {props.column === 'company_name' ? props.direction : null } onClick={() => props.handleSort('company_name')}>Company Name</Table.HeaderCell>
        <Table.HeaderCell width={1} sorted = {props.column === 'city' ? props.direction : null } onClick={() => props.handleSort('city')}>City</Table.HeaderCell>
        <Table.HeaderCell width={1} sorted = {props.column === 'state' ? props.direction : null } onClick={() => props.handleSort('state')}>State</Table.HeaderCell>
        <Table.HeaderCell width={1} sorted = {props.column === 'zip' ? props.direction : null } onClick={() => props.handleSort('zip')}>ZIP</Table.HeaderCell>
        <Table.HeaderCell width={1} sorted = {props.column === 'email' ? props.direction : null } onClick={() => props.handleSort('email')}>Email Id</Table.HeaderCell>
        <Table.HeaderCell width={3} sorted = {props.column === 'web' ? props.direction : null } onClick={() => props.handleSort('web')}>Website</Table.HeaderCell>
        <Table.HeaderCell width={1} sorted = {props.column === 'age' ? props.direction : null } onClick={() => props.handleSort('age')}>Age</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  )
}
