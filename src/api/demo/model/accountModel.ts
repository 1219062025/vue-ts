export interface GetAccountInfoModel {
  id: number;
  account: string;
  email: string;
  nickname: string;
  role: string;
  createTime: string;
  remark: string;
  status: '0' | '1';
}
