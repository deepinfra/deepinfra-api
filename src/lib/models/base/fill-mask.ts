import {CustomModel} from '@/lib/models/base/custom-model';
import {FillMaskRequest} from '@/lib/types/token-classification/request';
import {TokenClassificationResponse} from '@/lib/types/token-classification/response';
import {IClientConfig} from '@/lib/types/common/client-config';

export class FillMaskBaseModel extends CustomModel<FillMaskRequest, TokenClassificationResponse> {
  protected constructor(protected endpoint: string, protected authToken: string, config?: IClientConfig) {
    super(endpoint, authToken, config);
  }
}
