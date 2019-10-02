export const fakeAjax = (data) => {
  return new Promise((resolve) => setTimeout(() => resolve(data.default), 3000));
}