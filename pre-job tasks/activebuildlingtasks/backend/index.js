const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

const schemaData = mongoose.Schema(
  {
    name: String,
    email: String,
    mobile: Number,
    itemCode: String,
    name1: String,
    name2: String,
    price: Number,
    vendorName: String,
    date: Date,
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("products", schemaData);

// read data
// http://localhost:8080/
app.get("/", async (req, res) => {
  const { date, vendorName } = req.query;
  const filter = {};

  if (date) {
    filter.date = new Date(date);
  }

  if (vendorName) {
    filter.vendorName = { $regex: new RegExp("^" + vendorName.toLowerCase(), "i") };
  }

  try {
    const data = await userModel.find(filter);
    res.json({ success: true, data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});


// create data || save data in mangoDB

app.post("/create", async (req, res) => {
  console.log(req.body);
  const { name, email, mobile,itemCode,name1, name2, price,vendorName,date } = req.body;
  const data = new userModel(req.body);
  await data.save();
  res.send({ success: true, message: "Data saved successfully", data: data });
});

// update data
// http://localhost:8080/update
/* {
  "id": "60f0b0b3b0b0c71f0c0b0b0b",
  "name": "Rahul",
// what you want to update
}*/
app.put("/update", async (req, res) => {
  console.log(req.body);
  const { id, ...rest } = req.body;
  const data = await userModel.updateOne({ _id: id }, rest);
  res.send({ success: true, message: "Data updated successfully", data: data });
});

// delete data
// http://localhost:8080/delete/id
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const data = await userModel.deleteOne({ _id: id });
  res.send({ success: true, message: "data deleted successfully", data: data });
});

app.delete;
mongoose
  .connect("mongodb://127.0.0.1:27017/inventorymanagement")
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => console.log("Server is running"));
  })
  .catch((err) => console.log(err));
