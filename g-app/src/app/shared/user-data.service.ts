 
import { Observer } from 'rxjs/Observer';
import { StorageService } from 'src/app/shared/Storage.service';
import { Observable } from 'rxjs/Observable';
import { User } from './../models/User';
import { Injectable } from '@angular/core';

const USER_KEY = "user";
@Injectable()

export class UserDataService { 
   
    private storage: Storage;
    private user: User;
    private subscriptionObservable: Observable<User>;
    private subscribers: Array<Observer<User>>= new Array<Observer<User>>();

    constructor(private storageService: StorageService) { 
        this.storage = this.storageService.get();  
        this.subscriptionObservable = new Observable<User>((observer : Observer<User>)=>{
            this.subscribers.push(observer);
            observer.next(this.retrieve());
            return () => {
                this.subscribers = this.subscribers.filter((obj)=> obj!==observer);
            };
        }); 
    }
    //Get user from Local Storage
    public getUser() : Observable<User>{
        return this.subscriptionObservable;
    }
    
    //Save user for use in other places 
    public saveUser(user: User): void{
        this.storage.setItem(USER_KEY, JSON.stringify(user));
    }

    public retrieve(): User {
        const _user = new User();
        const storedUser = this.storage.getItem(USER_KEY);
        if(storedUser){
            _user.UpdateUser(JSON.parse(storedUser));
        }
        return _user;
    }
    dispatch(user: User): void {
        this.subscribers.forEach((sub)=>{
            try{
                sub.next(user);
            }catch(e){

            }
        })
    }

    //Empty User On Log Out
    public emptyUser(): void{
        const emptyUser = new User();
        this.saveUser(emptyUser);
        this.dispatch(emptyUser);
    }
    
}
