import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef,RowSelectionOptions, ColGroupDef,GridReadyEvent, RowSelectedEvent,
  GridApi,
  createGrid,} from 'ag-grid-community'; // Column Definition Type Interface
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css'



interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgGridAngular,CommonModule],  
  templateUrl: './app.component.html',     
  styleUrls: ['./app.component.css']       
})
export class AppComponent {
  public agGrid: any;
  private gridApi!: GridApi; 
  rowData = [
    {
      id: 997,
      ruleName: "2DS - Trace Changes",
      active: "Y",
      type: "Match",
      subType: "2DS - Trace Changes",
      domain: "",
      impacted: 0,
      favourite: "N",
      scheduled: "Y",
      lastScheduledDate: "01-May-2024 01:15 PM",
      alert: "Y"
    },
    {
      id: 996,
      ruleName: "Trace Changes",
      active: "Y",
      type: "Match",
      subType: "2DS - Trace Changes",
      domain: "", // Adding empty domain
      impacted: 0,
      favourite: "N",
      scheduled: "N", // Correcting key to scheduled
      lastScheduledDate: "01-May-2024 01:15 PM", // Adding missing date
      alert: "N"
    },
    {
      id: 986,
      ruleName: "File Monitor",
      active: "Y",
      type: "Match",
      subType: "1DS - File Monitor",
      domain: "", // Adding empty domain
      impacted: 57994,
      favourite: "N",
      scheduled: "Y", // Correcting key to scheduled
      lastScheduledDate: "01-May-2024 01:15 PM", // Adding missing date
      alert: "Y"
    },
    {
      id: 985,
      ruleName: "testreve1",
      active: "Y",
      type: "Match",
      subType: "1DS - File Monitor",
      domain: "", // Adding empty domain
      impacted: 13773,
      favourite: "N",
      scheduled: "N", // Correcting key to scheduled
      lastScheduledDate: "01-May-2024 01:15 PM", // Adding missing date
      alert: "N"
    }
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs:  (ColDef | ColGroupDef | any)[] = [
    { field: 'id', headerName: 'Id', filter: 'agTextColumnFilter', floatingFilter: true, hide: false },
    { field: 'ruleName', headerName: 'Rule Name', filter: 'agTextColumnFilter', floatingFilter: true, hide: false },
    { field: 'active', headerName: 'Active', filter: 'agTextColumnFilter', floatingFilter: true, hide: false },
    { field: 'type', headerName: 'Type', filter: 'agTextColumnFilter', floatingFilter: true, hide: false },
    { field: 'subType', headerName: 'Sub Type', filter: 'agTextColumnFilter', floatingFilter: true, hide: false },
    { field: 'domain', headerName: 'Domain', filter: 'agTextColumnFilter', floatingFilter: true, hide: false },
    { field: 'impacted', headerName: 'Impacted', filter: 'agTextColumnFilter', floatingFilter: true, hide: false },
    { field: 'favourite', headerName: 'Favourite', filter: 'agTextColumnFilter', floatingFilter: true, hide: false },
    { field: 'scheduled', headerName: 'Scheduled', filter: 'agTextColumnFilter', floatingFilter: true, hide: false },
    { field: 'lastScheduledDate', headerName: 'Last Scheduled Date', filter: 'agTextColumnFilter', floatingFilter: true, hide: false },
    { field: 'alert', headerName: 'Alert', filter: 'agTextColumnFilter', floatingFilter: true, hide: false },
  ];
  
  public rowSelection: RowSelectionOptions | "single" | "multiple" = {
    mode: "multiRow",
    headerCheckbox: true,
  };



  toggleColumnVisibility(index: number) {
    this.colDefs[index].hide = !this.colDefs[index].hide;
    this.colDefs = [...this.colDefs];
  }

  onRowSelected(event: RowSelectedEvent) {
    console.log(event.data, 'selected row data ')
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    params.api.sizeColumnsToFit();
  }


  saveOrUpdateData() {
    const allData: any[] = [];
    this.gridApi.forEachNode((node) => {
      allData.push(node.data);  
    });
    
    console.log('Updated Table Data:', allData);
  }
}
