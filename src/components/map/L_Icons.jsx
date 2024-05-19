import { Icon } from 'leaflet';
import pub_img from '@/../public/ico/sippy.svg'
import house_img from '@/../public/ico/house.svg'
import party_img from '@/../public/ico/party.svg'
import film_img from '@/../public/ico/film.svg'
import sport_img from '@/../public/ico/sport.svg'
import add_img from '@/../public/ico/add.svg'

export default class LeafletCustomIcons {

    static async getNearestPoints(object) {
        return await axios.post(`${HOST}/point/nearest`, object)
    }

    static pub_icon = new Icon({
        iconUrl: pub_img.src,
        iconSize: [32, 32]
    });

    static house_icon = new Icon({
        iconUrl: pub_img.src,
        iconSize: [32, 32]
    });

    static party_icon = new Icon({
        iconUrl: party_img.src,
        iconSize: [32, 32]
    });

    static film_icon = new Icon({
        iconUrl: film_img.src,
        iconSize: [32, 32]
    });

    static sport_icon = new Icon({
        iconUrl: sport_img.src,
        iconSize: [32, 32]
    });

    static add_icon = new Icon({
        iconUrl: add_img.src,
        iconSize: [32, 32]
    });

// Все что добавлено тут нужно добавить и в map.jsx (iconPairs)

   


}
