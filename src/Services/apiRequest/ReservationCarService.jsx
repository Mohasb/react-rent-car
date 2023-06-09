import { baseUrl } from "../baseUrl";
import authHeader from "../login/auth-header";

export async function ReservationCar(car, booking, user) {
  const autorization = authHeader();
  const startDate = new Date(
    booking.bookingDates.startDate + " " + booking.bookingDates.pickupTime
  );
  const endDate = new Date(
    booking.bookingDates.endDate + " " + booking.bookingDates.returnTime
  );
  const reservation = {
    startDate: startDate,
    endDate: endDate,
    branchId: booking.branch.id,
    returnBranchId: booking.returnBranch.id,
    clientId: user.id,
    carCategory: car.category,
    carId: car.id,
  };

  try {
    const response = await fetch(`${baseUrl}reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: autorization,
      },
      body: JSON.stringify(reservation),
    }).then((response) => {
      return response;
    });
    return response;
  } catch (error) {
    return error;
  }
}
