import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on, select } from "@ngrx/store";
import { CourseActions } from "../action-types";
import { compareCourses, Course } from "../model/course";

export interface CoursesState extends EntityState<Course> {
  allCoursesLoaded: boolean
}

export const adapter = createEntityAdapter<Course>({
  sortComparer: compareCourses, //passing custom function to sort
 // selectId: course => course.courseId

});


export const initialCoursesState = adapter.getInitialState({
  allCoursesLoaded: false
});


export const coursesReducer = createReducer(

  initialCoursesState,

  on(CourseActions.allCoursesLoaded,
  (state, action) => adapter.addAll(action.courses, state)) // ko se coursi naložijo v statem naredimo adaptor in notri dodamo vse course

);

 export const {selectAll} =  adapter.getSelectors(); //exportamo comando selectAll iz adapterja ki nam omogoča dostop do coursov
