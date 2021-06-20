import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

class InputItem extends React.Component {
  state = {
    inputValue: ''
  };

  onButtonClick = () => {
    this.setState({
      inputValue: ''
    });
    this.props.onClickAdd(this.state.inputValue);
  };

  render() {
    const isError = this.props.isError;
    let textField;

    if (isError) {
      textField = <TextField
        error
        id='outlined-error'
        label='Поле должно быть заполнено!'
        margin='ense'
        defaultValue=' '
        variant='outlined'
        className={makeStyles.textField}
        value={this.state.inputValue}
        onChange={event => this.setState({ inputValue: event.target.value })}
      />
    } else {
      textField = <TextField
        id='outlined-dense'
        label='Новое дело'
        margin='ense'
        variant='outlined'
        className={styles.input_field}
        value={this.state.inputValue}
        onChange={event => this.setState({ inputValue: event.target.value })}
      />
    };

    return (
      <div className={styles.input}>
        <div className={styles.input_wrap}>
          {textField}
        </div>
        <Button
          variant='contained'
          color='primary'
          className={styles.button}
          onClick={this.onButtonClick}
        >
          <strong>Add</strong>
        </Button>
      </div>
    );
  };
};

InputItem.propTypes = {
  onClickAdd: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired
}

export default InputItem;