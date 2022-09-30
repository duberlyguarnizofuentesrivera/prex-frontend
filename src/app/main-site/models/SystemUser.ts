import {UserStatus} from "../enums/UserStatus";
import {UserRole} from "../enums/UserRole";

export interface SystemUser {
  systemUserId:number;
  systemUserNames:string;
  systemUserIdNumber:string;
  systemUserPhone:string;
  systemUserPhone2?:string;
  systemUserEmail:string;
  systemUserCreationDate:Date;
  systemUserModificationDate:Date;
  systemUserStatus:UserStatus;
  systemUserRole:UserRole;
  systemUserUsername:string;
  systemUserPassword?:string;
}
