import { useOptimistic } from 'react';

export type Booking = {
  email: string;
  name: string;
  project_description: string;
};

export type Action = 'create';

export function bookingReducer(
  state: Booking | null,
  { action, booking }: { action: Action; booking: Booking }
) {
  switch (action) {
    case 'create':
      return booking;
    default:
      return state;
  }
}

export type BookingOptimisticUpdate = (action: {
  action: Action;
  booking: Booking;
}) => void;

export function useBookingOptimistic(initialBooking: Booking | null) {
  const [optimisticBooking, optimisticBookingUpdate] = useOptimistic(
    initialBooking,
    bookingReducer
  );

  return { optimisticBooking, optimisticBookingUpdate };
}
