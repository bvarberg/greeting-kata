import { greet } from './greet'

describe("greet", () => {
  /**
   * Requirement 1:
   * Write a method greet(name) that interpolates name in a simple greeting.
   * For example, when name is "Bob", the method should return a string "Hello,
   * Bob."
   */
  it("a simple greeting", () => {
    expect(greet("Bob")).toBe("Hello, Bob.")
    expect(greet("Alice")).toBe("Hello, Alice.")
  })

  /**
   * Requirement 2:
   * Handle nulls by introducing a stand-in. For example, when name is null,
   * then the method should return the string "Hello, my friend."
   */
  it("handles null", () => {
    expect(greet(null)).toBe("Hello, my friend.")
  })

  it("handles shouting", () => {
    expect(greet("BOB")).toBe("HELLO BOB!")
  })

  it("handles two names", () => {
    const names = ["Jill", "Jane"]

    const result = greet(names)

    expect(result).toBe("Hello, Jill and Jane.")
  })

  it("handles n names", () => {
    const names = ["Amy", "Brian", "Charlotte"]

    const result = greet(names)

    expect(result).toBe("Hello, Amy, Brian, and Charlotte.")
  })
})
