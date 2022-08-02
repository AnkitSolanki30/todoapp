import { toast } from "react-toastify";

const pos = { position: toast.POSITION.TOP_RIGHT };

export const successNotification = (msg) => {
  toast.success(msg, pos);
};

export const errorNotification = (msg) => {
  toast.error(msg, pos);
};

export const warnNotification = (msg) => {
  toast.warning(msg, pos);
};