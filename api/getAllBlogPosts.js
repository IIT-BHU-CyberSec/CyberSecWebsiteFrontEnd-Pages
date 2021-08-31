import axios from "axios"

import apiBaseUrl from "../utils/apiBaseUrl.js"

export default async function () {
    try {
        const response = await axios(`https://iitbhucybersecweb-frontendapi.herokuapp.com/get-all-blog-posts`)
        return response.data
    } catch (error) {
        return { getDataError: true }
    }
}