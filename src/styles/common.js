'use strict';

var React = require('react-native');
import * as Global from '../modules/global';
var {
    StyleSheet,
} = React;

module.exports =  StyleSheet.create({
	container: {
        backgroundColor: '#ffffff',
    },
    item_center:{
        alignItems:"center",
        justifyContent:"center",
    },
    item_left:{
        alignItems:"flex-start",
        justifyContent:"flex-start",
    },
    row_start:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    row_start_s:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },    
    row_center:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    row_end:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    row_space_between:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },    
    row_space_between_s:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',
    },        
    column_center:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    column_start:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-start',
    },
    column_start_s:{
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    ml_5:{
        marginLeft:5,
    },        
    ml_10:{
        marginLeft:10,
    },    
    pl_10:{
        paddingLeft:10,
    },    

    mg_l_5:{
        marginLeft:5,
    },
    mr_2:{
        marginRight:2,
    },    
    mr_5:{
        marginRight:5,
    },
    mr_30:{
        marginRight:30,
    },    
    mt_5:{
        marginTop:5,
    },    
    mt_20:{
        marginTop:20,
    },
    mb_30:{
        marginBottom:20,
    },    
    mb_30:{
        marginBottom:30,
    },    
    mb_50:{
        marginBottom:50,
    },
    shadow1: Global.elevationShadowStyle(5),
    shadow2: Global.elevationShadowStyle(10),
    shadow3: Global.elevationShadowStyle(20),
    f_15:{
        fontSize: 15
    },
    f_20:{
        fontSize: 17,
        fontWeight:'bold',
    },
    f_25:{
        fontSize: 25,
        fontWeight:'bold',
    },    
    f_30:{
        fontWeight: "bold",
        fontSize: 30
    },    
    c_dark_yellow:{
        color:"#c9aa17",
    },

    c_blue:{
        color:"#00AFF3",
    },
    c_white:{
        color:'white',
    },
    c_light_black_1:{
        color:'#4b4f41',
    },        
    c_light_black:{
        color:'#2f4046',
    },    
    c_dark_blue:{
        color:"#0063BF"
    },
    align_flex_start:{
        alignItems:'flex-start',
    },
    justify_start:{
        justifyContent:'flex-start',
    },
    me_flex_start:{
        alignSelf:'flex-start',
    },    
    me_flex_end:{
        alignSelf:'flex-end',
    },
});