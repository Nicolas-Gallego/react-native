import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { SvgUri } from "react-native-svg";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    fetch(`http://restcountries.eu/rest/v2/all`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({ countries: response });
      });
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.countries}
          renderItem={({ item }) => (
            <>
              <Text style={styles.liste}>
                {item.name} - {item.capital}
              </Text>
              <SvgUri style={styles.img} width="100" height="100" resizeMode="center" uri={`${item.flag}`} />
            </>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  liste: {
    marginTop: 32,
    marginBottom: 8,
  },
  img: {
     
  }
})


