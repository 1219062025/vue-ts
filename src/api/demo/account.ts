import service from '@/utils/http/axios';
import { GetAccountInfoModel } from './model/accountModel';

enum Api {
  ACCOUNT_INFO = '/account/getAccountList'
}

export const getAccountInfoApi = () => service.get<GetAccountInfoModel>(Api.ACCOUNT_INFO);
