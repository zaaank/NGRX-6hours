

import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../model/course";
import {map} from "rxjs/operators";
import {Lesson} from "../model/lesson";
import { environment } from '../../../environments/environment';


@Injectable()
export class CoursesHttpService {

    constructor(private http:HttpClient) {

    }

    findAllCourses(): Observable<Course[]> {
        return this.http.get(environment.apiUrl+'/api/courses')
            .pipe(
                map(res => res['payload'])
            );
    }

    findCourseByUrl(courseUrl: string): Observable<Course> {
      return this.http.get<Course>(environment.apiUrl+`/api/courses/${courseUrl}`);
    }

    findLessons(
        courseId:number,
        pageNumber = 0, pageSize = 3):  Observable<Lesson[]> {

        return this.http.get<Lesson[]>(environment.apiUrl+'/api/lessons', {
            params: new HttpParams()
                .set('courseId', courseId.toString())
                .set('sortOrder', 'asc')
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        });
    }


    saveCourse(courseId: number | string, changes: Partial<Course>) {
        return this.http.put(environment.apiUrl+'/api/course/' + courseId, changes);
    }


}
