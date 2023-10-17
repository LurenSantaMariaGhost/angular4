import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import {User } from './models'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  userName ='';

  users: User[] =[
    {
      id: 1,
      name: 'Eunbi',
      lastName : 'Won',
      email: 'woneunbi@gmail.com',
    },
    {
      id:2,
      name: 'Son Mi',
      lastName: 'Lee',
      email: 'leesonmi@gmail.com'
    }
  ]

  constructor (private matDialog: MatDialog) {}

  openUsersDialog(): void {
    this.matDialog.open(UsersDialogComponent).afterClosed().subscribe({next:(v) => {
      console.log('valor: ', v);
      if (!!v) {
        this.users = [
          ...this.users,
          {
            ...v,
            id: new Date().getTime(),
          },
        ];
      }

    },
  });
  }

  onEditUser(user: User): void{
    this.matDialog.open(UsersDialogComponent, {
      data: user,
    }). afterClosed().subscribe({
      next: (v) =>{
        if (!!v) {
          this.users = this.users.map((u) => 
            u.id === user.id? {...u, ...v}: u); 

        }
      }
    });
  }

  onDeleteUser(userId: number): void {
    if (confirm('¿Esta seguro?')) {
    this.users = this.users.filter((u) =>u.id !== userId);
    }
  }
}
