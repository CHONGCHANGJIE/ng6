/*
 * create function to create mock observable data.
 */

import { Observable } from 'rxjs';

export class ObservableCreator {
    public static createFromData(data: any) {
        let observable = new Observable((observer: any) => {
            observer.next(data);
            observer.complete();
        });
        return observable;
    }
}

