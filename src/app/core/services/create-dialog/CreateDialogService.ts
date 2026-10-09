import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreateDialogService {

  private actionSubject =
    new Subject<string>();

  action$ =
    this.actionSubject.asObservable();

  open(type: string): void {

    this.actionSubject.next(type);

  }

}
