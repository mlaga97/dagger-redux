function selectorUpdate(event) {
  const { name, checked } = event.target;

  this.setState(prevState => ({
    ...prevState,
    selected: {
      ...prevState.selected,
      [name]: checked,
    },
  }));
}

export default selectorUpdate;
