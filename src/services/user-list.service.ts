import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../model/user/user.model';

@Injectable()
export class UserListService {

    private userListRef = this.db.list<User>('user-list');

    constructor(private db: AngularFireDatabase) { }

    getUserList() {
        return this.userListRef;
    }

    addUser(user: User) {
        return this.userListRef.push(user);
    }
}
