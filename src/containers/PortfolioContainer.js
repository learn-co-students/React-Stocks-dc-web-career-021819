import React, { Component } from 'react';
import Stock from '../components/Stock'
import { Badge } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  stockItem: {
    textAlign: "left",
    width: "100%",
    marginLeft: "-25%",
    marginTop: "5%"
  },
})

class PortfolioContainer extends Component {


  render() {
    const { classes, stocks, stockClickHandler} = this.props;
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            stocks.map(stock =>
              <div key={stock.id}>
                <Badge badgeContent={stock.count} color="primary" className={classes.stockItem} />
                  <Stock stockClickHandler={stockClickHandler} stockObj={stock} />
              </div>
            )
          }
      </div>
    );
  }

}

export default withStyles(styles)(PortfolioContainer);
