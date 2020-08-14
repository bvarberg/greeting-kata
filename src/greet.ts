export function greet(subject: string | string[] | null): string {
  if (subject === null) {
    return "Hello, my friend."
  }

  if (Array.isArray(subject)) {
    if (subject.length === 2) {
      return `Hello, ${subject[0]} and ${subject[1]}.`
    }

    return subject.reduce((accumulator, nextName, index, source) => {
      const isLast = index === source.length - 1

      if (isLast) {
        return accumulator + ', and ' + nextName + '.'
      } else {
        return accumulator + ', ' + nextName
      }
    }, 'Hello')
  }

  if (subject === subject.toUpperCase()) {
    return `HELLO ${subject}!`
  }

  return `Hello, ${subject}.`
}
