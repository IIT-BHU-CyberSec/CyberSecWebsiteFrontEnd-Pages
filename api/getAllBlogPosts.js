import axios from "axios"

import apiBaseUrl from "../utils/apiBaseUrl.js"

export default async function () {
    try {
        const response = await axios(`https://awesome-northcutt-063861.netlify.app/get-all-blog-posts`)
        return response.data
    } catch (error) {
        return { getDataError: true }
    }
}