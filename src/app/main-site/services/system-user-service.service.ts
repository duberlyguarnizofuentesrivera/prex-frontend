import {Injectable} from '@angular/core';
import {SystemUser} from "../models/SystemUser";
import {UserStatus} from "../enums/UserStatus";
import {UserRole} from "../enums/UserRole";

@Injectable({
  providedIn: 'root'
})
export class SystemUserServiceService {

  constructor() {
  }

  getTestSystemUserDetail(): SystemUser {
    return {
      systemUserId: 3,
      systemUserNames: "Mariano Alberto Molina panta",
      systemUserIdNumber: "85474546",
      systemUserPhone: "975684351",
      systemUserPhone2: "",
      systemUserEmail: "marianopanta@live.com",
      systemUserCreationDate: new Date("2021-05-11"),
      systemUserModificationDate: new Date("2021-05-11"),
      systemUserStatus: UserStatus.ACTIVE,
      systemUserRole: UserRole.USER,
      systemUserUsername: "marianomolina",
      systemUserPassword: "123456",
    }
  }

  getSystemUserDetail(systemUserIdNumber: number): SystemUser {
    return this.getTestSystemUserDetail();
  }
}
