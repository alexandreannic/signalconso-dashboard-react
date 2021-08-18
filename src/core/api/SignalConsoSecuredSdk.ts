import {
  CompanyAccessClient,
  CompanyClient,
  ConstantClient,
  EventClient,
  ReportedPhoneClient,
  ReportsClient,
  SubscriptionClient,
  UserClient,
  WebsiteClient,
} from './client'
import {ApiClientApi} from './core/ApiClient'
import {AsyncFileClient} from './client/async-file/AsyncFileClient'
import {CompanyAccessTokenClient} from './client/company-access-token/CompanyAccessTokenClient'
import {SecuredFileClient} from './client/file/SecuredFileClient'
import {BlockedReportNotificationClient} from './client/blockedReportNotifications/BlockedReportNotificationClient'

export class SignalConsoSecuredSdk {
  constructor(private client: ApiClientApi) {}

  readonly website = new WebsiteClient(this.client)
  readonly reportedPhone = new ReportedPhoneClient(this.client)
  readonly constant = new ConstantClient(this.client)
  readonly subscription = new SubscriptionClient(this.client)
  readonly company = new CompanyClient(this.client)
  readonly companyAccess = new CompanyAccessClient(this.client)
  readonly companyAccessToken = new CompanyAccessTokenClient(this.client)
  readonly reports = new ReportsClient(this.client)
  readonly events = new EventClient(this.client)
  readonly asyncFiles = new AsyncFileClient(this.client)
  readonly user = new UserClient(this.client)
  readonly document = new SecuredFileClient(this.client)
  readonly reportNotificationBlockList = new BlockedReportNotificationClient(this.client)
}
