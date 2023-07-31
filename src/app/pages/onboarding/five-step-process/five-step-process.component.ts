import { Component } from '@angular/core';

@Component({
  selector: 'app-five-step-process',
  templateUrl: './five-step-process.component.html',
  styleUrls: ['./five-step-process.component.scss']
})
export class FiveStepProcessComponent {
  events!: any[];
  width: string = '20%';
  currentTab: number = 1;
  previousTab!: number;
  containerWidth: string = '20%';
  constructor() {
    
    this.events = [
      { status: 'Upload file', class: 'step01', active: 'active', icon: 'fa-solid fa-circle' },
      { status: 'Map Fields', class: 'step02', active: '' },
      { status: 'Process file', class: 'step03', active: '' },
      { status: 'Get Contacts', class: 'step04', active: '' }
    ]
  }


  switchTab(offset: number) {
    const newTab = this.currentTab + offset;

    if (newTab >= 1 && newTab <= 5) {
      this.previousTab = this.currentTab;
      this.currentTab = newTab;
      this.updateContainerWidth(offset);
    }
  }

  updateContainerWidth(offset: number) {
    const currentWidth = parseInt(this.containerWidth, 10);
    const newWidth = currentWidth + offset * 20;
    this.containerWidth = `${newWidth}%`;
  }

  onFileSelected(value:any) {
    
  }
}
