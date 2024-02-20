import { screen, render } from '@/tests/test-utils'

describe('sample test', () => {
  test('1 is one', () => {
    expect(1).toBe(1)
  })
  test('render div correctly', () => {
    render(<div>hello</div>)
    expect(screen.getByText('hello')).toBeInTheDocument()
  })
})
