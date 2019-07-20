import { Injectable } from '@angular/core';
import { Topic } from './topic';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {

    this.itemsRef = db.list('topic');
    
   }

  insert( topic: Topic){

    this.itemsRef.push(topic)
    .then((result: any) => 
    {
      console.log(result.key)
    });

  }

  update( topic: Topic, key: string){

    this.itemsRef.update(key,topic)
    .catch((error: any) => 
    {
      console.error(error)
    });

  }

  getAll(){

    return this.itemsRef
      .snapshotChanges()
      .pipe(
        map( changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
          })
      );   

  }

  delete(key: string){
    this.db.object(`topic/${key}`).remove();

  }
}
