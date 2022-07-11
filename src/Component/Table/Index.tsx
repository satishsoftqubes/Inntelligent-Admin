import { matchSorter } from "match-sorter";
import React from "react";

import Table from "react-bootstrap/Table";
import { useFilters, usePagination, useSortBy, useTable } from "react-table";
import BothSort from "../../assets/Images/Icons/bothSort.svg";
import SortDown from "../../assets/Images/Icons/sortDown.svg";
import SortUp from "../../assets/Images/Icons/sortUp.svg";

// Define a default UI for filtering
function DefaultColumnFilter({ column: { filterValue, preFilteredRows, setFilter } }) {
  const count = preFilteredRows.length;

  return (
    <input
      className="table-search form-control"
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row: any) => row.values[id]] });
}
// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val) => !val;

function TableComponent({ columns, data }) {
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useSortBy,
    usePagination
  );
  return (
    <>
      <Table responsive className="table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, keyTr) => (
            //  <tr>
            //         <th>
            //           <div>{column.canFilter ? column.render("Filter") : null}</div>
            //         </th>
            //       </tr>
            <tr {...headerGroup.getHeaderGroupProps()} key={keyTr}>
              {headerGroup.headers.map((column, keyMain) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} key={keyMain}>
                  <span className="d-flex align-items-center">
                    {column.render("Header")}
                    <span className="text-sort-icon">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <img src={SortDown} alt="" />
                        ) : (
                          <img src={SortUp} alt="" />
                        )
                      ) : (
                        <img src={BothSort} alt="" />
                      )}
                    </span>
                  </span>
                </th>
              ))}
            </tr>
          ))}
          {headerGroups.map((headerGroup, keyTr) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={keyTr}>
              {headerGroup.headers.map((column, keyMain) => (
                <th key={keyMain}>
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={i}>
                {row.cells.map((cell, j) => {
                  return (
                    <td {...cell.getCellProps()} key={j}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="pagination">
        <div>
          <span>
            Page {pageIndex + 1} of {pageOptions.length}
          </span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>

        <div className="d-flex">
          <span className="d-flex align-items-center">
            {/* Go to page:{
              ' '} */}
            <span className="page-num">Page no.</span>
            <input
              type="number"
              defaultValue={pageIndex + 1}
              pattern="^[0-9]"
              min="1"
              step="1"
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <i className="fa-solid fa-backward"></i>
          </button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <i className="fa-solid fa-caret-left"></i>
          </button>

          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <i className="fa-solid fa-caret-right"></i>
          </button>
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            <i className="fa-solid fa-forward"></i>
          </button>
        </div>
      </div>
    </>
  );
}
export default function TableView(props) {
  return <TableComponent columns={props.columnsData} data={props.tableData} />;
}
