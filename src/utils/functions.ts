export const nairaConverter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: "NGN"
})

export const cleanName = (name: string): string => {
    return name.replace(/%20/g, ' ').replace(/%26/g, '&');
  }