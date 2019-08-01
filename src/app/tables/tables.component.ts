import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'ID', 'Skills family', 'skills tool', 'current level', 'Target level within 1 year'],
          dataRows: [
              ['1', 'Developement', 'java', '1', '3'],
              ['2', 'Database', 'Oracle', '1', '3'],
              ['3', 'frameworks', 'angular', '1', '3'],
              ['4', 'Build', 'Maven',  '1', '3'],
              ['5', 'Workflow engine', 'BPM', '1', '3'],
              ['6', 'Test Tools', 'Karma', '1', '3'],
              ['7', 'continuous Integration', 'Jenkins' , '1' , '3' ,]
          ]
      };
      this.tableData2 = {
          headerRow: [ 'ID', 'skills family',  'current level', 'target level within 1 year' ],
          dataRows: [
              ['1', 'Empathy', '1' , '3' ],
              ['2', 'Communication', '1', '3'],
              ['3', 'Teamwork', '1', '3' ],
              ['4', 'Approchability and Helpfulness', '1', '3' ],
              ['5', 'Patience', '1', '3' ],
              ['6', 'Open-mindedness', '1', '3' ],
              ['7', 'Problem Solving', '1', '3' ],
              ['8', 'Accountability', '1', '3' ],
              ['9', 'Creativity', '1', '3' ],
              ['10', 'Time Management', '1', '3' ],
              ['11', 'Learning Capacity', '1', '3' ]
          ]
      };
  }

}
