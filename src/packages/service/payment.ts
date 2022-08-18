import { post } from '@/packages/http/request';

const prefix = '/finance/payment';

import serviceBase from '@/packages/service/serviceBase';

const { apiAll, apiFind, apiCreate, apiUpdate, apiDelete, apiDeletes } = { ...serviceBase(prefix) };

export { apiAll, apiFind, apiCreate, apiUpdate, apiDelete, apiDeletes };
