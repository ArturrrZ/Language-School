import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import BookTrial from './BookTrial'
import { getTeachers } from '../../../api/teachers'
import { createTrialRequest, getMyTrialRequests } from '../../../api/trialLessons'
import { http } from '../../../api/http'

vi.mock('../../../api/teachers', () => ({
  getTeachers: vi.fn(),
}))

vi.mock('../../../api/trialLessons', () => ({
  createTrialRequest: vi.fn(),
  getMyTrialRequests: vi.fn(),
}))

vi.mock('../../../api/http', () => ({
  http: {
    get: vi.fn(),
  },
}))

vi.mock('@mui/x-date-pickers/DateCalendar', () => ({
  DateCalendar: ({ onChange }: { onChange: (value: { format: (fmt: string) => string }) => void }) => (
    <button type='button' onClick={() => onChange({ format: () => '2030-01-01' })}>
      Pick test date
    </button>
  ),
}))

describe('BookTrial integration flow', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('allows select teacher → date → slot → confirm and sends create request', async () => {
    const mockedGetTeachers = vi.mocked(getTeachers)
    const mockedGetMyTrialRequests = vi.mocked(getMyTrialRequests)
    const mockedCreateTrialRequest = vi.mocked(createTrialRequest)
    const mockedHttpGet = vi.mocked(http.get)

    mockedGetMyTrialRequests.mockResolvedValue([] as any)
    mockedGetTeachers.mockResolvedValue([
      {
        id: 1,
        name: 'Anna Teacher',
        experience: '4 years of teaching experience',
        message: 'Hello',
      },
    ])

    mockedHttpGet.mockResolvedValue({
      data: {
        slots: [
          {
            start_at: '2030-01-01T10:00:00Z',
            end_at: '2030-01-01T10:45:00Z',
          },
        ],
      },
    } as any)

    mockedCreateTrialRequest.mockResolvedValue({ id: 10, status: 'pending' } as any)

    render(<BookTrial />)

    const user = userEvent.setup()

    const teacherOption = await screen.findByText('Anna Teacher')
    await user.click(teacherOption)

    await user.click(screen.getByRole('button', { name: 'Pick test date' }))

    const slotLabel = await screen.findByText(/ - /)
    const slotButton = slotLabel.closest('[role="button"]') as HTMLElement | null
    expect(slotButton).not.toBeNull()
    await user.click(slotButton as HTMLElement)

    expect(await screen.findByText('Confirm Trial Booking')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Confirm' }))

    await waitFor(() => {
      expect(mockedCreateTrialRequest).toHaveBeenCalledWith({
        teacher: 1,
        start_at: '2030-01-01T10:00:00Z',
        end_at: '2030-01-01T10:45:00Z',
      })
    })

    const successMessages = await screen.findAllByText('Booking created successfully')
    expect(successMessages.length).toBeGreaterThan(0)
  })
})
