// import { AuthenticationResult } from '@azure/msal-browser';
// import { create } from 'zustand';

// import { ToastProps } from '../components/Toast';

// type AppState = {
// 	user: AuthenticationResult | undefined;
// 	setUser: (user: AuthenticationResult | undefined) => void;
// 	toast: ToastProps | undefined;
// 	setToast: (toast: ToastProps | undefined) => void;
// 	isDirty: boolean;
// 	setIsDirty: (isDirty: boolean) => void;
// 	canEditRequest: boolean;
// 	setCanEditRequest: (canEdit: boolean) => void;
// 	canChangeWorkflow: boolean;
// 	setCanChangeWorkflow: (canChangeWorkflow: boolean) => void;
// };
// export const useAppStore = create<AppState>(set => ({
// 	user: undefined,
// 	setUser: (user: AuthenticationResult | undefined) => set({ user: user }),
// 	userProfile: undefined,
// 	setUserProfile: (userProfile: UserModel | undefined) => set({ userProfile: userProfile }),
// 	toast: undefined,
// 	setToast: (toast: ToastProps | undefined) => set({ toast: toast }),
// 	isDirty: false,
// 	setIsDirty: (isDirty: boolean) => set({ isDirty: isDirty }),
// 	canEditRequest: false,
// 	setCanEditRequest: (canEdit: boolean) => set({ canEditRequest: canEdit }),
// 	canChangeWorkflow: false,
// 	setCanChangeWorkflow: (canChangeWorkflow: boolean) => set({ canChangeWorkflow: canChangeWorkflow }),
// }));
