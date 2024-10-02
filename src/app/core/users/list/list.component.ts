import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import UserInterface from '../../../shared/interfaces/user.interface';
import { PoModule, PoTableAction, PoWidgetModule } from '@po-ui/ng-components';
import { CommonModule } from '@angular/common';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    PoModule,
    PoWidgetModule,
    PoTemplatesModule
  ],
  providers: [
    AppService
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  http: HttpClient = inject(HttpClient)
  appService: AppService = inject(AppService)
  users!: Array<UserInterface>

  constructor(
    private router: Router
  ) { }

  actions: Array<PoTableAction> = [
    {
      label: 'Ver',
      action: (item: any) => {
        this.router.navigate(['/info', item.id])
      }
    },
    {
      label: 'Delete',
      action: (item: any) => {
        this.appService.deleteUser(item.id).subscribe({
          next: (res: any) => {
            this.users = this.users.filter((user) => user.id !== item.id)
          }
        })
      }
    }
  ]

  add() {
    this.router.navigate(['/new'])
  }

  ngOnInit(): void {
    this.appService.getallUsers().subscribe({next: (users) => {
      this.users = users
    }})

  }

}
