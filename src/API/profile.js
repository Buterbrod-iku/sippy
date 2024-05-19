import axios from "axios";
import {HOST} from "./const/host"

export default class Profile {

    static async sendAuth(object) {
        return await axios.post(`${HOST}/login`, object)
    }


    static async sendNewUser(object) {
        return await axios.post(`${HOST}/registration`, object)
    }
}
