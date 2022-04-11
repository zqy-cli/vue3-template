export interface formOptions {
  rule: rule[];
  fApi: fApi;
  options: options;
}

export interface rule {
  [index: string]: any;
}

export interface fApi {
  [index: string]: any;
}

export interface formData {
  [index: string]: any;
}

export interface options {
  el?: string | HTMLElement;
  onSubmit?: (formData?: formData, fApi?: fApi) => void;
  onReload?: (fApi?: fApi) => void;
  mounted?: (fApi?: fApi) => void;
  injectEvent?: boolean;
  formData?: formData;
  global?: any;
  submitBtn?: boolean | object;
  resetBtn?: boolean | object;
  [index: string]: any;
}
