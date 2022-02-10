import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginModel } from 'src/app/Shared/login-model.model'
import { FormBuilder, FormGroup, Validators,FormsModule,ReactiveFormsModule } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class LoginAuthenticationService {
    private currentUserSubject: BehaviorSubject<LoginModel>;
    public currentUser: Observable<LoginModel>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<LoginModel>(JSON.parse(localStorage.getItem('currentUser')??'{}'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): LoginModel {
        return this.currentUserSubject.value;
    }

    getUserName(): string
    {
        console.log(this.currentUserSubject.value)
       return this.currentUserSubject.value + ""
    }

    baseUrl="https://localhost:5001/api/Authenticate/Login";

    login(userName: string, password: string) {
        return this.http.post<any>(this.baseUrl, { userName, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user.currentUser));
                this.setToken(JSON.stringify(user.token));
                this.currentUserSubject.next(user.currentUser);
                console.log(user.currentUser);
                console.log(user.token);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
    }

    setToken(value: string)
    {
        localStorage.setItem('token', value);
    }

    public getToken()
    {
        return localStorage.getItem('token');
    }

    public isLoggedIn() {
        if(this.getToken()) {
            return true;
        }
        return false;
    }
}