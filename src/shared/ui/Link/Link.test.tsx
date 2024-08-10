import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import Link from '../Link/Link.tsx';
import '@testing-library/jest-dom'

test('Link changes the state when hovered', async () => {
  render(
    <Link page="http://antfu.hgfme">POS-UI-kit</Link>,
  )

  const link = screen.getByText('POS-UI-kit')

  expect(link).toHaveAccessibleName('Link is normal')

  await userEvent.hover(link)

  expect(link).toHaveAccessibleName('Link is hovered')

  await userEvent.unhover(link)

  expect(link).toHaveAccessibleName('Link is normal')
})
