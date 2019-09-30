export const fakeAjax = (data) => {
  return new Promise((resolve, reject) => setTimeout(() => resolve(data.default), 5000));
}