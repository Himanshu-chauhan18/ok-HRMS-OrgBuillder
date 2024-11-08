import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MeterGroupModule } from 'primeng/metergroup';
import { ProgressBarModule } from 'primeng/progressbar';
import { EChartsOption } from 'echarts';
import * as echarts from 'echarts';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [MeterGroupModule, CardModule, ButtonModule, CommonModule],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css'
})
export class WidgetComponent {
  @ViewChild('chart', { static: false })
  chartElement!: ElementRef;
  myChart: any;
  
  widget_total_organizations = [
    { label: 'Paid', color: '#34d399', value: 15, icon: 'pi pi-inbox' },
    { label: 'Trail', color: '#fbbf24', value: 25, icon: 'pi pi-table' },
  ];
  widget_total_users = [
    { label: 'Active', color: '#34d399', value: 25, icon: 'pi pi-table' },
    { label: 'Inactive', color: '#fbbf24', value: 15, icon: 'pi pi-inbox' },
  ];

  widget_paid_organization = [
    { label: 'Active', color: '#34d399', value: 25, icon: 'pi pi-table' },
    { label: 'Expired', color: '#fbbf24', value: 55, icon: 'pi pi-inbox' },
  ];

  widget_trail_organization = [
    { label: 'Active', color: '#34d399', value: 25, icon: 'pi pi-table' },
    { label: 'Expired', color: '#fbbf24', value: 15, icon: 'pi pi-inbox' },
  ];

  ngAfterViewInit(): void {
   setTimeout(() => {
      this.initChart();
    }, 0);
  }

 
  initChart(): void {
    // Ensure that the element is available before initializing the chart
    if (this.chartElement && this.chartElement.nativeElement) {
      this.myChart = echarts.init(this.chartElement.nativeElement);

      // Chart options (this is your provided configuration)
      const option = {
        series: [
          {
            type: 'gauge',
            progress: {
              show: true,
              width: 18
            },
            axisLine: {
              lineStyle: {
                width: 18
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              length: 15,
              lineStyle: {
                width: 2,
                color: '#999'
              }
            },
            axisLabel: {
              distance: 25,
              color: '#999',
              fontSize: 20
            },
            anchor: {
              show: true,
              showAbove: true,
              size: 25,
              itemStyle: {
                borderWidth: 10
              }
            },
            title: {
              show: false
            },
            detail: {
              valueAnimation: true,
              fontSize: 80,
              offsetCenter: [0, '70%']
            },
            data: [
              {
                value: 70
              }
            ]
          }
        ]
      };

      // Set the chart options
      this.myChart.setOption(option);
      this.setChartSize(480, 280);

    }
  }

  ngOnDestroy(): void {
    // Destroy chart instance when component is destroyed to avoid memory leaks
    if (this.myChart) {
      this.myChart.dispose();
    }
  }

   // Method to set the width and height of the chart dynamically
   setChartSize(width: number, height: number): void {
    // Set the width and height of the chart container
    if (this.chartElement && this.chartElement.nativeElement) {
      const chartContainer = this.chartElement.nativeElement;
      chartContainer.style.width = `${width}px`;
      chartContainer.style.height = `${height}px`;

      // Resize the ECharts instance after changing the container size
      if (this.myChart) {
        this.myChart.resize();
      }
    }
  }
}
