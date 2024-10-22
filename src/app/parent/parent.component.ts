import { Component, ContentChild, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonTmplComponent } from '../button-tmpl/button-tmpl.component';
import { SharedModule } from '../shared/shared.module';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule, CommonModule, SharedModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  @ViewChild(ChildComponent) child!: ChildComponent;
  @ContentChild(ChildComponent) contentChild!: ChildComponent;

  parentData: number = 0;

  message: string = 'Please input';

  outputData: string[] = ['cat', 'dog'];

  addOutputData = (animal: string): void => {
    this.outputData.push(animal);
  };
  updateMessage = (): void => {
    this.message = this.message;
  };

  ngAfterViewInit() {
    console.log(this.child.hello());
  }
}
