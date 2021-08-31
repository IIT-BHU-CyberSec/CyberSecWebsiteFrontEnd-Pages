import axios from "axios"

import apiBaseUrl from "../utils/apiBaseUrl.js"

export default async function () {
    try {
        const response = await axios("https://iitbhucybersecweb-frontendapi.herokuapp.com/posts/get-five-newest-posts")
        return response.data
    } catch (error) {
        return { getDataError: true }
    }
}