import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Item.module.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton'

class Item extends React.Component {
  componentDidMount() {
    this.timerId = setInterval(() => console.log('Утечка'), 1000);
  };

  componentWillUnmount() {
    clearInterval(this.timerId);
  };

  render() {
    const { value, isDone, onClickDone, id, onClickDelete} = this.props;

    return(
      <div className={styles.item}>
        <FormControlLabel
          control={
            <Checkbox checked={isDone}
              value='checkedA'
              color='primary'
              onClick={() => onClickDone(id)}
            />
          }
          label={
            <span className={
              classnames({
                [styles.item]: true,
                [styles.done]: isDone
              })
            }>
              { value }
            </span>
          }
        />
        <div onClick={() => onClickDelete(id)}>
          <IconButton aria-label='delete'>
            <DeleteIcon fontSize='small' />
          </IconButton>
        </div>
      </div>
    );
  };
};

Item.defaultProps = {
  value: 'Задача не найдена'
};

Item.propTypes = {
  value: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired
 };

export default Item;