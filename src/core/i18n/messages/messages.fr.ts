import {ReportResponseTypes} from '../../api'

export const messagesFr = {
  yes: 'Oui',
  no: 'Non',
  search: 'Rechercher',
  edit: 'Modifier',
  next: 'Suivant',
  nextStep: 'Next step',
  close: 'Fermer',
  confirm: 'Confirmer',
  create: 'Créer',
  end: 'Fin',
  see: 'Voir',
  test: 'Test',
  date: 'Date',
  add: 'Ajouter',
  previous: 'Précédent',
  back: 'Retour',
  delete: 'Supprimer',
  deleted: 'Supprimé',
  try: 'Try',
  settings: 'Settings',
  status: 'Status',
  save: 'Save',
  saved: 'Saved',
  duplicate: 'Duplicate',
  anErrorOccurred: 'Un erreur s\'est produite.',
  minimize: 'Minimize',
  required: 'Requis',
  cancel: 'Annuler',
  created_at: 'Créé le',
  validated: 'Validé',
  configuration: 'Configuration',
  general: 'General',
  name: 'Nom',
  others: 'Autres',
  description: 'Description',
  deploy: 'Deploy',
  unknown: 'Unknown',
  new: 'New',
  start: 'Début',
  clear: 'Clear',
  cron: 'Cron',
  removeAsk: 'Supprimer ? ',
  exportInXLS: 'Exporter en XLS',
  removeAllFilters: 'Supprimer les filtres',
  removeReportDesc: (siret: string) => `Le signalement ${siret} sera supprimé. Cette action est irreversible.`,
  download: 'Télécharger',
  remainingTime: 'Remaining time',
  forgottenPassword: 'Mot de passe oublié',
  forgottenPasswordDesc: 'Vous recevrez un email vous permettant de créer un nouveau mot de passe.',
  createNewPassword: 'Créer un nouveau mot de passe',
  speed: 'Speed',
  key: 'Key',
  value: 'Value',
  invite: 'Inviter',
  stringValue: 'String value',
  numberValue: 'Number value',
  parameters: 'Parameters',
  startedAt: 'Started at',
  startedBy: 'Started by',
  receivedAt: 'Reçu le',
  endedAt: 'Ended at',
  anonymous: 'Anonyme',
  active: 'Actif',
  seeMore: 'Voir plus',
  apiToken: 'Api token',
  login: 'Connexion',
  error: 'Erreur',
  email: 'Email',
  password: 'Mot de passe',
  logout: 'Déconnexion',
  home: 'Accueil',
  consumer: 'Consommateur',
  company: 'Entreprise',
  address: 'Adresse',
  atLeast8Characters: 'At least 8 characters',
  invalidEmail: 'Email invalide',
  firstName: 'Prénom',
  lastName: 'Nom',
  selectedPeriod: 'Période sélectionnée',
  department: 'Département',
  departments: 'Départements',
  reports: 'Signalements',
  report: 'Signalement',
  you: 'Vous',
  reportHistory: 'Historique du signalement',
  companyHistory: 'Historique de l\'entreprise',
  reports_pageTitle: 'Suivi des signalements',
  report_pageTitle: `Signalement`,
  details: 'Détails',
  invitNewUser: 'Inviter un nouvel utilisateur',
  editPassword: 'Modification du mot de passe.',
  editPasswordDesc: 'Changez votre mot de passe.',
  editPasswordDialogDesc: 'Le mot de passe doit avoir 8 caractères minimum.',
  reportCategoriesAreSelectByConsumer: 'Les catégories du signalement sont sélectionnées par le consommateur.',
  reportConsumerWantToBeAnonymous: 'Le consommateur souhaite rester anonyme',
  cannotExportMoreReports: (reportCount: number) => `Impossible d'exporter plus de ${reportCount} signalements.`,
  siret: 'SIRET',
  postalCodeShort: 'CP',
  files: 'Fichiers',
  problem: 'Problème',
  creationDate: 'Création',
  reportsCount: 'Nombre de signalements',
  emailConsumer: 'Email conso.',
  keywords: 'Mots-clés',
  tags: 'Tags',
  categories: 'Catégories',
  foreignCountry: 'Pays étranger',
  identifiedCompany: 'Entreprise identifiée ?',
  indifferent: 'Indifférent',
  phone: 'Téléphone',
  website: 'Site web',
  howItWorks: 'Comment ça marche ?',
  helpCenter: 'Centre d\'aide',
  menu_phones: 'Téléphones signalés',
  menu_websites: 'Sites webs signalés',
  menu_reports: 'Signalements',
  menu_companies: 'Entreprises',
  menu_exports: 'Mes exports',
  menu_users: 'Utilisateurs DGCCRF',
  menu_subscriptions: 'Abonnements',
  menu_settings: 'Paramètres',
  category: 'Catégorie',
  returnDate: 'Date de retour',
  proResponse: 'Réponse du professionnel',
  searchByEmail: 'Rechercher par email',
  undeliveredDoc: 'Courrier retourné',
  undeliveredDocTitle: 'Retour du courrier d\'activation',
  addProAttachmentFile: 'Ajouter une pièces jointe fournie par l\'entreprise',
  attachedFiles: 'Pièces jointes',
  invalidSize: (maxSize: number) => `La taille du fichier dépasse les ${maxSize} Mb`,
  somethingWentWrong: `Une erreur s'est produite`,
  altLogoSignalConso: `Logo SignalConso / Retour à la page d'accueil`,
  toggleDatatableColumns: 'Affichier/Masquer des colonnes',
  altLogoGouv: `Logo Gouvernement - Ministère de l'Economie, des Finances et de la Relance`,
  reportDgccrfDetails: 'Informations complémentaires pour la DGCCRF',
  selectCountries_onlyEU: 'Pays européens (UE)',
  selectCountries_onlyTransfer: 'Pays avec accord',
  reportedPhoneTitle: 'Suivi des téléphones',
  advancedFilters: 'Filtres avancés',
  comment: 'Commentaire',
  commentAdded: 'Commentaire ajouté',
  noAnswerFromPro: 'Le professionnel n\'a pas encore répondu au signalement.',
  companiesSearchPlaceholder: 'Rechercher par nom, SIREN, SIRET, identifiant...',
  companySearch: 'Rechercher une entreprise',
  anonymousReport: 'Signalement anonyme',
  companySearchLabel: 'SIREN, SIRET ou RCS',
  companiesToActivate: 'En attente d\'activation',
  companiesActivated: 'Entreprises identifiées',
  noCompanyFound: 'Aucune entreprise trouvée',
  isHeadOffice: 'Siège sociale',
  addDgccrfComment: 'Commentaire (interne à la DGCCRF)',
  thisDate: (_: string) => `Le ${_}`,
  byHim: (_: string) => `Par ${_}`,
  governmentCompany: 'Administration publique',
  registerACompany: 'Enregistrer une entreprise',
  noDataAtm: 'Aucune donnée',
  noReportsTitle: 'Aucun signalement',
  noReportsDesc: 'Aucun signalement ne correspond à votre recherche.',
  lastNotice: 'Relancé le',
  validateLetterSent: 'Valider l\'envoi des courriers',
  validateLetterSentTitle: 'Valider l\'envoi des courriers',
  validateLetterSentDesc: 'Les courriers seront considérés envoyés pour les entreprises sélectionnées. Cette action est irrévocable.',
  dgccrfUsers: 'Agents DGCCRF',
  invitationDate: 'Date d\'invitation',
  connectedUnder3Months: 'Connecté dans les 3 derniers mois',
  pendingInvitation: 'Invitation en attente',
  users_invite_dialog_title: 'Inviter un agent DGCCRF',
  users_invite_dialog_desc: 'Un courrier électronique sera envoyé à l\'adresse e-mail saisie ci-dessus avec un lien sécurisé permettant de créer un compte DGCCRF.',
  selectedCompanies: `entreprises sélectionnées`,
  passwordNotLongEnough: '8 caractères minimum',
  oldPassword: 'Ancien mot de passe',
  failedToChangePassword: 'Impossible de modifier le mot de passe.',
  passwordAreIdentical: 'Les mots de passe sont identiques',
  passwordDoesntMatch: 'Le mot de passe n\'est pas identitique',
  passwordEdited: 'Mot de passe modifié.',
  invalidPassword: 'Mot de passe incorrect',
  newPassword: 'Nouveau mot de passe',
  subscription: 'Abonnement',
  emailSentToYou: 'Un email vous a été envoyé.',
  removeSubscription: 'Supprimer l\'abonnement',
  newPasswordConfirmation: 'Confirmation',
  userInvitationSent: 'Invitation envoyée',
  companyAccessLevel: 'Autorisation',
  emailDGCCRFValidation: 'Email invalide. Email acceptés : *.gouv.fr',
  companyAccessesTitle: 'Gestion des accès',
  daily: 'Quotidienne',
  weekly: 'Hebdomadaire',
  handleAccesses: 'Gérer les accès',
  contactAgreement: 'Accord pour contact par entreprise',
  editConsumer: 'Modifier les informations du consommateur',
  changesSaved: 'Modification enregistrée',
  selectAllDepartments: 'Tous les départements',
  deleteCompanyAccess: (name: string) => `Supprimer l\'accès à ${name} ?`,
  deleteCompanyAccessToken: (email?: string) => `Annuler l'invitation  ${email ? 'à ' + email + ' ': ''}?`,
  loginIssueTip: 'En cas de difficultés, vous pouvez contacter par email le service <a href="href="mailto:support@signal.conso.gouv.fr">support@signal.conso.gouv.fr</a>.',
  subscriptionsAlertInfo: `
    En créant un abonnement, vous recevrez un mail quotidien ou hebdomadaire (au choix) comportant les nouveaux signalements correspondant à votre sélection de critères, qu’ils soient géographiques, thématiques ou par entreprise.
    <br/>
    <b>Ces différents critères peuvent se combiner.</b>
    <br/>
    <br/>
    Par exemple, si vous souhaitez recevoir les signalements liés à deux entreprises bancaires et ceux liés au secteur de l'immobilier, il faut créer deux alertes : une avec les deux siret et une avec la catégorie immobilier.
  `,
  alreadySelectedCompany: (name?: string) => `L'entreprise ${name ?? ''} est déjà sélectionnée`,
  nLines: (n: number) => `<b>${n}</b> lignes`,
  reportResponse: {
    [ReportResponseTypes.Accepted]: 'Signalement pris en compte',
    [ReportResponseTypes.Rejected]: 'Signalement infondé',
    [ReportResponseTypes.NotConcerned]: 'Etablissement non concerné par le signalement',
  },
}
