import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { CharacterList } from '../components';
// import actions
import { getCharacters } from '../actions';

class CharacterListView extends React.Component {
  componentDidMount() {
    // call our action
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <h2>Loading...</h2>
    }
    return (
      <div className='CharactersList_wrapper'>
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  };
};
export default connect(
  mapStateToProps,
  /* mapStateToProps replaces null here */ {
    getCharacters
    /* action creators go here */
  }
)(CharacterListView);
