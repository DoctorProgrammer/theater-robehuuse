document.addEventListener('DOMContentLoaded', () => createSeats([10, 1, 10], 10));

function createSeats(pattern, rows) {
    const seatsContainer = document.getElementById("seats");
    const selectedSeat = document.getElementById("selectedSeat");
    let seatNumber = 0;

    Array.from({ length: rows }).forEach((_, i) => {
        pattern.forEach((value, j) => {
            const seatType = value % 2 === 0 ? "seat" : "nothing";

            Array.from({ length: value }).forEach(() => {
                const seat = document.createElement("div");
                const seatImg = document.createElement("img");

                seatImg.src = `./images/${seatType}.png`;
                seatImg.alt = seatType;
                seat.classList.add(seatType);

                if (seatType !== "nothing") {
                    seatNumber++;
                    seat.dataset.row = i + 1;
                    seat.dataset.seat = seatNumber;
                    seat.addEventListener("click", () => {
                        selectedSeat.innerHTML = `Row ${seat.dataset.row}, Seat ${seat.dataset.seat}`;
                    });
                }

                seat.appendChild(seatImg);
                seatsContainer.appendChild(seat);
            });
        });
    });
}
