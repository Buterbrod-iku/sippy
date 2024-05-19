import axios from "axios";
import {HOST} from "./const/host"

export default class Points {

    static async getNearestPoints(object) {
        return await axios.post(`${HOST}/point/nearest`, object)
    }

}
