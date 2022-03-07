import { toast } from 'react-toastify';

export const toastSuccess = (message: string, options?: any) => {
  toast.success(message, options);
};

export const toastError = (message: string, options?: any) => {
  toast.error(message, options);
};

export const toastInfo = (message: string, options?: any) => {
  toast.info(message, options);
};

export const toastD = (message: string, options?: any) => {
  toast(message, options);
};
