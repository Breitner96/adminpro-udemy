import { Component, OnInit, Input } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color, Colors } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('leyenda') escritura: string="";
  @Input('ChartLabels') doughnutChartLabels: Label[] = [];
  @Input('ChartData') doughnutChartData: number[] = [];
  @Input('ChartType') doughnutChartType: string = '';
  @Input('colors') doughnutChartcolors: any[] =[];
  
  constructor() { }

  ngOnInit(): void {

  }

}
