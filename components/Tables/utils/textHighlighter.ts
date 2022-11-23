export const textHighlighter = (n: number) => {
  const isPositive = Math.sign(n)

  if (isPositive >= 0) {
    return 'text-green-700'
  }
  return 'text-red-700'
}
