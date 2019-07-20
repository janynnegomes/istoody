import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Topic} from './topic';

@Injectable({
  providedIn: 'root'
})
export class TopicDataService {

  private topicSource = new BehaviorSubject({ topic: null, key: ""});
  currentTopic = this.topicSource.asObservable();

  constructor() { }


  changeTopic( _topic: Topic, _key: string){

    this.topicSource.next({topic: _topic, key: _key});

  }
}
