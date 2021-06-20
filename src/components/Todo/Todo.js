import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';


class Todo extends React.Component {
  state = {
    items:[
      {
        value : 'Написать приложение',
        isDone: true,
        id: 1
      },
      {
        value : 'Закончить блок react',
        isDone: false,
        id: 2
      },
      {
        value : 'Выучить английский',
        isDone: false,
        id: 3
      },
      {
        value : 'Приступить к следующему блоку',
        isDone: false,
        id: 4
      }
    ],
    count: 4,
    isError: false
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      };

      return newItem;
    });

    this.setState({ items: newItemList });
  };

  onClickDelete = id => {
    const newItemList = this.state.items.filter(item => item.id !== id);
    this.setState({ items: newItemList });
  };

  onClickAdd = value => {
    if (value !== '') {
      this.setState(state => ({
        items: [
          ...state.items,
          {
            value,
            isDone: false,
            id: state.count + 1
          }
        ],
        count: state.count + 1,
        isError: false
      }));
    } else {
      this.setState(state => ({ isError: true }));
    };
  };

  render() {
    const casesCount = this.state.items.filter(item => item.isDone === false);

    return(
      <div className={styles.wrap}>
        <h1>Список дел:</h1>
        <InputItem onClickAdd={this.onClickAdd} isError={this.state.isError} />
        <ItemList 
          items={this.state.items}
          onClickDone={this.onClickDone}
          onClickDelete={this.onClickDelete}
        />
        <Footer casesCount={casesCount.length} />
      </div>
    );
  };
};

export default Todo; 