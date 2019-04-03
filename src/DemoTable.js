import React from 'react';
import PropTypes from 'prop-types';
import {Table, Pagination} from 'semantic-ui-react'

import {DemoPageSizeSelect} from './DemoPageSizeSelect';
import {DemoRow} from "./DemoRow";
import {DemoTableHeader} from "./DemoTableHeader";

export const DemoTable = (props) => {
  if (!props.demos) {
    return <React.Fragment/>;
  }
  const demoRows = props.demos.map(
    (demo, index) => <DemoRow key={index} demo={demo}  />
  );
  return (
    <React.Fragment>
      <DemoPageSizeSelect
        limit={props.limit}
        onChangeLimit={props.onChangeLimit}
      />
      Total count: {props.totalCount}.
      <Table celled selectable sortable >
        <DemoTableHeader
          column={props.column}
          direction={props.direction}
          handleSort={props.handleSort}
        />

        <Table.Body>
          {demoRows}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='8'>
              <Pagination
                totalPages={props.totalPages}
                activePage={props.currentPage}
                onPageChange={props.onChangePage}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </React.Fragment>
  );
};

DemoTable.propTypes = {
  totalCount: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onChangeLimit: PropTypes.func.isRequired,
  limit: PropTypes.string.isRequired,
};
