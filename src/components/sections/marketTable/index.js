import React from 'react'
import content from './content'
import TableHead from './TableHead'
import TableBodyRow from './TableBodyRow'

let fakeTableBody = []
for (let i = 0; i < 30; i++) {
  fakeTableBody.push(content.table.body[0])
}

const MarketTable = () => (
  <section className="section section_market-table">
    <div className="wrapper_section-content">
      <div className="wrapper_market-table">
        <table className="table_theme_market">
          <TableHead content={content.table.head} />
          <tbody className="table__body">
          {fakeTableBody.map(row => (
            <TableBodyRow content={row} />
          ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
)

export default MarketTable
