import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {
  PoDynamicFormField,
  PoDynamicModule,
  PoModule,
} from '@po-ui/ng-components';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [PoModule, PoDynamicModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
})
export class NewComponent {
  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      label: 'Nome',
      type: 'String',
    },
    {
      property: 'phone',
      label: 'Telefone',
      mask: '(99) 99999-9999',
    },
    {
      property: 'email',
      label: 'Email',
    },
    {
      property: 'dominios',
      label: 'Tipo de pessoa',
      options: [
        {
          label: 'Pessoa Física',
          value: '1',
        },
        {
          label: 'Pessoa Jurídica',
          value: '2',
        },
      ]
    },
  ];
  dynamicForm!: NgForm;

  http: HttpClient = inject(HttpClient)
  router: Router = inject(Router)
  appService: AppService = inject(AppService)

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

  submit() {
    this.dynamicForm.form.value.dominios = parseInt(this.dynamicForm.form.value.dominios)
    console.log(this.dynamicForm.form.value);

    this.appService.createUser(this.dynamicForm.form.value).subscribe({next: (user) => {
      console.log(user)
      this.router.navigate(['/'])
    }})
  }
}
