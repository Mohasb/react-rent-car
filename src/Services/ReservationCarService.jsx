export async function ReservationCar(car, booking) {
  const reservation = {
    startDate: booking.bookingDates.startDate,
    endDate: booking.bookingDates.endDate,
    branchId: booking.branch.id,
    clientId: 1,
    carCategory: car.category,
    carId: car.id,
  };

  try {
    const response = await fetch(`http://localhost:5134/api/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservation),
    }).then((response) => {
      return response
    });
    return response
  } catch (error) {
    return error
  }
}
