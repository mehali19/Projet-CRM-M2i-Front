import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  public version: BehaviorSubject<any>;

  constructor() {
    this.version = new BehaviorSubject<any>(1);

    console.log(this.version);
  }
}
