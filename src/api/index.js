import ajax from "./ajax";

export const reqLogin = (loginInfo) => ajax.post("/login", loginInfo);

export const reqCategory = (parentId) =>
  ajax.get("/manage/category/list", { parentId });
