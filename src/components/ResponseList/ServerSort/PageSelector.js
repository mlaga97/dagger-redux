// Library imports
import React from 'react';
import { Button } from 'react-bootstrap';

class PageSelector extends React.Component {
  setPage = (page) => {
    if (page < 1) {
      page = 1;
    }

    if (page > this.props.maxPage) {
      page = this.props.maxPage;
    }

    this.props.onUpdate({
      ...this.props.parameters,
      page,
    });
  }

  firstPage = () => this.setPage(1);
  prevPage_10 = () => this.setPage(this.props.parameters.page - 10);
  prevPage = () => this.setPage(this.props.parameters.page - 1);
  nextPage = () => this.setPage(this.props.parameters.page + 1);
  nextPage_10 = () => this.setPage(this.props.parameters.page + 10);
  lastPage = () => this.setPage(this.props.maxPage);

  render() {
    const { parameters, maxPage } = this.props;
    const { page } = parameters;

    return (
      <div className='page-selector-wrapper'>
        <Button className='btn-page-selector btn-page-back-first' onClick={this.firstPage} disabled={parseInt(page, 10) === 1 ? true : false} ></Button>
        <Button className='btn-page-selector btn-page-back-ten' onClick={this.prevPage_10}  disabled={(parseInt(page, 10) - 10) < 1 ? true : false} ></Button>
        <Button className='btn-page-selector btn-page-back-one' onClick={this.prevPage}  disabled={parseInt(page, 10) === 1 ? true : false} ></Button>
        <span> Page <span className='feedback'>{page}</span> of <span className='feedback'>{maxPage}</span> </span>
        <Button className='btn-page-selector btn-page-forward-one' onClick={this.nextPage} disabled={parseInt(page, 10) === parseInt(maxPage, 10) ? true : false} ></Button>
        <Button className='btn-page-selector btn-page-forward-ten' onClick={this.nextPage_10} disabled={(parseInt(page, 10) + 10) > parseInt(maxPage, 10) ? true : false} ></Button>
        <Button className='btn-page-selector btn-page-forward-last' onClick={this.lastPage}  disabled={parseInt(page, 10) === parseInt(maxPage, 10) ? true : false} ></Button>
      </div>
    );
  }
}

export default PageSelector;
