import {ApiClientApi} from './core/ApiClient'
import {AnomalyClient, AuthenticateClient, FileClient, PublicConstantClient} from './client'
import {PublicCompanyClient} from './client/company/PublicCompanyClient'

export class SignalConsoPublicSdk {

  constructor(private client: ApiClientApi) {
  }

  readonly company = new PublicCompanyClient(this.client)
  readonly constant = new PublicConstantClient(this.client)
  readonly authenticate = new AuthenticateClient(this.client)
  readonly document = new FileClient(this.client)
  readonly anomaly = new AnomalyClient(this.client)
}