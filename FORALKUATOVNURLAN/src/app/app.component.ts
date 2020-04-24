import { Component, OnInit, MissingTranslationStrategy } from '@angular/core';
import { IvyParser } from '@angular/compiler';
import { Observable } from 'rxjs';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  val:Array<any>;
  title = 'forwork';
  marka: string;
  at:Array<any>;
  selected: any;
  secondTable:boolean= false;
  Linechart:any={};
  Run=[];
  chart:any={};
  oil: any=[
    {name:'АЙ 95', price:165, percentage: '3%'},
    {name:'АЙ 92', price:142, percentage: '5%'},
    {name:'АЙ 96', price:174, percentage: '2%'},
    {name:'АЙ 98', price:185, percentage: '4%'},
    {name:'ДТ', price:167, percentage: '1%'},
    {name:'ГАЗ', price:154, percentage: '6%'},
  ]

  userData: any=[
    {name:"Ампициллин", min:130, max:200,average: (130+200)/2},
    {name:"Анальгин", min:375, max:500,average: (500+375)/2},
    {name:"Анальгин-ультра", min:345, max:430,average: (345+430)/2},
    {name:"Бальзам", min:1340, max:1980,average: (1340+1980)/2},
    {name:"Багомет", min:1300, max:1170,average: (1300+1170)/2},
    {name:"Вазатор", min:2790, max:3609,average: (2790+3609)/2},
    {name:"Вазелин", min:70, max:100,average: (170)/2},
    {name:"Габапентин", min:2245, max:8030,average: (2245+8030)/2},
    {name:"Гадовист", min:133899, max:192755,average: (133899+192755)/2},
    {name:"Д-кальцин", min:3245, max:4750,average: (4750+3245)/2},
    {name:"Жанин", min:4895, max:6200,average: (4896+6200)/2},
    {name:"Кавит-витамин-с", min:400, max:285,average: (400+285)/2},
    {name:"Левомицетин", min:140, max:180,average: (140+180)/2},
    {name:"Нагипол", min:3410, max:5600,average: (3410+5600)/2},
    {name:"О.зол", min:1160, max:1490,average: (1160+1490)/2},
    {name:"Панадол", min:1260, max:1450,average: (1260+1450)/2},
    {name:"Убидекаренон", min:4155, max:5405,average: (4155+5405)/2},
    {name:"Шампунь", min:3365, max:4050,average: (3365+4050)/2},
    {name:"Фторафур", min:41750, max:41750,average:41750},
    {name:"Хас-витамин", min:285, max:400,average:(285+400)/2},

  ]
  first: any=[
    {name:"Ампициллин", min:130, max:200,average: (130+200)/2},
    {name:"Анальгин", min:375, max:500,average: (500+375)/2},
    {name:"Анальгин-ультра", min:345, max:430,average: (345+430)/2},
    {name:"Бальзам", min:1340, max:1980,average: (1340+1980)/2},
    {name:"Багомет", min:1300, max:1170,average: (1300+1170)/2},
    {name:"Вазатор", min:2790, max:3609,average: (2790+3609)/2},
    {name:"Вазелин", min:70, max:100,average: (170)/2},
    {name:"Габапентин", min:2245, max:8030,average: (2245+8030)/2},
    {name:"Гадовист", min:133899, max:192755,average: (133899+192755)/2},
    {name:"Д-кальцин", min:3245, max:4750,average: (4750+3245)/2},
    {name:"Жанин", min:4895, max:6200,average: (4896+6200)/2},
    {name:"Кавит-витамин-с", min:400, max:285,average: (400+285)/2},
    {name:"Левомицетин", min:140, max:180,average: (140+180)/2},
    {name:"Нагипол", min:3410, max:5600,average: (3410+5600)/2},
    {name:"О.зол", min:1160, max:1490,average: (1160+1490)/2},
    {name:"Панадол", min:1260, max:1450,average: (1260+1450)/2},
    {name:"Убидекаренон", min:4155, max:5405,average: (4155+5405)/2},
    {name:"Шампунь", min:3365, max:4050,average: (3365+4050)/2},
    {name:"Фторафур", min:41750, max:41750,average:41750},
    {name:"Хас-витамин", min:285, max:400,average:(285+400)/2},


  ]

  // show(at){
  //   for (let i=0; i<this.userData.length; i++ ){
  //     if(this.userData[i].name==at){
  //       this.val=Array.of(at);
  //     }
  
  //   }
  //   for (let i=0; i<this.val.length; i++){

  //     document.getElementById('x').innerHTML=this.val[i].marka;
      
  //   }
    
  //   // this.data = (<HTMLButtonElement>document.getElementById("x2")).value;
  //   // document.getElementById('x').innerHTML= this.data;


  // }

  show(person){
    this.selected= person;
    this.first = this.userData;
    for(let i=0; i<this.userData.length; i++){
      if(this.userData[i].name===this.selected){
        this.val=this.infos[this.selected];
         this.secondTable=true;
         document.getElementById('tabl').style.display='none';
         document.getElementById('graph').style.display='block';
         document.getElementById('secondtabl').style.display='block';

      }
    }
  }
  
  

  hide() {
    document.getElementById('graph').style.display='none';
    document.getElementById('tabl').style.display='block';
    document.getElementById('secondtabl').style.display='none';
  }
  close(){
      document.getElementById('graph2').style.display="block";
      document.getElementById("table2").style.display="none"; 
  }
  open(){
    document.getElementById('graph2').style.display="none";
    document.getElementById("table2").style.display="block"; 

  }
  filter(e:KeyboardEvent){
    const value = (e.target as HTMLInputElement).value.toLocaleLowerCase();
  
    for(let i=0; i<this.userData.length; i++){
      if(value){
        this.userData = this.userData.filter(at => at.name.toLocaleLowerCase().includes(value));
      }
      
      else {
        this.userData=this.first;
      }

    }
  }


infos: any={
  'Ампициллин': [
    {name:"Бостандыкский",min: 140, max: 190,average: (190+140)/2},
    {name:"Ауэзовский",min: 150, max: 170,average: (450+110)/2},
    {name:"Наурызбайский",min: 160, max: 180,average: (160+180)/2},
    {name:"Алмалинский",min: 130, max: 170,average: (130+170)/2},
    {name:"Жетысуский",min: 140, max: 200,average: (140+200)/2},
  ],
  'Анальгин': [
    {name:"Бостандыкский",min: 345, max: 230,average: (345+230)/2},
    {name:"Ауэзовский",min: 2300, max: 1560,average: (2300+1560)/2},
    {name:"Наурызбайский",min: 480, max: 320,average: (480+320)/2},
    {name:"Алмалинский",min: 1120, max: 1450,average: (1320+1540)/2},
    {name:"Жетысуский",min: 1650, max: 2460,average: (1650+2450)/2},
  ],
  'Анальгин-ультра': [
    {name:"Бостандыкский",min: 345, max: 230,average: (345+230)/2},
    {name:"Ауэзовский",min: 2300, max: 1560,average: (2300+1560)/2},
    {name:"Наурызбайский",min: 480, max: 320,average: (480+320)/2},
    {name:"Алмалинский",min: 1120, max: 1450,average: (1320+1540)/2},
    {name:"Жетысуский",min: 1650, max: 2460,average: (1650+2450)/2},
   
 
  ],
  'Бальзам':[
    {name:"Бостандыкский",min: 345, max: 230,average: (345+230)/2},
    {name:"Ауэзовский",min: 2300, max: 1560,average: (2300+1560)/2},
    {name:"Наурызбайский",min: 160, max: 180,average: (160+180)/2},
    {name:"Алмалинский",min: 1120, max: 1450,average: (1320+1540)/2},
    {name:"Жетысуский",min: 1650, max: 2460,average: (1650+2450)/2},
  
  ],
  'Багомет':[
    {name:"Бостандыкский",min: 5454, max: 4365,average: (1453+5435)/2},
    {name:"Ауэзовский",min: 4325, max: 1342,average: (4343+13450)/2},
    {name:"Наурызбайский",min: 160, max: 180,average: (160+180)/2},
    {name:"Алмалинский",min: 1120, max: 1450,average: (1320+1540)/2},
    {name:"Жетысуский",min: 1650, max: 2460,average: (1650+2450)/2},
  
  ],
  'Вазатор':[
    {name:"Бостандыкский",min: 140, max: 190,average: (190+140)/2},
    {name:"Ауэзовский",min: 150, max: 170,average: (450+110)/2},
    {name:"Наурызбайский",min: 160, max: 180,average: (160+180)/2},
    {name:"Алмалинский",min: 130, max: 170,average: (130+170)/2},
    {name:"Жетысуский",min: 140, max: 200,average: (140+200)/2},
  ],
  'Вазелин':[
    {name:"Бостандыкский",min: 140, max: 190,average: (190+140)/2},
    {name:"Ауэзовский",min: 150, max: 170,average: (450+110)/2},
    {name:"Наурызбайский",min: 160, max: 180,average: (160+180)/2},
    {name:"Алмалинский",min: 130, max: 170,average: (130+170)/2},
    {name:"Жетысуский",min: 140, max: 200,average: (140+200)/2},
  ],
  'Габапентин':[
    {name:"Бостандыкский",min: 140, max: 190,average: (190+140)/2},
    {name:"Ауэзовский",min: 150, max: 170,average: (450+110)/2},
    {name:"Наурызбайский",min: 160, max: 180,average: (160+180)/2},
    {name:"Алмалинский",min: 130, max: 170,average: (130+170)/2},
    {name:"Жетысуский",min: 140, max: 200,average: (140+200)/2},
  ],
  'Гадовист':[
    {name:"Бостандыкский",min: 140, max: 190,average: (190+140)/2},
    {name:"Ауэзовский",min: 150, max: 170,average: (450+110)/2},
    {name:"Наурызбайский",min: 160, max: 180,average: (160+180)/2},
    {name:"Алмалинский",min: 130, max: 170,average: (130+170)/2},
    {name:"Жетысуский",min: 140, max: 200,average: (140+200)/2},
  ],
  'Д-кальцин':[
    {name:"Бостандыкский",min: 140, max: 190,average: (190+140)/2},
    {name:"Ауэзовский",min: 150, max: 170,average: (450+110)/2},
    {name:"Наурызбайский",min: 160, max: 180,average: (160+180)/2},
    {name:"Алмалинский",min: 130, max: 170,average: (130+170)/2},
    {name:"Жетысуский",min: 140, max: 200,average: (140+200)/2},
  ],
  'Жанин':[
    {name:"Бостандыкский",min: 140, max: 190,average: (190+140)/2},
    {name:"Ауэзовский",min: 150, max: 170,average: (450+110)/2},
    {name:"Наурызбайский",min: 160, max: 180,average: (160+180)/2},
    {name:"Алмалинский",min: 130, max: 170,average: (130+170)/2},
    {name:"Жетысуский",min: 140, max: 200,average: (140+200)/2},
  ],
  'Кавит-витамин-с':[
    {name:"Бостандыкский",min: 140, max: 190,average: (190+140)/2},
    {name:"Ауэзовский",min: 150, max: 170,average: (450+110)/2},
    {name:"Наурызбайский",min: 160, max: 180,average: (160+180)/2},
    {name:"Алмалинский",min: 130, max: 170,average: (130+170)/2},
    {name:"Жетысуский",min: 140, max: 200,average: (140+200)/2},
  ],
  'Левомицетин':[
    {name:"Бостандыкский",min: 140, max: 190,average: (190+140)/2},
    {name:"Ауэзовский",min: 150, max: 170,average: (450+110)/2},
    {name:"Наурызбайский",min: 160, max: 180,average: (160+180)/2},
    {name:"Алмалинский",min: 130, max: 170,average: (130+170)/2},
    {name:"Жетысуский",min: 140, max: 200,average: (140+200)/2},
  ],
  'Нагипол':[
    {name:"Бостандыкский",min: 140, max: 190,average: (190+140)/2},
    {name:"Ауэзовский",min: 150, max: 170,average: (450+110)/2},
    {name:"Наурызбайский",min: 160, max: 180,average: (160+180)/2},
    {name:"Алмалинский",min: 130, max: 170,average: (130+170)/2},
    {name:"Жетысуский",min: 140, max: 200,average: (140+200)/2},
  ],
  'О.зол':[
    {name:"Бостандыкский",min: 140, max: 190,average: (190+140)/2},
    {name:"Ауэзовский",min: 150, max: 170,average: (450+110)/2},
    {name:"Наурызбайский",min: 160, max: 180,average: (160+180)/2},
    {name:"Алмалинский",min: 130, max: 170,average: (130+170)/2},
    {name:"Жетысуский",min: 140, max: 200,average: (140+200)/2},
  ],
  'Панадол':[
    {name:"Бостандыкский",min: 140, max: 190,average: (190+140)/2},
    {name:"Ауэзовский",min: 150, max: 170,average: (450+110)/2},
    {name:"Наурызбайский",min: 160, max: 180,average: (160+180)/2},
    {name:"Алмалинский",min: 130, max: 170,average: (130+170)/2},
    {name:"Жетысуский",min: 140, max: 200,average: (140+200)/2},
  ],
  'Убидекаренон':[
    {name:"Бостандыкский",min: 140, max: 190,average: (190+140)/2},
    {name:"Ауэзовский",min: 150, max: 170,average: (450+110)/2},
    {name:"Наурызбайский",min: 160, max: 180,average: (160+180)/2},
    {name:"Алмалинский",min: 130, max: 170,average: (130+170)/2},
    {name:"Жетысуский",min: 140, max: 200,average: (140+200)/2},
  ],
  'Шампунь':[
    {name:"Бостандыкский",min: 140, max: 190,average: (190+140)/2},
    {name:"Ауэзовский",min: 150, max: 170,average: (450+110)/2},
    {name:"Наурызбайский",min: 160, max: 180,average: (160+180)/2},
    {name:"Алмалинский",min: 130, max: 170,average: (130+170)/2},
    {name:"Жетысуский",min: 140, max: 200,average: (140+200)/2},
  ],
  'Фторафур':[
    {name:"Бостандыкский",min: 140, max: 190,average: (190+140)/2},
    {name:"Ауэзовский",min: 150, max: 170,average: (450+110)/2},
    {name:"Наурызбайский",min: 160, max: 180,average: (160+180)/2},
    {name:"Алмалинский",min: 130, max: 170,average: (130+170)/2},
    {name:"Жетысуский",min: 140, max: 200,average: (140+200)/2},
  ],
  'Хас-витамин':[
    {name:"Бостандыкский",min: 140, max: 190,average: (190+140)/2},
    {name:"Ауэзовский",min: 150, max: 170,average: (450+110)/2},
    {name:"Наурызбайский",min: 160, max: 180,average: (160+180)/2},
    {name:"Алмалинский",min: 130, max: 170,average: (130+170)/2},
    {name:"Жетысуский",min: 140, max: 200,average: (140+200)/2},
  ],
  
}


  

  constructor() { }

  ngOnInit(): void {   
    this.Linechart = new Chart('lineChart',{
      type: 'line',
      data: {
        labels: ['a','b','c','d','e','f','g','h'],
        datasets: [{
          label: 'Бостандыкский',
          data: [140,300,500],
          backgroundColor:'red',
          borderColor: 'red',
          fill: false,
        },
        {
          label: 'Ауезовский',
          data: [130,340,500],
          backgroundColor:'blue',
          borderColor: 'blue',
          fill: false,

        },
        {
          label: 'Наурызбайский',
          data: [160,380,490],
          backgroundColor:'purple',
          borderColor: 'purple',
          fill: false,
        },
        {
          label: 'Алмалинский',
          data: [110,370,470],
          backgroundColor:'purple',
          borderColor: 'purple',
          fill: false,
        },
        {
          label: 'Жетысуский',
          data: [140,370,450],
          backgroundColor:'yellow',
          borderColor: 'yellow',
          fill: false,
        },


      ]}
    })

    this.chart = new Chart('chart',{
      type: 'line',
      data: {
        labels: ['a','b','c','d','e','f','g','h'],
        datasets: [{
          label: 'АЙ95',
          data: [0,165],
          backgroundColor:'red',
          borderColor: 'red',
          fill: false,
        },
        {
          label: 'АЙ92',
          data: [0,142],
          backgroundColor:'green',
          borderColor: 'green',
          fill: false,
        },
        {
          label: 'АЙ96',
          data: [0,174],
          backgroundColor:'purple',
          borderColor: 'purple',
          fill: false,          
        },
        {
          label: 'АЙ98',
          data: [0,185],
          backgroundColor:'yellow',
          borderColor: 'yellow',
          fill: false,          
        },
        {
          label: 'ДТ',
          data: [0,174],
          backgroundColor:'blue',
          borderColor: 'blue',
          fill: false,          
        },
        {
          label: 'ГАЗ',
          data: [0,154],
          backgroundColor:'blue',
          borderColor: 'blue',
          fill: false,          
        }, 

      ]}
      
    })
  }


}
