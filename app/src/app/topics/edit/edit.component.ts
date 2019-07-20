import { Component, OnInit } from '@angular/core';
import {Topic} from '../shared/topic';
import {TopicService} from '../shared/topic.service';
import {TopicDataService} from '../shared/topic-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  title: string = "Topic";
  subtitle: string = "Type the topics details to track your progress";
   topic: Topic;
   key: string = "";

  constructor( private topicService: TopicService, private topicDataService: TopicDataService) { 

  }

  ngOnInit() {

    this.topic = new Topic();

    this.topicDataService.currentTopic.subscribe(data => {

      if(data.topic && data.key)
      {
        this.topic = new Topic();
        this.topic.name = data.topic.name;
        this.topic.position = data.topic.position;
        this.topic.done = data.topic.done;
        this.key = data.key;
      }

    });


  }

  onSubmit(){

    if(this.key)
    {
      this.topicService.update(this.topic, this.key);
    }
    else{
      this.topicService.insert(this.topic);
    }

    this.topic = new Topic();
    
  }

}
