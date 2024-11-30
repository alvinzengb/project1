import moment from "moment";

// Realistic location and service data
const locations = [
    "Los Angeles, CA",
    "New York, NY",
    "Chicago, IL",
    "Houston, TX",
    "Phoenix, AZ",
    "San Francisco, CA",
    "Miami, FL",
    "Seattle, WA",
    "Boston, MA",
    "Denver, CO",
];

const services = [
    "Elderly Assistance",
    "Childcare",
    "Home Cleaning",
    "Meal Preparation",
    "Transportation Services",
];

const bookingsData = Array.from({ length: 100 }, (_, index) => {
    const randomDate = moment().add(Math.floor(Math.random() * 180), "days").format("YYYY-MM-DD");
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    const randomService = services[Math.floor(Math.random() * services.length)];
    const randomClientName = [
        "John Doe",
        "Jane Smith",
        "Robert Johnson",
        "Emily Davis",
        "Michael Brown",
        "Sarah Wilson",
        "David Taylor",
        "Emma Thomas",
        "James White",
        "Olivia Martin",
    ][Math.floor(Math.random() * 10)];

    return {
        id: index + 1,
        name: randomClientName,
        date: randomDate,
        location: randomLocation,
        service: randomService,
    };
});

export default bookingsData;
