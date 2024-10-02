import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoModalModule, PoModule, PoTableAction } from '@po-ui/ng-components';
import { AppService } from '../../../app.service';
import UserInterface from '../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [
    PoModule
  ],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {

  http: HttpClient = inject(HttpClient)
  router: Router = inject(Router)
  activatedRouter: ActivatedRoute = inject(ActivatedRoute)
  appService: AppService = inject(AppService)
  user!: UserInterface
  id!: number

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params: any) => {
      this.id = params.id
    });

    this.appService.getById(this.id).subscribe({next: (user) => {
      this.user = user
    }})

  }
}
