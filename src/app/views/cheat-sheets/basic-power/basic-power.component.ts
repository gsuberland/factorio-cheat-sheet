// Angular Imports
import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'app/services/data.service';

// Models
import { Data } from 'app/services/data';
import { CheatSheet } from 'app/shared/cheat-sheet/cheat-sheet.model';

// Constants
const dataFile = 'basic-power';

@Component({
    selector: 'app-basic-power',
    templateUrl: './basic-power.component.html',
    // styleUrls: ['./basic-power.component.scss'] // Enable as needed
})
export class BasicPowerComponent implements OnInit {
    cheatSheet: CheatSheet;
    sheetData: any;

    constructor(
        public dataService: DataService
    ) { }

    /** Get Data for the Cheat Sheet from the DataService */
    ngOnInit() {
        this.dataService.getCheatSheetData(dataFile).subscribe(
            (result: Data) => {
                this.cheatSheet = result.cheatSheet;
                this.sheetData = result.data;
            },
            error => {
                console.log(error);
            }
        );
    }

}
