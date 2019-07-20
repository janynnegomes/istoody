import { Component, OnInit } from '@angular/core';
import {Topic} from '../shared/topic';
import {TopicService} from '../shared/topic.service';
import {TopicDataService} from '../shared/topic-data.service';
import { Observable } from 'rxjs';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  topics: Observable<any>;
  icons = {faEdit, faTrash};

  constructor( private topicService: TopicService, private topicDataService: TopicDataService) { 

   }

  ngOnInit() {

    this.topics =  this.topicService.getAll();

  }

  delete (key: string)
  {
    this.topicService.delete(key);

  }

  edit( topic: Topic, key: string){
    this.topicDataService.changeTopic(topic,key);

  }

}
