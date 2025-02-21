const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userModel = require("./models/usermodel")

const arr = [{
    slNo: "1", questionTest: "Test question", options: [{
        opt: "Options1", id: "1"
    }, { opt: "Option2", id: "2" }, {
        opt: "Opotion3", id: "3"
    }]
},
{
    slNo: "2", questionTest: "Test question2", options: [{
        opt: "Options1", id: "1"
    }, { opt: "Option2", id: "2" }, {
        opt: "Opotion3", id: "3"
    }]
},
{
    slNo: "3", questionTest: "Test question2", options: [{
        opt: "Options1", id: "1"
    }, { opt: "Option2", id: "2" }, {
        opt: "Opotion3", id: "3"
    }]
}
] //was working with sequelize for the past 1 year, so dont know about running migration file in mongo. hope this helps for listing


mongoose.connect("mongodb://127.0.0.1:27017/machine")

const app = express()
app.use(express.json())
app.use(cors())


app.post("/users/register", async (req, res) => {
    try {
        const data = req.body
        const user = await userModel.create(data)
        user.save()
        res.status(201).send("user added successfull ")
    } catch (error) {
        console.log(error, "error while adding user")
    }

})

app.get("/questions", (req, res) => {
    res.status(200).send(arr)
})


app.listen(8000, () => {
    console.log("Server is running...")
})