import type { QRCodeSegment, QRCodeRenderersOptions } from '../脚手架/vue3-template/src/components/Qrcode/src/Qrcode.vue';

export type ContentType = string | QRCodeSegment[];

export type { QRCodeRenderersOptions };

export type LogoType = {
  src: string;
  logoSize: number;
  borderColor: string;
  bgColor: string;
  borderSize: number;
  crossOrigin: string;
  borderRadius: number;
  logoRadius: number;
};

export interface RenderQrCodeParams {
  canvas: any;
  content: ContentType;
  width?: number;
  options?: QRCodeRenderersOptions;
  logo?: LogoType | string;
  image?: HTMLImageElement;
  downloadName?: string;
  download?: boolean | Fn;
}

export type ToCanvasFn = (options: RenderQrCodeParams) => Promise<unknown>;

export interface QrCodeActionType {
  download: (fileName?: string) => void;
}

export interface QrcodeDoneEventParams {
  url: string;
  ctx?: CanvasRenderingContext2D | null;
}
