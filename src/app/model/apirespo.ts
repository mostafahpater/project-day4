export interface APIResponse<t>{
      Data: t;
      Message:string;
      Success:boolean;
      IsAuthorized:boolean;
}