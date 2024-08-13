const halls = [
  {
    Hall_Id: 1,
    Hall_Name: "Extra_Large",
    Hall_Capacity: 500,
    Hourly_Price: 3000,
    Hall_Amenities: "AC/WIFI/TV/Telephone",
    Status: "Booked",
  },
  {
    Hall_Id: 2,
    Hall_Name: "Large",
    Hall_Capacity: 300,
    Hourly_Price: 2000,
    Hall_Amenities: "AC/WIFI/TV/Telephone",
    Status: "Unbooked",
  },
  {
    Hall_Id: 3,
    Hall_Name: "Medium",
    Hall_Capacity: 100,
    Hourly_Price: 1200,
    Hall_Amenities: "AC/WIFI/TV/Telephone",
    Status: "Booked",
  },
  {
    Hall_Id: 4,
    Hall_Name: "Small",
    Hall_Capacity: 50,
    Hourly_Price: 800,
    Hall_Amenities: "AC/WIFI/TV/Telephone",
    Status: "Unbooked",
  },
  {
    Hall_Id: 5,
    Hall_Name: "Extra_Large",
    Hall_Capacity: 450,
    Hourly_Price: 2800,
    Hall_Amenities: "AC/WIFI/TV/Telephone",
    Status: "Available",
  },
];

const customers = [
  {
    Customer_Id: 1,
    Customer_Name: "Arun",
    Date: "05/01/2024",
    Hall_Id: 2,
    Check_In_Time: "09:00 AM",
    Check_Out_Time: "05:00 PM",
  },
  {
    Customer_Id: 2,
    Customer_Name: "Harun",
    Date: "10/04/2024",
    Hall_Id: 3,
    Check_In_Time: "11:00 AM",
    Check_Out_Time: "03:00 PM",
  },
  {
    Customer_Id: 3,
    Customer_Name: "Giri",
    Date: "11/08/2024",
    Hall_Id: 4,
    Check_In_Time: "06:00 PM",
    Check_Out_Time: "10:00 PM",
  },
  {
    Customer_Id: 4,
    Customer_Name: "Karthi",
    Date: "20/09/2024",
    Hall_Id: 1,
    Check_In_Time: "02:00 PM",
    Check_Out_Time: "10:00 PM",
  },
  {
    Customer_Id: 5,
    Customer_Name: "Mani",
    Date: "25/12/2024",
    Hall_Id: 5,
    Check_In_Time: "10:00 AM",
    Check_Out_Time: "06:00 PM",
  },
];

// Get all Details --GET Method--
export const getDetailHall = (req, res) => {
  res.status(200).json({ data: halls });
};

// Create New Halls --POST Method--
export const createHalls = (req, res) => {
  const { Hall_Name, Hall_Capacity, Hourly_Price, Hall_Amenities, Status } =
    req.body;

  const createNew = {
    Hall_Id: halls.length + 1,
    Hall_Name,
    Hall_Capacity,
    Hourly_Price,
    Hall_Amenities,
    Status,
  };

  halls.push(createNew);
  res
    .status(200)
    .json({ message: "Hall Created Successfully", data: createNew });
};

// Get Customer data
export const customer_Data = (req, res) => {
  res.status(200).json({ data: customers });
};

// Add new Customers Data
export const createCustomers = (req, res) => {
  const { Customer_Name, Date, Check_In_Time, Check_Out_Time } = req.body;

  const newCustomer = {
    Customer_Id: customers.length + 1,
    Customer_Name,
    Date,
    Hall_Id: halls.length + 1,
    Check_In_Time,
    Check_Out_Time,
  };

  customers.push(newCustomer);
  res
    .status(200)
    .json({ message: "Customer Added Successfully", data: newCustomer });
};

// Filter Booked Halls
export const filterHalls = (req, res) => {
  const bookedHalls = halls.filter((hall) => hall.Status === "Booked");

  const hallBookedByCustomers = bookedHalls.map((hall) => {
    const customer = customers.find((cus) => cus.Hall_Id === hall.Hall_Id);
    return {
      Hall_Id: hall.Hall_Id,
      Hall_Name: hall.Hall_Name,
      Customer_Name: customer ? customer.Customer_Name : null,
      Date: customer ? customer.Date : null,
      Check_In_Time: customer ? customer.Check_In_Time : null,
      Check_Out_Time: customer ? customer.Check_Out_Time : null,
    };
  });

  res.status(200).json({
    message: "Filtered Booked Halls Details",
    data: hallBookedByCustomers,
  });
};

// Filter Customers who booked halls
export const filterCustomers = (req, res) => {
  const bookedHalls = halls.filter((hall) => hall.Status === "Booked");

  const bookedCustomers = bookedHalls.map((hall) => {
    const customer = customers.find((cus) => cus.Hall_Id === hall.Hall_Id);

    return {
      Customer_Name: customer ? customer.Customer_Name : null,
      Hall_Name: hall.Hall_Name,
      Date: customer ? customer.Date : null,
      Check_In_Time: customer ? customer.Check_In_Time : null,
      Check_Out_Time: customer ? customer.Check_Out_Time : null,
    };
  });

  res
    .status(200)
    .json({ message: "Customers Hall Booking Details", data: bookedCustomers });
};

// How many times hall booked
export const bookedCount = (req, res) => {
  const bookedHalls = halls.filter((hall) => hall.Status === "Booked");

  const countDetails = bookedHalls.map((hall) => {
    const customer = customers.find((cus) => cus.Hall_Id === hall.Hall_Id);

    return {
      Customer_Name: customer ? customer.Customer_Name : null,
      Hall_Name: hall.Hall_Name,
      Date: customer ? customer.Date : null,
      Check_In_Time: customer ? customer.Check_In_Time : null,
      Check_Out_Time: customer ? customer.Check_Out_Time : null,
      Customer_Id: customer ? customer.Customer_Id : null,
      Status: hall.Status,
    };
  });

  res.status(200).json({
    message: "Booked Halls Count",
    data: countDetails,
  });
};
