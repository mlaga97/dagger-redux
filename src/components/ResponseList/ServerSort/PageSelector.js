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
    const { page, count } = this.props.parameters;

    return (
      <div>
        <Button onClick={this.firstPage}>&lt;&lt;&lt;</Button>
        <Button onClick={this.prevPage_10}>&lt;&lt;</Button>
        <Button onClick={this.prevPage}>&lt;</Button>
        <span> Page {page} of {maxPage} </span>
        <Button onClick={this.nextPage}>&gt;</Button>
        <Button onClick={this.nextPage_10}>&gt;&gt;</Button>
        <Button onClick={this.lastPage}>&gt;&gt;&gt;</Button>
      </div>
    );
  }
}

export default PageSelector;
