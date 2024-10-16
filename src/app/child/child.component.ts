import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() data!: number;
  @Input() message!: string;
  @Output() childData = new EventEmitter<string>();
  @Output() messageChange = new EventEmitter<string>();
  hello = () => {
    console.log(this.data);
  };

  addOutputData = (value: string): void => {
    this.childData.emit(value);
  };

  handleMessage = (message: string): void => {
    this.message = message;
    this.messageChange.emit(this.message);
  };
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['message'].currentValue);
    if (changes['message'].currentValue) {
      this.message = changes['message'].currentValue;
      this.messageChange.emit(this.message);
    }
    // if(changes.data){
    //   this.childData.next(changes.data.currentValue);
    // }
    // if(changes.message){
    //   console.log(changes.message.currentValue);
    // }
  }
}
