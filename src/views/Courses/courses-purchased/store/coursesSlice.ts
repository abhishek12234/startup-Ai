import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { apiGetCourses,apiGetCourseDetail } from '@/services/CoursesServices'

export type Lesson = {
    uid: string; // UUID as a string
    course_id: string; // UUID as a string
    lesson_name: string;
    lesson_description: string;
    created_at: Date; // JavaScript Date object
    updated_at: Date; // JavaScript Date object
  };
  
  // Define CourseObject type
  export type CourseObject = {
    uid: string; // UUID as a string
    title: string;
    description: string;
    duration: string; // Specify the format if required (e.g., ISO 8601 duration)
    enrolled_students: number;
    language: string;
    created_at: Date; // JavaScript Date object
    updated_at: Date; // JavaScript Date object
    lessons: Array<Lesson>; // Array of Lesson objects
  };

type AllCoursesData = CourseObject[]

export type CourseState = {
    loading: boolean
    coursesData: AllCoursesData
    courseDetail:any
    error:any
}

type GetCoursesDataResponse = AllCoursesData
type GetCourseDetailResopnse=CourseObject

export const SLICE_NAME = 'course_all'


export const getCourseDetail = createAsyncThunk(
    SLICE_NAME + '/getCourseDetail',
    async (courseId: string) => {
        const response = await apiGetCourseDetail<GetCourseDetailResopnse>(courseId)
        
        return response.data;
    }
)

const initialState: CourseState = {
    loading: true,
    coursesData: [],
    courseDetail:null,
    error:null
  
}

const courseSlice = createSlice({
    name: `${SLICE_NAME}/state`,
    initialState,
    reducers: {
     
        setCoursesData: (state, action) => {
            state.coursesData = action.payload
        },
        findCourseById: (state, action) => {
            const courseId = action.payload;
            console.log(state.coursesData)
            const foundCourse = state.coursesData.find((course:any) => course.uid == courseId);
            if (foundCourse) {
                state.courseDetail = foundCourse;
                state.error = null;
            } else {
                state.courseDetail = null;
                state.error = `Course with ID ${courseId} not found.`;
            }
        },
    },
    extraReducers: (builder) => {
        builder
    
            .addCase(getCourseDetail.fulfilled, (state, action) => {
                state.courseDetail = action.payload; // Store the fetched course detail
                state.loading = false;
              })
              .addCase(getCourseDetail.pending, (state) => {
                state.loading = true;
              })
              .addCase(getCourseDetail.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to fetch course details';
                state.loading = false;
              });
    },
})

export const { setCoursesData,findCourseById} = courseSlice.actions

export default courseSlice.reducer
