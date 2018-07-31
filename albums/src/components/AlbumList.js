import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = {albums: []};


    componentWillMount() {
        axios.get('http://rallyconding.herokuapp.com/api/music_albums')
            .then(reponse => this.setState({ albums : reponse.data }));
    }

    renderAlbums(){
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album}/>
        );
    }

    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        )
    }
}

export default AlbumList;
