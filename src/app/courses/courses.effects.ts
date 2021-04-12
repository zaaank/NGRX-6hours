import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs/operators";
import { CourseActions } from "./action-types";
import { allCoursesLoaded } from "./course.actions";
import { CoursesHttpService } from "./services/courses-http.service";

@Injectable()
export class CoursesEffects {

  loadCourses$ = createEffect(
    ()=> this.actions$
    .pipe(
      ofType(CourseActions.loadAllCourses),
      concatMap(action => this.coursesHttpService.findAllCourses()),
      map(courses => CourseActions.allCoursesLoaded({courses}))
    )
  )
  constructor(private actions$: Actions, private coursesHttpService: CoursesHttpService){}
}
