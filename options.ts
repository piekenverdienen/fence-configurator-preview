import type {
  CategorieType,
  VariantType,
  MontageType,
  PlanksType,
  PoleType,
  PoleColor,
  PoleFinish,
} from "./types";

export interface Option<T extends string> {
  value: T;
  label: string;
}

export const categorieOptions: Option<Exclude<CategorieType, "">>[] = [
  { value: "hout-beton", label: "Hout-beton" },
  { value: "composiet", label: "Composiet" },
];

export const variantOptions: Option<Exclude<VariantType, "">>[] = [
  { value: "grenen", label: "Grenen" },
  { value: "douglas", label: "Douglas" },
  { value: "redwood", label: "Redwood" },
];

export const montageOptions: Option<Exclude<MontageType, "">>[] = [
  { value: "verticaal", label: "Verticaal" },
  { value: "horizontaal", label: "Horizontaal" },
];

export const planksOptions: Option<Exclude<PlanksType, "">>[] = [
  { value: "19", label: "19 planken" },
  { value: "21", label: "21 planken" },
  { value: "23", label: "23 planken" },
];

export const poleTypeOptions: Option<Exclude<PoleType, "">>[] = [
  { value: "aluminium", label: "Aluminium" },
  { value: "beton", label: "Beton" },
];

export const poleColorOptions: Option<Exclude<PoleColor, "">>[] = [
  { value: "antraciet", label: "Antraciet" },
  { value: "wit", label: "Wit" },
  { value: "grijs", label: "Grijs" },
];

export const poleFinishOptions: Option<Exclude<PoleFinish, "">>[] = [
  { value: "piramide", label: "Piramide" },
  { value: "vlak", label: "Vlak" },
];
