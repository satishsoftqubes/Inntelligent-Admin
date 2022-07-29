import Table from "react-bootstrap/Table";
import { usePagination, useSortBy, useTable } from "react-table";
import BothSort from "../../assets/Images/Icons/bothSort.svg";
import SortDown from "../../assets/Images/Icons/sortDown.svg";
import SortUp from "../../assets/Images/Icons/sortUp.svg";

function TableComponent({ columns, data }) {
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
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );
  return (
    <>
      <Table responsive className="table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, keyTr) => (
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
            Page
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
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

        <div>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <i className="fa-solid fa-backward"></i>
          </button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <i className="fa-solid fa-caret-left"></i>
          </button>
          <span>
            {/* Go to page:{
              ' '} */}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              placeholder="Go to page"
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
