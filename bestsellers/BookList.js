import React, { Component } from "react";

import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator } from "react-native";

import BookItem from "./BookItem";
import NYT from "./NYT";
import NAVER from './NAVER';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [], 
      refreshing: false,
      loadingMore: false,
      lastPage: 1
    };
  }

  componentDidMount() {
    this._refreshData();
  }

  _renderItem = ({ item }) => {
    return (
      <BookItem
        coverURL={item.image}
        title={item.title}
        author={item.author}
      />
    );
  };

  _addKeysToBooks = books => {
    // Takes the API response from the NYTimes,
    // and adds a key property to the object
    // for rendering purposes
    return books.map(book => {
      return Object.assign(book, { key: book.isbn });
    });
  };

  _refreshData = () => {
    this.setState({
      refreshing: true
    });

    NAVER.fetchBooks().then(books => {
      this.setState({ 
        data: this._addKeysToBooks(books),
        refreshing:false,
        lastPage: 1
      });
    });
  };

  _onEndReached = ({distanceFromEnd}) => {
    console.log(distanceFromEnd);
    if(distanceFromEnd > -50){ //footer
      this.setState({
        loadingMore: true
      });
    
      NAVER.fetchBooks(this.state.lastPage+1).then(books => {
        console.log(books);
        this.setState( state => ({
          data: state.data.concat(this._addKeysToBooks(books)),
          lastPage: state.lastPage+1,
          loadingMore: false
        })); 
      });
    }
  }

  _renderFooter = () => {
    return <View style={{height:50, flex:1, alignItems:'center', justifyContent:'center'}}>
      <ActivityIndicator animating={this.state.loadingMore} size="small"/>
    </View>
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.data} 
          renderItem={this._renderItem} 
          onEndReached={this._onEndReached}
          onRefresh={this._refreshData}
          refreshing={this.state.refreshing}
          onEndReachedThreshold={0.3}
          ListFooterComponent={this._renderFooter}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({ container: { flex: 1, paddingTop: 22 } });

export default BookList;
