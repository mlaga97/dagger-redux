function responseUpdate(event) {
  // Update State
  this.setState(prevState => ({
    ...prevState,
    response: {
      ...prevState.response,
      [event.class]: {
        ...prevState.response[event.class],
        [event.name]: event.value,
      },
    },
  }));
}

export default responseUpdate;
