export type CategorieType = "hout-beton" | "composiet" | "";
export type VariantType = "grenen" | "douglas" | "redwood" | "";
export type MontageType = "verticaal" | "horizontaal" | "";
export type PlanksType = "19" | "21" | "23" | "";
export type PoleType = "aluminium" | "beton" | "";
export type PoleColor = "antraciet" | "wit" | "grijs" | "";
export type PoleFinish = "piramide" | "vlak" | "";

export interface StepMontageData {
  categorie: CategorieType;
  variant: VariantType;
  montage: MontageType;
  planks: PlanksType;
  poleType: PoleType;
  poleColor: PoleColor;
  poleFinish: PoleFinish;
}

export interface StepPlankenData {
  height: string;
}

export interface StepOverzichtData {
  opmerking: string;
}

export interface ConfiguratorState {
  currentStep: number;
  stepMontage: StepMontageData;
  stepPlanken: StepPlankenData;
  stepOverzicht: StepOverzichtData;
}

export type ConfiguratorAction =
  | { type: "SET_STEP"; payload: number }
  | { type: "UPDATE_MONTAGE"; payload: Partial<StepMontageData> }
  | { type: "UPDATE_PLANKEN"; payload: Partial<StepPlankenData> }
  | { type: "UPDATE_OVERZICHT"; payload: Partial<StepOverzichtData> }
  | { type: "HYDRATE"; payload: ConfiguratorState };

export interface StepValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export interface StepDefinition {
  label: string;
  queryKeys: string[];
}

export const STEPS: StepDefinition[] = [
  { label: "Schuttingkeuze", queryKeys: ["categorie", "variant", "montage", "planks", "poleType", "poleColor", "poleFinish"] },
  { label: "Afmetingen", queryKeys: ["height"] },
  { label: "Overzicht", queryKeys: ["opmerking"] },
];
