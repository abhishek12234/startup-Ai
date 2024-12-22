import ApiService from './ApiService'

export async function apiGetCourses<T>() {
    return ApiService.fetchData<T>({
        url: 'courses/',
        method: 'get',
    })
}
export async function apiGetCourseDetail<T>(courseId: string) {
    return ApiService.fetchData<T>({
        url: `courses/${courseId}`, // Assuming the API follows RESTful conventions
        method: 'get',
    });
}
export async function apiGetPurchasedCourses<T>() {
    return ApiService.fetchData<T>({
        url: 'coursepurchase/user',
        method: 'get',
    })
}
export async function apiGetPurchasedCourseDetail<T>(courseId: string) {
    return ApiService.fetchData<T>({
        url: `courses/user/${courseId}`, // Assuming the API follows RESTful conventions
        method: 'get',
    });
}

export async function apiPostPurchasedCourse<T>(courseId: string) {
    return ApiService.fetchData<T>({
        url: `coursepurchase/${courseId}`,
        method: 'post',
    })
}