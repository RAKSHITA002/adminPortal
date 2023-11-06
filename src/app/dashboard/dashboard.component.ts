import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  cards1 = [
      {
        title : 'Sales',
        value : '2.382',
        sales : '-3.65%',
        logo : ''    ,
        textType : 'danger'
      },
      {
        title : 'Earnings',
        value : '$21.300',
        sales : '6.65%',
        logo : ''    ,
        textType : 'success'
      }
    ]
    cards2 =[
      {
        title : 'Visitors',
        value : '14.212',
        sales : '5.25%',
        logo : ''    ,
        textType : 'success'
      },
      {
        title : 'Orders',
        value : '64',
        sales : '-2.25%',
        logo : ''  ,
        textType : 'danger'  
      }
  ]
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;
}
