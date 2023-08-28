import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data!: any[];
  clonedData: any;
  startIndex = -1;
  categories: any = [
    { label: 'Important', value: 'starred' },
    { label: 'Completed', value: 'completed' },
  ];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.data = this.dataService.getData().data.tasks;
    this.clonedData = JSON.parse(JSON.stringify(this.data));
    console.log(this.data);
  }

  onDragStart(index: number) {
    this.startIndex = index;
  }

  onDrop(dropIndex: number) {
    const general = this.data[this.startIndex];
    this.data.splice(this.startIndex, 1);
    this.data.splice(dropIndex, 0, general);
  }

  rateChanged(index: any) {
    if (index.starred) {
      index.starred = 0;
    } else {
      index.starred = 1;
    }
  }

  onCompleted(car: any) {
    car.completed = !car.completed;
  }

  categoryChanged(item: any) {
    this.data = this.clonedData.filter((i: any) => i[item.value] === true);
  }
  getDate(milliSeconds: string) {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const date = new Date(milliSeconds);
    return monthNames[date.getMonth()] + ' ' + date.getDate();
  }
}
