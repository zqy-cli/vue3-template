import type { App } from 'vue';
// @ts-ignore
import formCreate from '@form-create/ant-design-vue';

export function registerCreateForm(app: App) {
  app.use(formCreate);
}
