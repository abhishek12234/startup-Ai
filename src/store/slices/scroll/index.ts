import { combineReducers } from '@reduxjs/toolkit'
import scroll, {ScrollRefs} from './scrollSlice'

const reducer = combineReducers({
    scroll,
})

export type ScrollState = {
    scroll: ScrollRefs
}

export * from './scrollSlice'

export default reducer
