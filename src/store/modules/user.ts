import type { UserInfo } from '../../../types/store';
import type { ErrorMessageMode } from '../../../types/axios';
import { defineStore } from 'pinia';
import { store } from '../index';
import { RoleEnum } from '../../enums/roleEnum';
import { PageEnum } from '../../enums/pageEnum';
import { ROLES_KEY, TOKEN_KEY, USER_INFO_KEY } from '../../enums/cacheEnum';
import { getAuthCache, setAuthCache } from '../../utils/auth';
import { LoginParams } from '../../api/sys/model/userModel';
import { getUserInfo, doLogout, loginApi } from '../../api/sys/user';
import { useI18n } from '../../hooks/web/useI18n';
import { useMessage } from '../../hooks/web/useMessage';
import { router } from '../../router';
import { h } from 'vue';

interface UserState {
  userInfo: Nullable<UserInfo>;
  token?: string;
  orgList: orgList[];
  departmentList: departmentList[];
  tableList: tableList[];
  roleList: RoleEnum[];
  sessionTimeout?: boolean;
  lastUpdateTime: number;
}

interface tableList {
  name: string;
  checked: string;
}

export interface orgList {
  createBy: string;
  createTime: string;
  id: string;
  orgCode: string;
  orgLevel: string;
  orgName: string;
  parentId: string;
  updateBy: string;
  updateTime: string;
}

export interface departmentList {
  createBy: string;
  createTime: string | null;
  departmentCode: string;
  departmentName: string;
  id: string;
  orgCode: string;
  updateBy: string;
  updateTime: string | null;
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    // user info
    userInfo: null,
    // token
    token: undefined,
    // roleList
    roleList: [],
    //tab切换状态
    tableList: [],
    // 甄别机构列表
    orgList: [],
    // 部门列表
    departmentList: [],
    // Whether the login expired
    sessionTimeout: false,
    // Last fetch time
    lastUpdateTime: 0,
  }),
  getters: {
    getUserInfo(): UserInfo {
      return this.userInfo || getAuthCache<UserInfo>(USER_INFO_KEY) || {};
    },
    getToken(): string {
      return this.token || getAuthCache<string>(TOKEN_KEY);
    },
    getRoleList(): RoleEnum[] {
      return this.roleList.length > 0 ? this.roleList : getAuthCache<RoleEnum[]>(ROLES_KEY);
    },
    getSessionTimeout(): boolean {
      return !!this.sessionTimeout;
    },
    getLastUpdateTime(): number {
      return this.lastUpdateTime;
    },
    getOrgList(): orgList[] {
      return this.orgList;
    },
    getDepartmentList(): departmentList[] {
      return this.departmentList;
    },
    getableList(): tableList[] {
      return this.tableList;
    },
  },
  actions: {
    setToken(info: string | undefined) {
      this.token = info ? info : ''; // for null or undefined value
      setAuthCache(TOKEN_KEY, info);
    },
    setRoleList(roleList: RoleEnum[]) {
      this.roleList = roleList;
      setAuthCache(ROLES_KEY, roleList);
    },
    setUserInfo(info: UserInfo | null) {
      this.userInfo = info;
      this.lastUpdateTime = new Date().getTime();
      setAuthCache(USER_INFO_KEY, info);
    },
    setOrgList(orgList: orgList[]) {
      this.orgList = orgList;
    },
    setDepartmentList(departmentList: departmentList[]) {
      this.departmentList = departmentList;
    },
    setableList(TableCheck: tableList) {
      if (!this.tableList.length) {
        this.tableList.push(TableCheck);
        return;
      }
      this.tableList.map((x) => {
        if (x.name == TableCheck.name) {
          x.checked = TableCheck.checked;
        } else {
          this.tableList.push(TableCheck);
        }
      });
    },
    setSessionTimeout(flag: boolean) {
      this.sessionTimeout = flag;
    },
    resetState() {
      this.userInfo = null;
      this.token = '';
      this.roleList = [];
      this.sessionTimeout = false;
    },
    /**
     * @description: login
     */
    async login(
      params: LoginParams & {
        goHome?: boolean;
        mode?: ErrorMessageMode;
      },
    ) {
      try {
        const { goHome = true, ...loginParams } = params;
        const data = await loginApi(loginParams);
        const { token, userInfo } = data;
        // save token
        this.setToken(token);
        this.setUserInfo(userInfo);
        return this.afterLoginAction(goHome);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async afterLoginAction(goHome?: boolean) {
      if (!this.getToken) return null;
      // get user info
      const userInfo = await getUserInfo();
      this.setUserInfo(userInfo);
      const sessionTimeout = this.sessionTimeout;
      if (sessionTimeout) {
        this.setSessionTimeout(false);
      } else {
        goHome && (await router.replace(PageEnum.BASE_HOME));
      }
    },
    async getUserInfoAction() {
      if (!this.getToken) return null;
      const userInfo = await getUserInfo();
      this.setUserInfo(userInfo);
      return userInfo;
    },
    /**
     * @description: logout
     */
    async logout(goLogin = false) {
      if (this.getToken) {
        try {
          await doLogout();
        } catch {
          console.log('注销Token失败');
        }
      }
      this.setToken(undefined);
      this.setSessionTimeout(false);
      this.setUserInfo(null);
      this.setOrgList([]);
      this.setDepartmentList([]);
      goLogin && router.push(PageEnum.BASE_LOGIN);
    },

    /**
     * @description: Confirm before logging out
     */
    confirmLoginOut() {
      const { createConfirm } = useMessage();
      const { t } = useI18n();
      createConfirm({
        iconType: 'warning',
        title: () => h('span', t('sys.app.logoutTip')),
        content: () => h('span', t('sys.app.logoutMessage')),
        onOk: async () => {
          await this.logout(true);
        },
      });
    },
  },
});

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
