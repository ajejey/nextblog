export function useMDXComponents(components) {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mb-3">{children}</h2>
    ),
    p: ({ children }) => (
      <p className="mb-4 text-gray-700">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-4">{children}</ul>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 rounded px-2 py-1">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-100 rounded p-4 mb-4 overflow-x-auto">
        {children}
      </pre>
    ),
    ...components,
  }
}
