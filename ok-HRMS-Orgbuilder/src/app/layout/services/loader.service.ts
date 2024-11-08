import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  // Start the loader
  show() {
    this.isLoadingSubject.next(true);
  }

  // Stop the loader
  hide() {
    this.isLoadingSubject.next(false);
  }
}
