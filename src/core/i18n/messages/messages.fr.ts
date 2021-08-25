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
  settings: 'Paramètres',
  status: 'Status',
  notification: 'Notifications',
  statusEdited: 'Status modifié.',
  save: 'Sauvegarder',
  saved: 'Sauvegardé',
  duplicate: 'Duplicate',
  anErrorOccurred: "Une erreur s'est produite.",
  minimize: 'Minimize',
  required: 'Requis',
  cancel: 'Annuler',
  help: 'Aide',
  created_at: 'Créé le',
  validated: 'Validé',
  notValidated: 'Non validé',
  configuration: 'Configuration',
  general: 'General',
  name: 'Nom',
  others: 'Autres',
  description: 'Description',
  deploy: 'Déployer',
  unknown: 'Inconnu',
  new: 'New',
  start: 'Début',
  clear: 'Clear',
  cron: 'Cron',
  removeAsk: 'Supprimer ? ',
  thisWillBeRemoved: (_: string) => `La pièce jointe <b>${_}</b> sera définitivement supprimée.`,
  exportInXLS: 'Exporter en XLS',
  removeAllFilters: 'Supprimer les filtres',
  activateAllNotification: 'Activer toutes les notifications entreprise',
  blockAllNotification: 'Bloquer toutes les notifications entreprise',
  removeReportDesc: (siret: string) => `Le signalement ${siret} sera supprimé. Cette action est irréversible.`,
  download: 'Télécharger',
  remainingTime: 'Temps restant',
  forgottenPassword: 'Mot de passe oublié',
  forgottenPasswordDesc: 'Vous recevrez un email vous permettant de créer un nouveau mot de passe.',
  createNewPassword: 'Créer un nouveau mot de passe',
  speed: 'Speed',
  key: 'Key',
  value: 'Value',
  invite: 'Inviter',
  activate_all: 'Tout Activer',
  block_all: 'Tout Bloquer',
  parameters: 'Paramètres',
  startedAt: 'Démarré le',
  startedBy: 'Démarré le',
  receivedAt: 'Reçu le',
  endedAt: 'Terminé le',
  anonymous: 'Anonyme',
  active: 'Actif',
  seeMore: 'Voir plus',
  apiToken: 'Api token',
  login: 'Connexion',
  error: 'Erreur',
  email: 'Email',
  signin: 'Connexion',
  signup: 'Inscription',
  password: 'Mot de passe',
  logout: 'Déconnexion',
  home: 'Accueil',
  consumer: 'Consommateur',
  company: 'Entreprise',
  address: 'Adresse',
  activateMyAccount: 'Activer mon compte',
  atLeast8Characters: '8 caractères minimum',
  invalidEmail: 'Email invalide',
  firstName: 'Prénom',
  lastName: 'Nom',
  addCompany: `Enregister l'entreprise`,
  addACompany: `Enregister une entreprise`,
  youReceivedNewLetter: `Vous avez reçu un courrier postal ?`,
  siretOfYourCompany: `SIRET de votre entreprise`,
  siretOfYourCompanyDesc: `Il doit correspondre à la raison sociale indiquée sur le courrier.`,
  siretOfYourCompanyInvalid: `Le SIRET doit comporter 14 chiffres.`,
  activationCode: `Code d'activation`,
  activationCodeDesc: `Code à 6 chiffres indiqué sur le courrier.`,
  activationCodeInvalid: `Le code doit comporter 6 chiffres.`,
  emailDesc: `Adresse email de votre choix.`,
  selectedPeriod: 'Période sélectionnée',
  department: 'Département',
  companyRegistered: 'Entreprise enregistrée',
  companyRegisteredEmailSent: 'Un email vous a été envoyé avec les instructions pour accéder au compte de l\'entreprise.',
  departments: 'Départements',
  reports: 'Signalements',
  report: 'Signalement',
  you: 'Vous',
  reportHistory: 'Historique du signalement',
  reportedWebsites: 'Suivi des sites internet',
  reportedCompaniesWebsites: 'Associations sites / entreprises',
  reportedUnknownWebsites: 'Sites non identifiés',
  companyHistory: "Historique de l'entreprise",
  reports_pageTitle: 'Suivi des signalements',
  notifications: `Notifications`,
  notificationsAreDisabled: 'Activer les notifications',
  notificationsAreDisabledDesc: `Inclus les notifications concernant les signalements des entreprises.`,
  notificationSettings: `Emails reçus lors d'un nouveau signalement.`,
  notificationSettingsCustom: `Personnaliser pour mes entreprises.`,
  notificationAcceptForCompany: "Autoriser l'envoie d'emails concernant les signalements d'une entreprise.",
  report_pageTitle: `Signalement`,
  details: 'Détails',
  answer: 'Répondre',
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
  number: `Numéro`,
  numberShort: `N°`,
  street: `Rue`,
  addressSupplement: `Complément d'adresse`,
  postalCode: `Code postal`,
  city: `Ville`,
  keywords: 'Mots-clés',
  tags: 'Tags',
  categories: 'Catégories',
  foreignCountry: 'Pays étranger',
  identifiedCompany: 'Entreprise identifiée ?',
  indifferent: 'Indifférent',
  phone: 'Téléphone',
  website: 'Site web',
  howItWorks: 'Comment ça marche ?',
  helpCenter: "Centre d'aide",
  menu_phones: 'Téléphones signalés',
  menu_websites: 'Sites webs signalés',
  menu_reports: 'Signalements',
  menu_companies: 'Entreprises',
  menu_exports: 'Mes exports',
  menu_users: 'Utilisateurs DGCCRF',
  menu_subscriptions: 'Abonnements',
  menu_settings: 'Paramètres',
  category: 'Catégorie',
  myCompanies: 'Mes entreprises',
  returnDate: 'Date de retour',
  proResponse: 'Réponse du professionnel',
  searchByEmail: 'Rechercher par email',
  undeliveredDoc: 'Courrier retourné',
  undeliveredDocTitle: "Retour du courrier d'activation",
  searchByHost: 'Rechercher par nom de domaine',
  addProAttachmentFile: "Ajouter une pièces jointe fournie par l'entreprise",
  addAttachmentFile: 'Ajouter une pièces jointe',
  attachedFiles: 'Pièces jointes',
  invalidSize: (maxSize: number) => `La taille du fichier dépasse les ${maxSize} Mb`,
  somethingWentWrong: `Une erreur s'est produite`,
  altLogoSignalConso: `Logo SignalConso / Retour à la page d'accueil`,
  toggleDatatableColumns: 'Affichier/Masquer des colonnes',
  altLogoGouv: `Logo Gouvernement - Ministère de l'Economie, des Finances et de la Relance`,
  altLogoDGCCRF: `Logo DGCCRF - Direction générale de la Concurrence, de la Consommation et de la Répression des fraudes`,
  noAttachment: 'Aucune pièce jointe.',
  reportDgccrfDetails: 'Informations complémentaires pour la DGCCRF',
  selectCountries_onlyEU: 'Pays européens (UE)',
  registerCompanyError: `Échec de l'activation`,
  registerCompanyErrorDesc: `Avez-vous utilisé le bon SIRET ? Pour une même adresse physique, il est possible d'avoir plusieurs entités juridiques et donc plusieurs SIRET (exploitant, gestionnaire...).`,
  selectCountries_onlyTransfer: 'Pays avec accord',
  reportedPhoneTitle: 'Suivi des téléphones',
  noExport: 'Aucun export',
  proAnswerVisibleByDGCCRF: 'Votre réponse sera visible par le consommateur et la DGCCRF.',
  proAnswerResponseType: 'Pouvez-vous préciser votre réponse ?',
  proAnswerYourAnswer: 'Votre réponse',
  text: 'Text',
  onlyVisibleByDGCCRF: `Visibles uniquement par la <b>DGCCRF</b><div class=""></div>`,
  proAnswerYourAnswerDesc: `
    <b>Le consommateur</b> la recevra par mail. Elle pourra aussi être consultée par la <b>DGCCRF</b>.<br/>
    Nous vous demandons de rester courtois dans votre réponse. Les menaces et insultes n'ont pas leur place dans SignalConso !
  `,
  proAnswerYourDGCCRFAnswer: 'Informations complémentaires',
  proAnswerYourDGCCRFAnswerDesc: `
    Ces précisions sont à <b>l'attention de la DGCCRF</b>. Elles ne seront pas transmises au consommateur.
  `,
  proAnswerSent: 'Votre réponse a été envoyée au consommateur. Elle sera aussi consultable par la DGCCRF.',
  reportResponseDesc: {
    [ReportResponseTypes.Accepted]: 'Je prends en compte ce signalement',
    [ReportResponseTypes.Rejected]: "J'estime que ce signalement est infondé",
    [ReportResponseTypes.NotConcerned]: "J'estime que ce signalement ne concerne pas mon établissement",
  },
  allMyCompanies: 'Tous mes accès',
  allSubCompanies: 'Inclure les filiales',
  advancedFilters: 'Filtres avancés',
  comment: 'Commentaire',
  commentAdded: 'Commentaire ajouté',
  noAnswerFromPro: "Le professionnel n'a pas encore répondu au signalement.",
  companiesSearchPlaceholder: 'Rechercher par nom, SIREN, SIRET, identifiant...',
  companySearch: 'Rechercher une entreprise',
  anonymousReport: 'Signalement anonyme',
  companySearchLabel: 'SIREN, SIRET ou RCS',
  companiesToActivate: "En attente d'activation",
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
  validateLetterSent: "Valider l'envoi des courriers",
  validateLetterSentTitle: "Valider l'envoi des courriers",
  sendNewPostal: `Envoyer un nouveau courrier`,
  validateLetterSentDesc:
    'Les courriers seront considérés envoyés pour les entreprises sélectionnées. Cette action est irrévocable.',
  dgccrfUsers: 'Agents DGCCRF',
  invitationDate: "Date d'invitation",
  connectedUnder3Months: 'Connecté dans les 3 derniers mois',
  pendingInvitation: 'Invitation en attente',
  users_invite_dialog_title: 'Inviter un agent DGCCRF',
  users_invite_dialog_desc:
    "Un courrier électronique sera envoyé à l'adresse e-mail saisie ci-dessus avec un lien sécurisé permettant de créer un compte DGCCRF.",
  selectedCompanies: `entreprises sélectionnées`,
  passwordNotLongEnough: '8 caractères minimum',
  oldPassword: 'Ancien mot de passe',
  companyCreated: 'Entreprise créée',
  cannotCreateCompanyMissingInfo: `Impossible de créer l'entreprise. Son nom ou son adresse ne sont pas renseignés.`,
  editAddress: `Modifier l'adresse de l'entreprise`,
  editedAddress: `Adresse modifiée`,
  failedToChangePassword: 'Impossible de modifier le mot de passe.',
  passwordAreIdentical: 'Les mots de passe sont identiques',
  passwordDoesntMatch: "Le mot de passe n'est pas identique",
  passwordEdited: 'Mot de passe modifié.',
  invalidPassword: 'Mot de passe incorrect',
  newPassword: 'Nouveau mot de passe',
  subscription: 'Abonnement',
  emailSentToYou: 'Un email vous a été envoyé.',
  removeSubscription: "Supprimer l'abonnement",
  newPasswordConfirmation: 'Confirmation',
  userInvitationSent: 'Invitation envoyée',
  companyAccessLevel: 'Autorisation',
  emailDGCCRFValidation: 'Email invalide. Email acceptés : *.gouv.fr',
  companyAccessesTitle: 'Gestion des accès',
  daily: 'Quotidienne',
  weekly: 'Hebdomadaire',
  handleAccesses: 'Gérer les accès',
  accesses: 'Accès',
  contactAgreement: 'Accord pour contact par entreprise',
  editConsumer: 'Modifier les informations du consommateur',
  changesSaved: 'Modification enregistrée',
  selectAllDepartments: 'Tous les départements',
  deleteCompanyAccess: (name: string) => `Supprimer l\'accès à ${name} ?`,
  deleteCompanyAccessToken: (email?: string) => `Annuler l'invitation  ${email ? 'à ' + email + ' ' : ''}?`,
  loginIssueTip:
    'En cas de difficultés, vous pouvez contacter par email le service <a href="href="mailto:support@signal.conso.gouv.fr">support@signal.conso.gouv.fr</a>.',
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
