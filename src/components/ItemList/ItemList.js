import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import styles from './ItemList.module.css'

const ItemList = ({ items, onClickDone,  onClickDelete }) => (<ul className={styles.item_list}>
  {items.map(item => <li key={item.id}>
    <Item 
      value={item.value}
      isDone={item.isDone}
      onClickDone={onClickDone}
      id={item.id}
      onClickDelete={onClickDelete}
    />
  </li>)}
</ul>);

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default ItemList;