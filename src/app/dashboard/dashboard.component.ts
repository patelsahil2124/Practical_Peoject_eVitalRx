import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { Router } from '@angular/router';
import { CommonService } from '../common/services/common/common.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    @ViewChild(MatSort) sort!: MatSort;

    displayColumns: string[] = ['firstname', 'lastname', 'zipcode', 'mobile', 'action'];
    dataSource = new MatTableDataSource([
        { 
            'id': 'uizbeg/DF0XHqhALbBbNvg==',
            'firstname': 'Sahil', 
            'lastname': 'Patel', 
            'zipcode': '382028', 
            'mobile': '9848484877'
        },
        { 
            'id': 'NkXXqnYUcz3NViMVIAaLOA==',
            'firstname': 'Jimmy', 
            'lastname': 'Patel',
            'zipcode': '384265', 
            'mobile': '9974602734'
            
        },
        { 
            'id': "vm2ucJn/nEPpQCkVY5JhHQ==",
            'firstname': "Darshil",
            'lastname': "Modi",
            'mobile': "7777755555",
            'zipcode': "384220"
        },
        { 
            'id': "d0JarzG/HIMW4shre6wH5A==",
            'firstname': "Maulik",
            'lastname': "Patel",
            'mobile': "8888855555",
            'zipcode': "384265"
        },
        { 
            'id': "wWGd2/RoD5RQ+D+LgQCDwQ==",
            'firstname': "Anjali",
            'lastname': "Patel",
            'mobile': "9979603734",
            'zipcode': "382010"
        }
        ]);

    constructor(public dialog: MatDialog, private router: Router, public commonService: CommonService) { }

    ngOnInit(): void {
    }

    openDialog(id?: string) {
        this.dialog.open(AddPatientComponent, {
            data: {
                id
            },
        });
    }

    redirect(id: string): void {
        debugger
        this.router.navigate(['dashboard/view'], { queryParams: {id}})
    }

}
