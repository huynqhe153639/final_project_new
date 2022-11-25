import { EventEmitter, Injectable } from '@angular/core';
import { UserDto } from '@shared/service-proxies/service-proxies';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
 
@Injectable() 
export class DataService {
    user = new EventEmitter<UserDto>();
}