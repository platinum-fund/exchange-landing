import React from 'react'

const TableHead = ({ content }) => (
  <thead className="table__head">
    <tr className="table__row">
      {content.map(name => (
        <th className="table__cell">
          {name}
        </th>
      ))}
    </tr>
  </thead>
)

export default TableHead
