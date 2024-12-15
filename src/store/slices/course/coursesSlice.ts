import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { apiGetCourses,apiGetCourseDetail } from '@/services/CoursesServices'
import { apiGetPurchasedCourses,apiPostPurchasedCourse } from '@/services/CoursesServices'
import type { CommonProps, TypeAttributes } from '@/components/ui/@types/common'
import { Action } from 'history';


export type Lesson = {
    uid: string; // UUID as a string
    title: string; // UUID as a string
    description:string;
    md:string;
    
  };
  
  // Define CourseObject type
  export type CourseObject = {
    uid: string; // UUID as a string
    title: string;
    total_lessons:number; // Array of Lesson objects
    duration: string; // Specify the format if required (e.g., ISO 8601 duration)
    total_enrollments: number;
    cost:number;
    category:string;
    created_at: Date; // JavaScript Date object
    updated_at: Date; // JavaScript Date object
};

  export type CourseDetailObject={
    title: string;
    total_lessons:number; // Array of Lesson objects
    duration: string; // Specify the format if required (e.g., ISO 8601 duration)
    total_enrollments: number;
    description: string;
    category:string;
    teacher:string;
    cost:number;
    course_lessons: Array<Lesson>;

  }

type AllCoursesData = CourseObject[]

type CoursesDetailData = CourseDetailObject
export type CourseState = {
    loading: boolean;
    coursesData: AllCoursesData;
    purchasesCoursesData: any; // Corrected this line
    courseDetail: any;
    error: any;
    dialog:boolean;
    notification:Notification | null;
};

type GetCoursesDataResponse = AllCoursesData
type GetCourseDetailResopnse=CoursesDetailData
type GetPurchasedDataResopnse={ [key: string]: CourseObject }[]
type Notification = {
    type: TypeAttributes.Status,
    message: string
}

export const SLICE_NAME = 'courses'

export const getCoursesData = createAsyncThunk(
    SLICE_NAME + '/getCoursesData',
    async () => {
        const response = await apiGetCourses<GetCoursesDataResponse>()
        
        return response.data;
    }
)

export const getPurchasedCourseData = createAsyncThunk(
    SLICE_NAME + '/getPurchasedCourseData',
    async () => {
        const response = await apiGetPurchasedCourses<GetPurchasedDataResopnse>()
        
        return response.data;
    }
)

export const getCourseDetail = createAsyncThunk(
    SLICE_NAME + '/getCourseDetail',
    async (courseId: string) => {
        const response = await apiGetCourseDetail<GetCourseDetailResopnse>(courseId)
        
        return response.data;
    }
)
export const addPurchasedCourseData = createAsyncThunk(
    SLICE_NAME + '/addPurchasedCourseData',
    async (courseId: string) => {
        const response:any = await apiPostPurchasedCourse<GetCourseDetailResopnse>(courseId)
        
        return response.data.coursepurchase_course;
    }
)

const initialState: CourseState = {
    loading: true,
    coursesData: [],
    purchasesCoursesData:[],
    courseDetail:null,
    error:null,
    dialog:false,
    notification: null,
  
}

const courseSlice = createSlice({
    name: `courses`,
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
        setDialogBox:(state,action)=>{
            state.dialog = action.payload

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCoursesData.fulfilled, (state, action) => {
              
                state.coursesData = action.payload
                state.loading = false
            })
            .addCase(getCoursesData.pending, (state) => {
                state.loading = true
            })
            .addCase(getPurchasedCourseData.fulfilled, (state, action) => {
                              
                state.purchasesCoursesData = action.payload.map(item => item.coursepurchase_course)
                state.loading = false
            })
            .addCase(getPurchasedCourseData.pending, (state) => {
                                state.loading = true
                            })

            .addCase(addPurchasedCourseData.fulfilled, (state, action) => {
               
                state.purchasesCoursesData = [...state.purchasesCoursesData, action.payload]
                state.dialog=true
                state.loading = false
            })
            .addCase(addPurchasedCourseData.pending, (state) => {
                state.loading = true
            })
            .addCase(addPurchasedCourseData.rejected, (state, action) => {
                console.log(action.payload)
                state.notification = { type: 'danger', message: 'Ooop! Please try after sometime.' }
            })
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

export const { setCoursesData,findCourseById,setDialogBox} = courseSlice.actions

export default courseSlice.reducer
