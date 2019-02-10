import React from 'react'

const TableBodyRow = ({ content }) => (
  <tr className="table__row">
    <td className="table__cell">
      <img className="favourite" src={require('src/images/icons/star.svg')}/>
    </td>
    <td className="table__cell">
      {content.pair}
    </td>
    <td className="table__cell">
      {content.coin}
    </td>
    <td className="table__cell">
      <div className="price-wrapper">
        <p className="main-price _negative">
          {content.lastPrice.main}
        </p>
        <p className="second-price">
          {content.lastPrice.second}
        </p>
      </div>
    </td>
    <td
      className={`table__cell price_difference ${content.changes.isPositive ? '_positive' : '_negative'}`}
    >
      {content.changes.value}
    </td>
    <td className="table__cell">
      {content.maxPrice}
    </td>
    <td className="table__cell">
      {content.minPrice}
    </td>
    <td className="table__cell">
      {content.tradingVolume}
    </td>
  </tr>
)

export default TableBodyRow
