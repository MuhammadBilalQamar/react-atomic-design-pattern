export interface GridDATA {
  Vpa: boolean;
  Action_icons: any;
  ProcessingDeadlineDate: string;
  RequestId: number;
  PricingAnalyst: string;
  Requester: string;
  LDCCode: string;
  LDCId: number;
  LDCName: string;
  NumberOfAccounts: number;
  AnnualMWh: number;
  PeakDemand: number;
  ProductCode: string;
  ProductType: string;
  ProductCategory: string;
  OpportunityType: string;
  AgreementType: string;
  BillingOption: string;
  CanAutoProcess: boolean;
  IsPostCurvePricing: boolean;
  RequesterEmail: string;
  IDAErrorCount: number;
  RequestDate: string;
  StartDate: string;
  TermLength: number;
  GreenPercentage: number;
  MarginOption: string;
  BaseMarginRate: number;
  FixedEnergyMarginRate: number;
  IndexedEnergyMarginRate: number;
  TargetAllInclusive: number;
  TargetSummerOnPeak: number;
  TargetNonSummerOffPeak: number;
  CompanyLegalName: string;
  Status: string;
  WorkflowType: string;
  SalesInstructions: string;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof GridDATA;
  label: string;
  numeric: boolean;
  search?: boolean;
}
