import * as axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '6d37f9b3-5211-4067-a35f-17f090789f82'}
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(userId) {
        return axiosInstance.post(`follow/${userId}`).then(response => response.data.resultCode)
    },
    unfollowUser(userId) {
        return axiosInstance.delete(`follow/${userId}`).then(response => response.data.resultCode)
    }
}

export const profileAPI ={
    getProfile(userId) {
        return axiosInstance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return axiosInstance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return axiosInstance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    authUser() {
        return axiosInstance.get(`auth/me`)
    },
}
