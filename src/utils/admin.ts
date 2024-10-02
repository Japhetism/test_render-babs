export const adminRequestParams = (accessToken: any) => ({
  headers: {
    Authorization: `Bearer ${accessToken.value}`
  },
  next: {
    revalidate: 0
  }
});
