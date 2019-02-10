import React from "react"

const content = {
  table: {
    head: [
      '',
      'Pair',
      'Coin',
      'Last price',
      'Changes by 24hours',
      'Max by 24hours',
      'Min by 24hours',
      'daily trading volume'
    ],
    body: [
      {
        pair: 'ETH/BTC',
        coin: 'Etherium',
        lastPrice: {
          main: '0.033557',
          second: '$120.90'
        },
        changes: {
          value: '-1.23%',
          isPositive: false
        },
        maxPrice: '0.034131',
        minPrice: '0.033076',
        tradingVolume: '7,620.64170095'
      }
    ]
  }
}

export default content
