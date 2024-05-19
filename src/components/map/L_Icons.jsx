import { Icon } from 'leaflet';

export default class LeafletCustomIcons {

    static async getNearestPoints(object) {
        return await axios.post(`${HOST}/point/nearest`, object)
    }

//     static pub_icon = L.icon({
//         // iconRetinaUrl: require('@/../public/image/developers/Dmitry.jpg'),
//         iconUrl: require('@/../public/ico/happy.png')
//         //shadowUrl: require('leaflet/dist/images/marker-shadow.png')
//    }) 
    static pub_icon = new Icon({
        iconUrl: require('@/../public/ico/happy.png'),
        iconSize: [44, 44]
    });

}
