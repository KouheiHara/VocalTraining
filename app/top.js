import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { movePage } from '../redux'
import { store } from '../redux'
import { 
    View,
    StyleSheet,
    Text,
    Image,
    FlatList,
    Dimensions,
    SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { TrainingIcon } from "../assets/icon";

const base_color = "#6495ed"

const FooterHeight = 62;
const WindowHeight = Dimensions.get('window').height;
const MainHeight = WindowHeight - 2*FooterHeight;
const MainFlex = Math.floor(MainHeight*10.0/FooterHeight)*0.1;

import Icon1 from '../assets/suisen.png'
import Icon2 from '../assets/kaeru.png'
import Icon3 from '../assets/kasa.png'
import Icon4 from '../assets/teruteru.png'

const DATA = [
    {
        id: '1',
        title: '枕草子',
        img: Icon1,
    },
    {
        id: '2',
        title: '竹取物語',
        img: Icon2,
    },
    {
        id: '3',
        title: '平家物語',
        img: Icon3,
    },
    {
        id: '4',
        title: '徒然草',
        img: Icon4,
    },
];

function Item({ title, img }) {
    return (
      <View style={styles.item}>
        <Text style={styles.item_title}>　{title}</Text>
        <Image
            style={styles.item_img}
            source={img}
            />
      </View>
    );
}

export class Top extends Component {
    constructor(props) {
        super(props);
    }
    pressIcon(name) {
    }
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.top_button}>
                    <Text style={styles.top_button_text}>練習方法はこちら</Text>
                    <Icon name="right"
                        color='#000000'
                        size={20}
                        onPress={() => this.pressIcon("training")} />
                </View>
                <SafeAreaView style={styles.top_listview}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <Item title={item.title} img={item.img}/>}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    top_button: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
    },
    top_button_text: {
        fontSize:18,
    },
    top_listview: {
        flex: MainFlex-1,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#f0f8ff',
        height: 140,
        marginVertical: 4,
        marginHorizontal: 16,
    },
    item_title: {
        flex: 1,
        fontSize: 25,
    },
    item_img: {
        flex: 1,
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
})

const mapStateToProps = state => ({
    // nameにjsonから取って来たデータを代入 
    name: state.user.name
})
  
const mapDispatchToProps = {
    // importしたactionCreator
    movePage
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Top)